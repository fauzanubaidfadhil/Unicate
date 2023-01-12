import React from "react";
import MainDetailArtikel3 from "../Contents/MainDetailArtikel3";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";



function DetailArtikel3() {
  return (
    <HOC headreTitle="Artikel">
      <Navigation />
      <MainDetailArtikel3 />
      <Footer />
    </HOC>
  );
}

export default DetailArtikel3;
