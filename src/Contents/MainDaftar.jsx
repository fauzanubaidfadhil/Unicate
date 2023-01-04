import Background from "../Assets/backgroundform.png";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "../CSS/Daftar.css";

const MainDaftar = () => {
  const [formState, setFormState] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    errorMessage: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
  };


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
          <input type="text" name="username" placeholder="Username" required />
          <input type="text" name="fullname" placeholder="Full Name" required />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="buttondaftar" type="button" onClick="">
          DARTAR
        </button>
        <p className="textor">or</p>
        <p className="textsudah">
          Sudah mempunyai akun?{" "}
          <span style={{ color: "#009EFF" }}>Masuk sekarang</span>
        </p>
        <button className="buttongoogle" type="button" onClick="">
          <FcGoogle size={25} />
          Masuk dengan google
        </button>
      </div>
    </>
  );
};

export default MainDaftar;