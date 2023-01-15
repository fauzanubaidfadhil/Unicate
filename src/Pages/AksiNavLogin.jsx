import React from "react";
import MainAksiLogin from "../Contents/MainAksiLogin";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";

function Aksi_NavLogin() {
  return (
    <HOC headerTitle="Aksi">
      <MainAksiLogin />
      <Footer />
    </HOC>
  );
}
export default Aksi_NavLogin;
