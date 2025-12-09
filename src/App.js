// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Whole Task/home";
import Menu from "./Whole Task/menu";
import Order from "./Whole Task/order";
import Comments from "./Whole Task/comments";
import Pickoftheweek from "./Whole Task/picoftheweek";

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/comments" element={<Comments/>}/>
      <Route path="/picoftheweek" element={<Pickoftheweek/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
