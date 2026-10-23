// import { createElement, StrictMode } from 'react'
// import React from 'react'
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';

//*************************************Custom React ***********************************************/


// function customReact ( container, elem){
//   const domElement = document.createElement(elem.type);
//   domElement.innerHTML= elem.text;
//   domElement.setAttribute('href', elem.props.href);
//   domElement.setAttribute('target', elem.props.target);
//   container.appendChild(domElement)
// }

// const element = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   text: "Click me please"

// }

// const entryPoint = document.querySelector('#root');

// customReact(entryPoint, element)


//************************************************* behind the scenes ********************************/


// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com', target: '_blank'},
//   'Click here'
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   reactElement
// )

createRoot(document.getElementById('root')).render(
  <App/>
)


