import { useForm } from "react-hook-form";
import axios from "axios";
import Background from "../Assets/backgroundform.png";
import { MASUK, HOME } from "../router";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Daftar.css";
import "../CSS/Dekstop/Daftar.css";
import Swal from "sweetalert2";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {IoMdArrowRoundBack} from "react-icons/io";

import AuthLayout from "../Components/AuthLayout";

function MainDaftar() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (value) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/user-register`,
        value
      );
     if (data.Authorization) {
      localStorage.setItem(process.env.REACT_APP_AUTH, data.Authorization);
      navigate("/", { replace: true });
      Swal.fire("Daftar sukses!", "", "success");
     }
    } catch (error) {
      Swal.fire("Mohon dicek kembali data diri anda", "", "warning");
    }
  };

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
    });
  }, []);

  return (
    <AuthLayout>
      <div  data-aos="flip-up" className="posisiform">
        <img
          style={{ height: "550px", position: "absolute" }}
          src={Background}
          alt="backgroundform"
        />
        <Link style={{color:"black"}} to={HOME}>
        <h3 style={{position:"absolute", right:"0px", marginRight:"37%", marginTop:"10px"}}><IoMdArrowRoundBack style={{marginBottom:"5px"}} 
        size={40} />Back</h3>
        </Link>
        <h2 className="textwelcome">WELCOME !</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="posisiinput">
            <input
              className="inputdaftar"
              type="text"
              name="username"
              placeholder="Username"
              {...register("username", { required: true })}
            />
            <input
              className="inputdaftar"
              type="text"
              name="fullname"
              placeholder="Full Name"
              {...register("fullname", { required: true })}
            />
            <input
              className="inputdaftar"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <input
              className="inputdaftar"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <input
              className="inputdaftar"
              type="password"
              id="confPassword"
              name="confPassword"
              placeholder="Confirm Password"
              {...register("confPassword", { required: true })}
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
        </form>
      </div>
    </AuthLayout>
  );
}

export default MainDaftar;

// const [inputs, setInputs] = useState({});
// const handleChange = (event) => {
//   const name = event.target.name;
//   const value = event.target.value;
//   setInputs((values) => ({ ...values, [name]: value }));
// };

// const handleSubmit = async (event) => {
//   event.preventDefault();
//   try {
//     const { data } = await axios.post(
//       `${process.env.REACT_APP_API}/api/v1/user-register`,
//       inputs
//     );
//     if (data.Authorization !== undefined) {
//       localStorage.setItem(process.env.REACT_APP_AUTH, data.Authorization);
//       navigate("/", { replace: true });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
