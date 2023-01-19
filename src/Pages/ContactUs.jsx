import React from 'react';
import MainContactUs from '../Contents/MainContactUs';
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";

function ContactUs() {
  return (
    <HOC headreTitle="Contact Us">
      <Navigation />
      <MainContactUs />
      <Footer />
    </HOC>
  )
}

export default ContactUs;
