import React from "react";
import ReactDOM from "react-dom/client"


const heading1 = React.createElement("h1", {}, "Heading 1")
const heading2 = React.createElement("h1", {}, "Heading 2")


const container = React.createElement("h1", {id:"container"},[heading1, heading2] )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container)
console.log("this is a new feature")


// hello world
// new world