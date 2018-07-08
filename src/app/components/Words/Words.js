import React from "react";
import ObjectiveQuestions from "../ObjectiveQuestions";

export default class Words extends React.Component {
    render() {
        return (
            <div>
                <ObjectiveQuestions {...this.props} />
            </div>
        );
    }
}
