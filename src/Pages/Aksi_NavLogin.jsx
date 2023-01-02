import React from 'react';
import MainAksi from '../Contents/MainAksi';
import Navslogin from "../Components/Navslogin";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";

function Aksi_NavLogin() {
  return (
    <HOC headreTitle="Aksi">
      <Navslogin />
      <MainAksi />
      <Footer />
    </HOC>
  )
}
export default  Aksi_NavLogin;
