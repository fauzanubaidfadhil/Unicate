import React from 'react'
import Footer from '../Components/Footer';
import HOC from "../Components/HOC";
import Navslogin from "../Components/Navslogin";
import MainDonasi from "../Contents/MainDonasi";

function DonasiLogin() {
  return (
    <HOC headerTitle='Aksi-Donasi'>
        <Navslogin />
        <MainDonasi />
        <Footer />
    </HOC>
  )
}

export default DonasiLogin