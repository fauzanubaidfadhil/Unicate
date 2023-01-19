import React, { useEffect, useState } from "react";
import "../CSS/Profile.css";
import { CgProfile } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import {MdOutlinePrivacyTip} from "react-icons/md";
import { MdExitToApp } from "react-icons/md";
import MainDa from "../Contents/MainDa";
import MainKomuitasProfile from "../Contents/MainKomunitasProfile";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
    });
  }, []);

  const [menu, setMenu] = useState("Profile");
  const navigate = useNavigate();
  const logout = () => {
    Swal.fire({
      title: 'Apakah anda ingin keluar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(process.env.REACT_APP_AUTH);
        navigate("/Masuk", {replace: true});
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    });
  } 

  // const handleClick = () => {
  //   if (window.confirm("Apakah Anda Ingin Keluar")) {
  //     window.location.href = "/";
  //   } else {
  //     localStorage.setItem("showConfirmdialog", false);
  //   }
  // };

  return (
    <>
      <div data-aos="fade-up" style={{ height: "1336px" }}>
        <div className="posisi-card1-profile">
          <p style={{ cursor: "pointer" }} onClick={() => setMenu("Profile")}>
            <CgProfile size={20} style={{ marginRight: "10px" }} />
            Detail Akun
          </p>
          <p style={{ cursor: "pointer" }} onClick={() => setMenu("Komunitas")}>
            <HiUserGroup size={20} style={{ marginRight: "10px" }} />
            Komunitas
          </p>
          <p>
            <MdOutlinePrivacyTip size={20} style={{ marginRight: "10px" }} />
            Privasi
          </p>
          <p style={{ cursor: "pointer" }} onClick={() => logout()}>
            <MdExitToApp size={20} style={{ marginRight: "10px" }} />
            Keluar
          </p>
        </div>
        {menu === "Profile" && <MainDa />}
        {menu === "Komunitas" && <MainKomuitasProfile />}
      </div>
      <Footer />
    </>
  );
}
