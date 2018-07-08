import React from "react";
import "./error.css";

export default class ErrorBanner extends React.Component {
    render() {
        const { errorInfo, error = {} } = this.props;
        const errorMsg = error.message || "Something wrong happen, please try after some time.";

        return (
            <div className="container">
                <div className="gap vertical-30" />
                <div className="error-banner">
                    <b>{errorMsg}</b>
                    <pre>{errorInfo.componentStack}</pre>
                </div>
            </div>
        );
    }
}
