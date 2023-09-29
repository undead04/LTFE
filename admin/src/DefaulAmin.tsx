import React from "react";
import Header from "./component/Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import User from "./User";
import Game from "./AminGame/Game";
import Genre from "./adminGenre/Genre";
import Benefit from "./Benefit";

const DefaulAmin = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/home" element={<Home />} />
        <Route path="/admin/user" element={<User />} />
        <Route path="/admin/game" element={<Game />} />
        <Route path="/admin/genre" element={<Genre />} />
        <Route path="/admin/Benefit" element={<Benefit />} />
      </Routes>
    </>
  );
};

export default DefaulAmin;
