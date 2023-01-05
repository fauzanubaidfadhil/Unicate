import React from 'react';
import HOC from "../Components/HOC";
import Navigation from "../Components/Navigation";
import MainArtikel from "../Contents/MainArtikel";
import Footer from "../Components/Footer";

function Artikel() {
  return (
    <HOC headreTitle="Artikel">
      <Navigation />
      <MainArtikel/>
      <Footer />
    </HOC>
  )
}
export default Artikel;
