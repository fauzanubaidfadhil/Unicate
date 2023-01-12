import React from 'react';
import Navigation from "../Components/Navigation";
import MainAksiDetail2 from "../Contents/MainAksiDetail2";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";

function Aksi() {
  return (
    <HOC headerTitle="Aksi-Kisah Inspirasi3">
      <Navigation />
      <MainAksiDetail2 />
      <Footer />
    </HOC>
  )
}
export default Aksi;