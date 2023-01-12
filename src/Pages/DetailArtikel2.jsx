import React from "react";
import MainDetailArtikel2 from "../Contents/MainDetailArtikel2";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";



function DetailArtikel2() {
  return (
    <HOC headreTitle="Artikel">
      <Navigation />
      <MainDetailArtikel2 />
      <Footer />
    </HOC>
  );
}

export default DetailArtikel2;
