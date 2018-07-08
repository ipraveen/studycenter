import React from "react";
import "./style.css";

export default class SliddingOptionMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        };
    }
    handleClick = event => {
        event.preventDefault();
        event.stopPropagation();

        this.setState(prevState => {
            return {
                showMenu: !prevState.showMenu
            };
        });
    };

    handleMouseOver = event => {
        event.preventDefault();
        event.stopPropagation();

        this.setState({ showMenu: true });
    };

    handleMouseOut = event => {
        event.preventDefault();
        event.stopPropagation();

        this.setState({ showMenu: false });
    };

    handleOptionTouch = event => {
        event.preventDefault();
        event.stopPropagation();

        this.setState({ showMenu: false });
        window.location = event.target.dataset.href;
    };
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
                                <a
                                    href="#"
                                    data-href={href}
                                    onTouchStart={this.handleOptionTouch}
                                    onClick={this.handleOptionTouch}>
                                    {option}
                                </a>
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
        const { showMenu } = this.state;

        return (
            <div
                className={`option-menu${showMenu ? " hover" : ""}`}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                onTouchStart={this.handleClick}>
                <div className="logo" style={{ backgroundImage: "url(" + logo + ")" }} />
                <h1>{label}</h1>
                {this.renderOverlay()}
            </div>
        );
    }
}
