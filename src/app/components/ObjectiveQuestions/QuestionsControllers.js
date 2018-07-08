import React, { Component } from "react";
import Question from "./Question";
import Header from "./Header";
import QuizStatus from "./QuizStatus";
import { QUIZ_QUESTIONS_COUNT } from "../../config";

export default class QuestionsControllers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            rightAnsCount: 0,
            wrongAnsCount: 0
        };
    }

    handleQuestionCheck = (id, item) => {
        this.setState(prevState => {
            const newState = {
                status: item.isTrue,
                checkedQuestionId: id
            };

            if (item.isTrue === true) {
                newState.rightAnsCount = prevState.rightAnsCount + 1;
            } else {
                newState.wrongAnsCount = prevState.wrongAnsCount + 1;
            }

            return newState;
        });
    };

    handleNextNavigation = () => {
        this.setState(prevState => {
            return {
                questionIndex: prevState.questionIndex + 1,
                status: undefined,
                checkedQuestionId: undefined,
                canRenderInfoSection: false
            };
        });
    };

    renderQuestions() {
        const { questions, type } = this.props;
        const { questionIndex, status, checkedQuestionId } = this.state;
        if (questions) {
            const question = questions[questionIndex];
            return (
                <Question
                    type={type}
                    status={status}
                    checkedQuestionId={checkedQuestionId}
                    onQuestionCheck={this.handleQuestionCheck}
                    {...question}
                />
            );
        }

        return null;
    }

    handleInfoLinkClick = () => {
        this.setState({
            canRenderInfoSection: true
        });
    };

    renderNavigation() {
        const { questions } = this.props;
        const { questionIndex, status } = this.state;
        if (status !== undefined) {
            const question = questions[questionIndex];

            return (
                <div>
                    <button onClick={this.handleNextNavigation}> Next</button>
                    {question.info && (
                        <a className="info-link" onClick={this.handleInfoLinkClick}>
                            Why?
                        </a>
                    )}
                </div>
            );
        }
    }

    renderInfoSection(info) {
        return (
            <div className="info-section">
                <div dangerouslySetInnerHTML={{ __html: info }} />
            </div>
        );
    }

    render() {
        const { questions } = this.props;
        const { questionIndex, rightAnsCount, wrongAnsCount, canRenderInfoSection } = this.state;

        const question = questions[questionIndex];
        const showStatusPage = QUIZ_QUESTIONS_COUNT === questionIndex;

        if (showStatusPage === true) {
            return (
                <div className="objective-questions">
                    <QuizStatus
                        questionIndex={questionIndex}
                        rightAnsCount={rightAnsCount}
                        wrongAnsCount={wrongAnsCount}
                    />
                </div>
            );
        }
        return (
            <div className="objective-questions">
                <Header questionIndex={questionIndex + 1} rightAnsCount={rightAnsCount} wrongAnsCount={wrongAnsCount} />
                {this.renderQuestions()}
                {this.renderNavigation()}
                {canRenderInfoSection && this.renderInfoSection(question.info)}
            </div>
        );
    }
}
