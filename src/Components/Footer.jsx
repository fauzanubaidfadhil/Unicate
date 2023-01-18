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
import {
  ABOUTUS,
  HOME,
  DONASI,
  PRIVACYPOLICY,
  TERMS_AND_CONDITION,
  ARTIKEL,
  KOMUNITAS,
  AKSI,
  FAQ,
} from "../router";
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
          <div className="top-main">
            <div className="top-logo">
              <img className="posisiunicate" src={image18} alt="image18" />
              <p className="textmenghadirkan">
                Menghadirkan sebuah website yang berfungsi sebagai wadah bagi
                volunters, donatur, dan masyarakat yang peduli terhadap
                pendidikan anak kurang mampu di Indonesia.
              </p>
            </div>
            <div className="menu">
              <h1 className="textmenu">Our Service</h1>
              <Link className="link" to={HOME}>
                <li className="foot">Beranda</li>
              </Link>
              <Link className="link" to={ARTIKEL}>
                <li className="foot">Artikel</li>
              </Link>
              <Link className="link" to={KOMUNITAS}>
                <li className="foot">Komunitas</li>
              </Link>
              <Link className="link" to={AKSI}>
                <li className="foot">Aksi</li>
              </Link>
            </div>
            <div className="menu">
              <h1 className="textmenu">Organization</h1>
              <li className="foot">Contact Us</li>
              <Link className="link" to={ABOUTUS}>
                <li className="foot">About Us</li>
              </Link>
              <Link className="link" to={TERMS_AND_CONDITION}>
                <li className="foot">Terms & Conditions</li>
              </Link>
              <Link className="link" to={FAQ}>
                <li className="foot">FAQ</li>
              </Link>
              <Link className="link" to={PRIVACYPOLICY}>
                <li className="foot">Privacy Policy</li>
              </Link>
            </div>
            <div className="posisineedhelp">
              <h2 className="textneed">
                Need Help? Contact Person
              </h2>
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
              <Link
                style={{ textDecoration: "none" }}
                clasname="link"
                to={DONASI}
              >
                <button className="buttondonasifooter" type="button">
                  Donasi
                </button>
              </Link>
            </div>
          </div>
          <div className="bottom-main">
            <div
              style={{
                borderTop: "solid",
                width: "100%",
                height: "4px",
              }}
            />
            <div className="menubottom">
              <div className="textcopyright">
                Copyright @ 2022 unicate. All Right Reserved
              </div>
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
