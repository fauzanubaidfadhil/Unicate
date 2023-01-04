import Background from "../Assets/backgroundform.png";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import ReactDOM from "react-dom/client";
import "../CSS/Daftar.css";

function MainDaftar() {
  

  return (
    <>
      <div className="posisiform">
        <img
          style={{ height: "550px", position: "absolute" }}
          src={Background}
          alt="backgroundform"
        />
        <h2 className="textwelcome">WELCOME !</h2>
        <div className="posisiinput">
          <input className="inputdaftar" type="text" name="username" placeholder="Username" />
          <input className="inputdaftar" type="text" name="fullname"  placeholder="Full Name" />
          <input className="inputdaftar" type="email" id="email"name="email" placeholder="Email"/>
          <input className="inputdaftar" type="password"id="password" name="password" placeholder="Password"/>
        </div>
        <button className="buttondaftar" type="button" onClick="">
          DARTAR
        </button>
        <p className="textor posisitextdaftar">or</p>
        <p className="textsudah posisitextdaftar">
          Sudah mempunyai akun?{" "}
          <span style={{ color: "#009EFF" }}>Masuk sekarang</span>
        </p>
        <button className="buttongoogle" type="submit" onClick="">
          <FcGoogle size={25} />
          Masuk dengan google
        </button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainDaftar />);

export default MainDaftar;
