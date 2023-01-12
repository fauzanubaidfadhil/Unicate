import Backgroundformmasuk from "../Assets/backgroundformmasuk.png";
import React, { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { DAFTAR } from "../router";
import "../CSS/Masuk.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../CSS/Dekstop/Masuk.css";

const MainMasuk = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
    });
  }, []);

  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(
        "http://localhost:5500/api/v1/user-login",
        inputs
      );
      if (data.Athorization !== undefined) {
        localStorage.setItem("Authorization", data.Authorize);
      } 
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div data-aos="flip-left" className="bungkusanmasukin">
        <img
          className="imgformmasuk"
          src={Backgroundformmasuk}
          alt="backgroundformmasuk"
        />
        <form onSubmit={handleSubmit}>
          <div className="posisiinputcuy">
            <input
              type="email"
              id="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="cekbok">
            <Checkbox {...label} />
          </div>
          <p className="teksdung pmasuk">Ingat saya</p>
          <p className="lupapasswordcoy pmasuk">Lupa password</p>

          <button className="buttonmasuk pmasuk" type="submit">
            MASUK
          </button>

          <p className="textornya pmasuk">or</p>
          <p className="textbelum pmasuk">
            Belum mempunyai akun ?{" "}
            <span style={{ color: "#009EFF" }}><Link style={{textDecoration:"none"}} to={DAFTAR} >Daftar sekarang</Link></span>
          </p>
          <button className="buttongooglemasuk" type="button">
            <FcGoogle size={25} />
            Masuk dengan google
          </button>
        </form>
      </div>
    </>
  );
};

export default MainMasuk;

// const [formState, setFormState] = useState({
//   username: "",
//   password: "",
//   errorMessage: "",
// });
// const handleInputChange = (event) => {
//   const { name, value } = event.target;
// };
