import React from "react";
import HOC from "../Components/HOC";
import MainDaftar from "../Contents/MainDaftar";
import "../CSS/Daftar.css";

function Daftar() {
  return (
    <>
      <HOC headerTitle="Daftar">
        <div className="backgroundpage">
          <MainDaftar />
        </div>
      </HOC>
    </>
  );
}

export default Daftar;
