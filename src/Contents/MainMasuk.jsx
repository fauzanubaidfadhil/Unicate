import Backgroundformmasuk from "../Assets/backgroundformmasuk.png";
// import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { BERANDA, DAFTAR } from "../router";
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

  return (
    <>
      <div data-aos="flip-left" className="bungkusanmasukin">
        <img
          className="imgformmasuk"
          src={Backgroundformmasuk}
          alt="backgroundformmasuk"
        />
        <div className="posisiinputcuy">
          <input type="text" name="username" placeholder="Username" required />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="cekbok">
          <Checkbox {...label} />
        </div>
        <p className="teksdung pmasuk">Ingat saya</p>
        <p className="lupapasswordcoy pmasuk">Lupa password</p>
        <Link to={BERANDA}>
          <button className="buttonmasuk pmasuk" type="button">
            MASUK
          </button>
        </Link>
        <p className="textornya pmasuk">or</p>
        <p className="textbelum pmasuk">
          Belum mempunyai akun ?{" "}
          <Link style={{ textDecoration: "none" }} to={DAFTAR}>
            <span style={{ color: "#009EFF" }}>Daftar sekarang</span>
          </Link>
        </p>
        <button className="buttongooglemasuk" type="button">
          <FcGoogle size={25} />
          Masuk dengan google
        </button>
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
