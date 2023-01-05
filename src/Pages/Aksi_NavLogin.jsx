import React from 'react';
import MainAksiLogin from '../Contents/MainAksiLogin';
import Navslogin from "../Components/Navslogin";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";

function Aksi_NavLogin() {
  return (
    <HOC headerTitle="Aksi">
      <Navslogin />
      <MainAksiLogin />
      <Footer />
    </HOC>
  )
}
export default  Aksi_NavLogin;
