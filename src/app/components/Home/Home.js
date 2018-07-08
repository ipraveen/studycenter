import React from "react";
import "./home.css";
import SliddingOptionMenu from "../SliddingOptionMenu";
import { topics } from "../../config";

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="home">
                    <div className="content">
                        {topics.map(topic => (
                            <div key={topic.id} className="option-wrraper">
                                <SliddingOptionMenu topic={topic} />{" "}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
