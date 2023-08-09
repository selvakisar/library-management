/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Booklist from "./components/Booklist";
import { Routes, Route, useParams } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import User from "./page/User";
import AddBooks from "./components/AddBook";
import Editbook from "./components/Editbook";
import Nopage from "./page/Nopage";
function App() {
  // const BookData = [
  //   {
  //     id: 1,
  //     name: "Nation First",
  //     Author: "V.P.Malik",
  //     Language: "English",
  //     Pages: "240",
  //     Published: "2019",
  //   },
  //   {
  //     id: 2,
  //     name: " A Nation of Idiots",
  //     Author: "Daksh tyagi",
  //     Language: "English",
  //     Pages: "300", 
  //     Published: "2021",
  //   },
  // ];

  // const [data, setData] = useState(BookData);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

        <Route path="/users" element={<User />} />
        <Route />

        {/* all books path  */}
        <Route path="/book/all" element={<Booklist />} />

        {/* Edit path */}
        <Route path="/edit/:id" element={<Editbook />} />
        <Route path="/addbook" element={<AddBooks />} />

        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
