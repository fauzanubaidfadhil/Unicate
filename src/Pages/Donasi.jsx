import React from "react";
import MainDonasi from "../Contents/MainDonasi";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";

function Donasi() {
  return (
    <HOC headerTitle="Aksi-Donasi">
      <div>
        <Navigation />
        <MainDonasi />
        <Footer />
      </div>
    </HOC>
  );
}
export default Donasi;
