import React from "react";
import HOC from "../Components/HOC";
import MainMasuk from "../Contents/MainMasuk";
import "../CSS/Masuk.css";

function Masuk() {
  return (
    <>
      <HOC headerTitle="Masuk">
        <div className="backgroundpage">
          <MainMasuk />
        </div>
      </HOC>
    </>
  );
}

export default Masuk;
