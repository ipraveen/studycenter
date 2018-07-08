import "./app.css";

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Words from "../Words";
import ObjectiveQuestions from "../ObjectiveQuestions";
import { doGet } from "../../helpers/xhr";
import { getSetQuestions } from "../../helpers/questionsHelper";
import Home from "../Home";
import ErrorBanner from "../ErrorBanner";
import Trowser from "../Trowser";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catalogFilter: "none",
            setQuestions: []
        };
    }

    tokenizePath(path = "") {
        path = path.substring(1, path.length);
        const pathTokens = {};
        const tokens = path.split("&");
        tokens.forEach(token => {
            const keyval = token.split("=");
            pathTokens[keyval[0]] = keyval[1];
        });
        return pathTokens;
    }

    handlePathChange = () => {
        const pathTokens = this.tokenizePath(location.hash);
        this.setState({ pathTokens });
        const { id } = pathTokens;
        console.log(pathTokens);
        if (id) {
            doGet(`/api/${id}.json`).then(nodes => {
                const setQuestions = getSetQuestions(nodes);
                this.setState({ nodes, setQuestions, id });
            });
        }
    };

    componentDidMount() {
        window.addEventListener("hashchange", this.handlePathChange);
        this.handlePathChange();
    }

    renderTrowserComponent(id, type, setQuestions) {
        if (type === "quiz" && id === "javascript") {
            return <ObjectiveQuestions type={id} questions={setQuestions} />;
        }
        if (type === "quiz" && id === "word") {
            return <Words type={id} questions={setQuestions} />;
        } else {
            return <h2>Coming soon, work is in progress</h2>;
        }
    }

    handleSubNavClick = catalogFilter => {
        this.setState({ catalogFilter });
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true, error, errorInfo });
    }

    renderContent() {
        const { hasError } = this.state;

        if (hasError === true) {
            const { errorInfo, error } = this.state;
            return <ErrorBanner errorInfo={errorInfo} error={error} />;
        } else {
            return <Home />;
        }
    }

    renderTrowser() {
        const { pathTokens, setQuestions } = this.state;
        console.log(pathTokens);
        if (pathTokens && pathTokens.display === "trowser") {
            return <Trowser>{this.renderTrowserComponent(pathTokens.id, pathTokens.type, setQuestions)}</Trowser>;
        }
        return null;
    }

    render() {
        return (
            <div>
                <Header onSubNavClick={this.props.handleSubNavClick} />
                <div className="gap vertical-75" />
                {this.renderContent()}
                {this.renderTrowser()}

                <Footer />
            </div>
        );
    }
}

export default App;
