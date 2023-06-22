import React from "react";
import Header from "./components/Header";
import Books from "./components/Books";

import Info from "./components/Info";
import Edit from "./components/Edit";
import Modalopen from "./components/Modalopen";

//router
import { Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/info" element={<Info />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <Modalopen />
    </>
  );
}

export default App;
