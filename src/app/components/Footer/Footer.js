import React from "react";
import "./footer.css";

export default class Footer extends React.Component {
    handleSubNavClick = () => {
        event.stopPropagation();

        const { name: catalogFilter } = event.target;
        this.props.onSubNavClick(catalogFilter);
    };

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <center>
                        A project from{" "}
                        <a href="https://www.linkedin.com/in/praveenkumarsingh84/">Praveen Kumar Singh</a>
                    </center>
                </div>
            </div>
        );
    }
}
