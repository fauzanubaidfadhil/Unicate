import React from "react";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";
import MainDonasi from "../Contents/MainDonasi";

function DonasiLogin() {
  return (
    <HOC headerTitle="Aksi-Donasi">
      <MainDonasi />
      <Footer />
    </HOC>
  );
}

export default DonasiLogin;
