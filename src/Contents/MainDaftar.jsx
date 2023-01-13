import { useState, useEffect } from "react";
import axios from "axios";
import Background from "../Assets/backgroundform.png";
// import { FcGoogle } from "react-icons/fc";
import { MASUK } from "../router";
import { Link } from "react-router-dom";
import "../CSS/Daftar.css";
import "../CSS/Dekstop/Daftar.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MainDaftar() {
  // const navigate = useNavigate();

  useEffect(() => {
    // const token = localStorage.getItem("Authorization");

    // if (token !== undefined) navigate("/", { replace: true });

    AOS.init({
      once: true,
      duration: 400,
    });
  }, []);

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5500/api/v1/user-register",
        inputs
      );

      if (data.Authorization !== undefined) {
        localStorage.setItem("Authorization", data.Authorization);
        // navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div data-aos="flip-left" className="posisiform">
      <img
        style={{ height: "550px", position: "absolute" }}
        src={Background}
        alt="backgroundform"
      />
      <h2 className="textwelcome">WELCOME !</h2>
      <form onSubmit={handleSubmit}>
        <div className="posisiinput">
          <input
            className="inputdaftar"
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            className="inputdaftar"
            type="text"
            name="fullname"
            value={inputs.fullname}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            className="inputdaftar"
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            className="inputdaftar"
            type="password"
            id="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <input
            className="inputdaftar"
            type="password"
            id="confPassword"
            name="confPassword"
            value={inputs.confPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>
        <button className="buttondaftar" type="submit">
          DAFTAR
        </button>
        <p className="textor posisitextdaftar">or</p>
        <p className="textsudah posisitextdaftar">
          Sudah mempunyai akun?{" "}
          <Link style={{ textDecoration: "none" }} to={MASUK}>
            <span style={{ color: "#009EFF" }}>Masuk sekarang</span>
          </Link>
        </p>
        {/* <button className="buttongoogle" type="button">
          <FcGoogle size={25} />
          Masuk dengan google
        </button> */}
      </form>
    </div>
  );
}

export default MainDaftar;
