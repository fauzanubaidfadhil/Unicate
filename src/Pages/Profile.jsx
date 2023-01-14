import React, { useEffect, useState } from "react";
import "../CSS/Profile.css";
import { CgProfile } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";
import MainDa from "../Contents/MainDa";
import MainKomuitasProfile from "../Contents/MainKomunitasProfile";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
    });
  }, []);

  const [menu, setMenu] = useState("Profile");

  const handleClick = () => {
    if (window.confirm("Apakah Anda Ingin Keluar")) {
      window.location.href = "/";
    } else {
      localStorage.setItem("showConfirmdialog", false);
    }
  };

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
            <MdSettings size={20} style={{ marginRight: "10px" }} />
            Pengaturan
          </p>
          <p style={{ cursor: "pointer" }} onClick={handleClick}>
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
