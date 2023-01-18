import React from "react";
//ver 17 way
// import ReactDOM from "react-dom";

import App from './App'

//ver 17 way
// ReactDOM.render(<App />, document.getElementById('root'));

import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
root.render(<App />);

