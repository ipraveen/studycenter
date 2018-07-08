import React from "react";
import "./trowser.css";

export default class Trowser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                display: true
            });
        }, 500);
    }

    handleClose = () => {
        this.setState({
            display: false
        });
        setTimeout(() => {
            window.location = "#";
        }, 1000);
    };

    render() {
        const { display } = this.state;
        const displayClass = display === true ? " display" : "";
        return (
            <div className={`trowser${displayClass}`}>
                <div className="content">{this.props.children}</div>
                <footer>
                    <button onClick={this.handleClose}> CLOSE</button>
                </footer>
            </div>
        );
    }
}
