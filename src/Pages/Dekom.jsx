import React from 'react'
import HOC from "../Components/HOC";
import Navigation from "../Components/Navigation";
import MainDekom from '../Contents/MainDekom';
import Footer from "../Components/Footer";

function Dekom() {
  return (
    <HOC headreTitle="Detail Komunitas">
      <div>
        <Navigation />
        <MainDekom/>
        <Footer />
      </div>
    </HOC>
  )
}

export default Dekom;
