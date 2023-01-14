import Backgroundformmasuk from "../Assets/backgroundformmasuk.png";
import React, { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { DAFTAR } from "../router";
import "../CSS/Masuk.css";
import "aos/dist/aos.css";
import "../CSS/Dekstop/Masuk.css";

const MainMasuk = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    const token = localStorage.getItem("Authorization");
    if (token !== null) navigate("/", { replace: true });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/user-login`, inputs);
      if (data.Athorization !== undefined) {
        localStorage.setItem(process.env.REACT_APP_AUTH, data.Authorize);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            marginLeft: "43%",
            position: "absolute",
            marginTop: "15%",
            height: "100px",
            width: "100px",
          }}
        >
          <MoonLoader color={"#009EFF"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="bungkusanmasukin">
          <img className="imgformmasuk" src={Backgroundformmasuk} alt="backgroundformmasuk" />
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
              <span style={{ color: "#009EFF" }}>
                <Link style={{ textDecoration: "none" }} to={DAFTAR}>
                  Daftar sekarang
                </Link>
              </span>
            </p>
            <button className="buttongooglemasuk" type="button">
              <FcGoogle size={25} />
              Masuk dengan google
            </button>
          </form>
        </div>
      )}
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
