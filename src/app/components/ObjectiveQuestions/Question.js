import React from "react";
import classname from "classname";
import "./question.css";

var beautify = require("js-beautify").js_beautify;

export default class Question extends React.Component {
    componentDidMount() {
        this.runPrettify();
    }
    componentDidUpdate() {
        this.runPrettify();
    }

    runPrettify() {
        const { type } = this.props;
        if (type === "javascript") {
            PR.prettyPrint && PR.prettyPrint(); //eslint-disable-line no-undef
        }
    }

    render() {
        const { id, ans, code, status, checkedQuestionId, question } = this.props;
        const ansMode = status !== undefined;

        return (
            <div className="question" key={id}>
                <h2> {question}</h2>

                {code && <pre className="prettyprint">{beautify(code, { indent_size: 2 })}</pre>}
                <ul className={classname("options", { "ans-mode": ansMode === true })}>
                    {ans &&
                        ans.map((item, index) => {
                            const id = `${this.props.id}_${index}`;
                            const { value } = item;
                            const className = classname({
                                checked: ansMode === true && id === checkedQuestionId,
                                "right-ans": ansMode === true && item.isTrue
                            });

                            return (
                                <li key={index} className={className}>
                                    <input
                                        type="checkbox"
                                        id={id}
                                        onChange={() => this.props.onQuestionCheck(id, item)}
                                    />
                                    <label htmlFor={id}>{value} </label>
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
}
