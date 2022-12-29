import React from "react";
import Navslogin from "../Components/Navslogin";
import Main from "../Contents/Main";
import HOC from "../Components/HOC";

function Beranda() {
  return (
    <HOC>
      <Navslogin />
      <Main />
    </HOC>
  );
}

export default Beranda;
