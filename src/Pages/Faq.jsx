import React from 'react';
import MainFAQ from '../Contents/MainFAQ';
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";

function Aksi() {
  return (
    <HOC headreTitle="Faq">
      <Navigation />
      <MainFAQ />
      <Footer />
    </HOC>
  )
}
export default Aksi;
