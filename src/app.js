import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/HelloWorld";

 //eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'production') {

    //eslint-disable-next-line no-console
    console.log('Looks like we are in development mode!');
}
ReactDOM.render(<HelloWorld />, document.getElementById("app"));





