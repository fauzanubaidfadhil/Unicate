import React from "react";
import MainDetailArtikel from "../Contents/MainDetailArtikel";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";



function DetailArtikel() {
  return (
    <HOC headreTitle="Artikel">
      <Navigation />
      <MainDetailArtikel />
      <Footer />
    </HOC>
  );
}

export default DetailArtikel;
