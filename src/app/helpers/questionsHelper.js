import { getRandomIntInclusive } from "../utils/mathUtil";
import { QUIZ_QUESTIONS_COUNT } from "../config";

const SET_LENGTH = QUIZ_QUESTIONS_COUNT;

function generateSet(max) {
    const setQuestionIndexes = new Set();
    let index = SET_LENGTH;
    while (index > 0) {
        const questionIndex = getRandomIntInclusive(0, max);
        if (!setQuestionIndexes.has(questionIndex)) {
            setQuestionIndexes.add(questionIndex);
            index--;
        }
    }
    return setQuestionIndexes;
}

function getSetQuestions(masterQuestions) {
    const max = masterQuestions.length - 1;
    const setQuestionsIndex = generateSet(max);
    const setQuestions = [];
    for (const index of setQuestionsIndex.values()) {
        console.log("index", index);
        setQuestions.push(masterQuestions[index]);
    }

    return setQuestions;
}

export { getSetQuestions };
