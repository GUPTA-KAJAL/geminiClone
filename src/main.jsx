// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// // import ContextProvider from './Context/Context.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <ContextProvider>
//   //   <App />
//   // </ContextProvider>,
//   root.render(<App />)
// )

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Context, AppContext } from "./Context/Context"; // Importing named exports

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContext>
    <App />
  </AppContext>
);

