import React from "react";
import MainDetailArtikel4 from "../Contents/MainDetailArtikel4";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";



function DetailArtikel4() {
  return (
    <HOC headreTitle="Artikel">
      <Navigation />
      <MainDetailArtikel4 />
      <Footer />
    </HOC>
  );
}

export default DetailArtikel4;
