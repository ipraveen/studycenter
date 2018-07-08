import React from "react";
import "./style.css";

export default class SliddingOptionMenu extends React.Component {
    renderOverlay() {
        const { topic } = this.props;
        const { id } = topic;
        const { options } = topic;
        return (
            <div className="options-overlay">
                <div className="options">
                    {options.map(option => {
                        const href = `#display=trowser&id=${id}&type=${option}`;
                        return (
                            <div key={option} className="item">
                                <a href={href}>{option}</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    render() {
        const { topic } = this.props;
        const { label, logo } = topic;

        return (
            <div className="option-menu">
                <div className="logo" style={{ backgroundImage: "url(" + logo + ")" }} />
                <h1>{label}</h1>
                {this.renderOverlay()}
            </div>
        );
    }
}
