import image18 from "../Assets/logo.png";
import icon_fb from "../Assets/icon_facebook.png";
import icon_twitter from "../Assets/icon_twitter.png";
import icon_wa from "../Assets/icon_wa.png";
import icon_ig from "../Assets/icon_instagram.png";
import icon_location from "../Assets/icon_location.png";
import icon_call from "../Assets/icon_call.png";
import icon_email from "../Assets/icon_email.png";
import button_top from "../Assets/button-top.png";
import lingkaran from "../Assets/lingkaran.png";
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
        <img className="image-18" src={image18} alt="image18" />
        <p className="text-20">
          Menghadirkan sebuah website yang berfungsi sebagai wadah bagi
          volunters, donatur, dan masyarakat yang peduli terhadap pendidikan
          anak kurang mampu di Indonesia.
        </p>
        <div className="position-list-ourservice">
          <h2>Our Service</h2>
          <li className="font-size-footer">Beranda</li>
          <li className="font-size-footer">Artikel</li>
          <li className="font-size-footer">Komunitas</li>
          <li className="font-size-footer">Kisah Inspiratif</li>
          <li className="font-size-footer">Donasi</li>
        </div>
        <div className="position-list-organization">
          <h2>Organization</h2>
          <li className="font-size-footer">Contact Us</li>
          <li className="font-size-footer">About Us</li>
          <li className="font-size-footer">Terms & Conditions</li>
          <li className="font-size-footer">FAQ</li>
          <li className="font-size-footer">Privacy Policy</li>
        </div>
        <div className="position-list-contactperson">
          <h2>Need Help? Contact Person</h2>
          <li className="list-style">
            <img
              className="size-image icon-location"
              src={icon_location}
              alt="icon_location"
            />
            <p className="text-21 font-size-footer">Bekasi, Medan, Kudus</p>
          </li>
          <li className="list-style">
            <img
              className="size-image icon-call"
              src={icon_call}
              alt="icon_call"
            />
            <p className="text-22 font-size-footer">(808) 555-000111</p>
          </li>
          <li className="list-style">
            <img
              className="size-image icon-email"
              src={icon_email}
              alt="icon_email"
            />
            <p className="text-23 font-size-footer">help.unicate@gmail.com</p>
          </li>
          
            <button
              type="button"
              onclick="alert('Hello world!')"
              className="button-2"
            >
              Donasi
            </button>
         
          <button type="button" className="dot" onClick={handleClick}>
            <img className="image-19" src={button_top} alt="panah" />
          </button>
        </div>
        <div className="position-line-footer">
          <p>Copyright @ 2022 unicate. All Right Reserved</p>
          <div className="position-icon-sosmed-footer">
            <img
              className="size-icon-sosmed-footer"
              src={icon_fb}
              alt="icon_fb"
            />
            <img
              className="size-icon-sosmed-footer"
              src={icon_twitter}
              alt="icon_twitter"
            />
            <img
              className="size-icon-sosmed-footer"
              src={icon_wa}
              alt="icon_wa"
            />
            <img
              className="size-icon-sosmed-footer"
              src={icon_ig}
              alt="icon_instagram"
            />
          </div>
          <img className="image-20" src={lingkaran} alt="lingkaran" />
        </div>
      </div>
    </>
  );
};

export default Footer;
