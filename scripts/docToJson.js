import fs from "fs";
import readline from "readline";
import uuidv1 from "uuid/v1";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function generateSet(max, index) {
    const setQuestionIndexes = new Set();
    setQuestionIndexes.add(index);
    let count = 3;
    while (count > 0) {
        const questionIndex = getRandomIntInclusive(0, max);
        if (!setQuestionIndexes.has(questionIndex)) {
            setQuestionIndexes.add(questionIndex);
            count--;
        }
    }
    return setQuestionIndexes;
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function processSections(type, sections) {
    if (type === "words") {
        return sections.map((section, index) => {
            const newSection = { ...section };
            const options = [];
            const randomSet = generateSet(sections.length - 1, index);

            for (const randomIndex of randomSet) {
                options.push({
                    value: sections[randomIndex].ans[0].value,
                    isTrue: index === randomIndex ? true : false
                });
            }

            newSection.ans = shuffle(options);
            return newSection;
        });
    }

    return sections;
}

function getEmptySection() {
    return {
        id: uuidv1(),
        question: "",
        ans: []
    };
}

function writeFile(file, data) {
    console.log("File processing is over");
    //console.log(JSON.stringify(sections, null, 2));
    fs.writeFileSync(file, data, "utf8");
}

function main(type) {
    const path = `${__dirname}/../data/${type}.md`;
    const myInterface = readline.createInterface({
        input: fs.createReadStream(path)
    });

    let sections = [];
    let section = getEmptySection();
    let codeBlockOn = false;
    let infoBlockOn = false;
    myInterface
        .on("line", _line => {
            const line = _line.trim();
            if (line.startsWith(">>>>") === true) {
                sections.push(section);
                section = getEmptySection();
            }

            //CODE SECTION
            else if (line.startsWith("```") === true && codeBlockOn === false) {
                codeBlockOn = true;
                section.code = "";
            } else if (line.startsWith("```") === true && codeBlockOn === true) {
                codeBlockOn = false;
            } else if (codeBlockOn === true) {
                section.code += line;
            }

            //INFO SECTION
            else if (line.startsWith("``") === true && infoBlockOn === false) {
                infoBlockOn = true;
                section.info = "";
            } else if (line.startsWith("``") === true && infoBlockOn === true) {
                infoBlockOn = false;
            } else if (infoBlockOn === true) {
                section.info += line;
            }

            //ANSWER SECTION
            else if (line.startsWith("1.") === true) {
                // Right answer
                section.ans.push({
                    value: line.substring(2).trim(),
                    isTrue: true
                });
            } else if (line.startsWith("0.") === true) {
                // Wrong answer
                section.ans.push({
                    value: line.substring(2).trim(),
                    isTrue: false
                });
            } else if (line.startsWith("- ") === true) {
                //Examples
                if (section.examples === undefined) {
                    section.examples = [];
                }
                section.examples.push(line.substring(2).trim());
            }
            // else if (line != "") {
            //     section.question += line;
            // }
            else if (line.startsWith("#") === true) {
                section.question += line.substring(1).trim();
            }
        })
        .on("close", () => {
            sections = processSections(type, sections);

            writeFile(`${__dirname}/../public/data/${type}.json`, JSON.stringify(sections));
            process.exit(0);
        });
}

console.log("***PROCESS START***");
const type = process.argv[2];
main(type);
