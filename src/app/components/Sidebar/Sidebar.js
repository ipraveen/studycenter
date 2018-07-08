import React from "react";

import "./sidebar.css";

export default class SideBar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <section>
                    <h1>Development</h1>
                    <ul>
                        <li>
                            <a href="/tech/javascript">JavaScript</a>
                        </li>
                        {/* <li><a href="/tech/java">Java</a></li>
                        <li><a href="/tech/css">Css</a></li> */}
                    </ul>
                </section>

                <section>
                    <h1>English</h1>
                    <ul>
                        <li>
                            <a href="/english/words">Words</a>
                        </li>
                        {/* <li><a href="/english/quotes">Quotes</a></li> */}
                    </ul>
                </section>
            </aside>
        );
    }
}
