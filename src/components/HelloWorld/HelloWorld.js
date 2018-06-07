import React from "react";
import reactIcon from "./react.png";
import "./style.css";


class HelloWorld extends React.Component {

    render() {

        return (
                 <div className="banner">
                        <img src={reactIcon} height={100} width={100}/>
                <div> Hello world with Webpack 4 and React a</div>
            </div>
        );
    }
}


export default HelloWorld;
