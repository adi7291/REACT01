import React from 'react';
import ReactDOM from 'react-dom/client';



const heading = React.createElement(
    "h2", {
        id: "heading",
        style: {
            color: "red"
        }
    },
    "Jai Shree Ram heading element"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(heading);


// JSX==> javascript xml is not html code. 
//babel==> Babel is a transpiler which take the JSX code and convert or transpiled it to browser understandable code.



const jsxElement = <h2 id='jsxHeading'>RAM RAM Bhai log.</h2>

const jsxRoot = ReactDOM.createRoot(document.getElementById("root"));

jsxRoot.render(jsxElement);

//functional component==> Functional component are the function which return 
//some piece of JSX or react element.

const HeadingComponent=()=>(<h1 id="heading"> RAM Ji functional component</h1>)

const HeadingComponent1 = ()=>{
    return (<div class='container'>
    {/* we can write any javascript inside the component using ==>{} */}
    {heading}  
        <h1 id="heading"> RAM Ji functional component1</h1>
    </div>)
}

const reactRoot = ReactDOM.createRoot(document.getElementById('rootComponent'));
reactRoot.render(<>
    <HeadingComponent/>
<HeadingComponent1/>
</>

)