import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

// const h1=React.createElement(
//     "h1",
//     {className:"heading1"},
//     "Mobile Operating System"
// );

ReactDOM.render(
    <div className="heading1">
        <h1>Mobile Operating System</h1>
        <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>Iphone</li>
        <li>Windows Phone</li>
        </ul>

        <h1>Mobile Manufacturers</h1>
        <ul>
        <li>Samsung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <ul><li>Apple</li></ul>
        </ul>
    </div>,
    document.getElementById("root")
);

