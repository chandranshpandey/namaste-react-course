import React from "react";
import ReactDOM from "react-dom/client"


const Heading1 = () => <h1 id="title" key="1">Heading 1</h1>
const Heading2 = () => <h1 id="heading2" key="2">Heading 2</h1>

const HeaderComponent = () =>{
    return(
        <div>
            <Heading1 />
            <Heading2 />
        </div>
    );

}


const container = React.createElement("h1", {id:"container"},"" )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />)



// hello world
// new world