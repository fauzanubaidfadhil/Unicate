import React from "react";
import Navslogin from "../Components/Navslogin";
import Main from "../Contents/Main";
import Slide from "../Components/Carousel";
import HOC from "../Components/HOC";

function Beranda() {
  return (
    <HOC>
      <Navslogin />
      <Main />
      <Slide />
    </HOC>
  );
}

export default Beranda;
