import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {Id: "heading"}, "Hello world from React..!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading);

// const heading = React.createElement("h1", {Id: "heading"}, "Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading);

const parent = React.createElement(
    "div", 
    {id: "parent"},[
    React.createElement("div", {id: "child"},[
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
    ]),
    React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
        ])
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);