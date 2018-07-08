import React from "react";
import "./header.css";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="logo">
                        <a href="/">
                            <b>study</b>center
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
