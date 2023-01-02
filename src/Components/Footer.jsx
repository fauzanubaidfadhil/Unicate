import image18 from "../Assets/logo.png";
import button_top from "../Assets/button-top.png";
import lingkaran from "../Assets/lingkaran.png";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import "../CSS/Footer.css";
import React from "react";
import {ABOUTUS, HOME, DONASI} from '../router'
import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="position-halo">
        <div className="maincontent">
          <div className ="top-main">
            <div className ="top-logo">
              <img className="posisiunicate" src={image18} alt="image18" />
              <p className="textmenghadirkan">
                Menghadirkan sebuah website yang berfungsi sebagai wadah bagi
                volunters, donatur, dan masyarakat yang peduli terhadap pendidikan
                anak kurang mampu di Indonesia.
              </p>
            </div>
            <div style={{marginLeft:"10%"}} className="menu">
              <h1 className="textmenu">Our Service</h1>
              <Link className="link" to={HOME}><li>Beranda</li></Link>
              <li>Artikel</li>
              <li>Komunitas</li>
              <li>Aksi</li>
            </div>
            <div className="menu">
              <h1 className="textmenu">Organization</h1>
              <li>Contact Us</li>
              <Link className="link" to={ABOUTUS}><li>About Us</li></Link>
              <li>Terms & Conditions</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </div>
            <div className="posisineedhelp">
                <h2 className="textneed">Need Help? Contact Person</h2>
                <div className="detailhelp">
                  <HiLocationMarker />
                  Bekasi, Medan, Kudus
                </div>
                <div className="detailhelp">
                  <BsTelephone /> (808) 555-000111{" "}
                </div>
                <div className="detailhelp">
                  <FiMail /> help.unicate@gmail.com{" "}
                </div>
                <Link clasname="link" to={DONASI}>
                <button
                  className="buttondonasifooter"
                  type="button"
                  onclick="alert('Hello world!')"
                >
                  Donasi
                </button></Link>
                
              </div>
            </div>
            <div className="bottom-main" >
              <div
                style={{
                  borderTop: "solid",
                  width: "80%",
                  height: "4px",
                  position:"absolute",
                }}
              />
              <div className="menubottom">
                <p className="textcopyright">Copyright @ 2022 unicate. All Right Reserved</p>
                <div className="posisiiconsosmedfooter">
                  <FiFacebook />
                  <FiTwitter />
                  <BsWhatsapp />
                  <BsInstagram />
                </div>
              </div>
            </div>
        </div>
        <img className="lingkaranfooter" src={lingkaran} alt="lingkaran" />
        <button className="buttontop" type="button" onClick={handleClick}>
                  <img
                    style={{
                      width: "32.17px",
                      height: "77.46px",
                    }}
                    className="image-19"
                    src={button_top}
                    alt="panah"
                  />
                </button>
      </div>
    </>
  );
};

export default Footer;