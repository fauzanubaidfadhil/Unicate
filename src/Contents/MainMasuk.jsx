import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "@mui/material/Checkbox";
import { DAFTAR } from "../router";
import Backgroundformmasuk from "../Assets/backgroundformmasuk.png";
import "../CSS/Masuk.css";
import "aos/dist/aos.css";
import "../CSS/Dekstop/Masuk.css";
import AuthLayout from "../Components/AuthLayout";
import Swal from "sweetalert2";

const MainMasuk = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (value) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/user-login`,
        value
      );
     if (data.Authorization) {
      localStorage.setItem(process.env.REACT_APP_AUTH, data.Authorization);
      navigate("/", { replace: true });
      Swal.fire("Selamat datang kembali!", "", "success");
     }
    } catch (error) {
      console.log(error);
      Swal.fire("username/password salah!", "", "error");
    }
  };

  return (
    <AuthLayout>
       <div className="bungkusanmasukin">
          <img
            className="imgformmasuk"
            src={Backgroundformmasuk}
            alt="backgroundformmasuk"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="posisiinputcuy">
              <input
                type="username"
                id="username"
                {...register("username", {
                  required: { value: true, message: "This field is required!" },
                })}
                placeholder="Username"
              />
              {/* {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>} */}
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                placeholder="Password"
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
    </AuthLayout>
  );
};

export default MainMasuk;
