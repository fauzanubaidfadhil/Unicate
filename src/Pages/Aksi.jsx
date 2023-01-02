import React from 'react';
import MainAksi from '../Contents/MainAksi';
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";

function Aksi() {
  return (
    <HOC headreTitle="Aksi">
      <Navigation />
      <MainAksi />
      <Footer />
    </HOC>
  )
}
export default Aksi;
