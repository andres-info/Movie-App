import React from "react";

// FUNCTIONAL COMPONENT - NORMAL FUNCTION
// function About() {
//   return <h1> Hello WOLRD</h1>;
// }

// FUNCTIONAL COMPONENT -- ARROW FUNCTION
// 1. fOR SMALLER COMPONENTS
// 2. REUSABLE COMPONENT
// 3. PRESENTIONAL COMPONENTS, PARTIALY RIGHT, WE CAN USE HOOKS AND SPECIFY STATE

// const About = () => {
//   const message = "Andres ARpe";
//   return(
//        <h1> Hwllo Word {message}</h1>
//
//        );
// };



// const About = () => {
//     const message = 'Hello World'
//
//     return React.createElement('h1', null, 'I Am Generating this with createElement')
// }


// CLASS COMPONENT

class About extends React.Component {
  render() {
    return <h1> Hello I am Class Component</h1>;
  }
}

export default About;
