import React from 'react';
import Navigation from "../Components/Navigation";
import MainAksiDetail from "../Contents/MainAksiDetail";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";

function Aksi() {
  return (
    <HOC headerTitle="Aksi-Kisah Inspirasi2">
      <Navigation />
      <MainAksiDetail />
      <Footer />
    </HOC>
  )
}
export default Aksi;
