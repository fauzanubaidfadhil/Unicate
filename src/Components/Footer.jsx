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
        <img className="posisiunicate" src={image18} alt="image18" />
        <p className="textmenghadirkan">
          Menghadirkan sebuah website yang berfungsi sebagai wadah bagi
          volunters, donatur, dan masyarakat yang peduli terhadap pendidikan
          anak kurang mampu di Indonesia.
        </p>
        <div className="posisiourservice">
          <h2 className="textour">Our Service</h2>
          <li>Beranda</li>
          <li>Artikel</li>
          <li>Komunitas</li>
          <li>Aksi</li>
        </div>
        <div className="posisiorganization">
          <h2 className="textorganization">Organization</h2>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Terms & Conditions</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
        </div>
        <div className="posisineedhelp">
          <h2 className="textneed">Need Help? Contact Person</h2>
          <li>
            <HiLocationMarker />
            Bekasi, Medan, Kudus
          </li>
          <li>
            <BsTelephone /> (808) 555-000111{" "}
          </li>
          <li>
            <FiMail /> help.unicate@gmail.com{" "}
          </li>
          <button
            className="buttondonasifooter"
            type="button"
            onclick="alert('Hello world!')"
          >
            Donasi
          </button>
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
        <div
          style={{
            borderTop: "solid",
            width: "1084px",
            height: "4px",
            position:"absolute",
            left:"0",
            marginTop:"8%",
            marginLeft: "12%",
          }}
        >
          <p className="textcopyright">Copyright @ 2022 unicate. All Right Reserved</p>
          <div className="posisiiconsosmedfooter">
          <FiFacebook />
          <FiTwitter />
          <BsWhatsapp />
          <BsInstagram />
          </div>
        </div>
        <img className="lingkaranfooter" src={lingkaran} alt="lingkaran" />
      </div>
    </>
  );
};

export default Footer;
