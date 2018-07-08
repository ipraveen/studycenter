import React from "react";

export default class Header extends React.Component {
    render() {
        const { questionIndex, rightAnsCount, wrongAnsCount } = this.props;

        return (
            <div className="table full-width">
                <div className="row">
                    <div className="col">
                        <i className="badge">{questionIndex}</i>
                    </div>
                    <div className="col align right">
                        <i className="badge green answer-count">{rightAnsCount}</i>
                        <i className="badge red answer-count">{wrongAnsCount}</i>
                    </div>
                </div>
            </div>
        );
    }
}
