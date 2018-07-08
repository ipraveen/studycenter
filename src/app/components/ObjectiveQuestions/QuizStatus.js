import React from "react";

export default class QuizStatus extends React.Component {
    render() {
        const { questionIndex, rightAnsCount, wrongAnsCount } = this.props;
        const score = Math.round((rightAnsCount / questionIndex) * 100 * 100) / 100;
        return (
            <div>
                <h1 className="score">{score} %</h1>
                <div className="table score-table">
                    <div className="row">
                        <div className="col">Question attempted</div>
                        <div className="col">{questionIndex}</div>
                    </div>
                    <div className="row">
                        <div className="col">Correct answers</div>
                        <div className="col">{rightAnsCount}</div>
                    </div>
                    <div className="row">
                        <div className="col">Wrong answers</div>
                        <div className="col">{wrongAnsCount}</div>
                    </div>
                </div>
            </div>
        );
    }
}
