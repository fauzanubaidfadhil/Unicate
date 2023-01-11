import { Container, Navbar } from "react-bootstrap";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
// import Headroom from "react-headroom";
import { MASUK, KOMUNITAS, ARTIKEL, HOME, AKSI, DAFTAR } from "../router";
import "../CSS/Navigation.css";
import React, { useState } from "react";

import Burger from "./HamburgerMenu";
import MobileNav from "./MobileView";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Headroom> */}
      <Navbar className="navbar" bg="transparant">
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <div className="menuheader">
          <div className="mainmenu">
            <Link className="linknav" to={HOME}>
              <li className="styling-menu-navbar animasi-left-right">
                Beranda
              </li>
            </Link>
            <Link className="linknav" to={KOMUNITAS}>
              <li className="styling-menu-navbar animasi-left-right">
                Komunitas
              </li>
            </Link>
            <Link className="linknav" to={ARTIKEL}>
              <li className="styling-menu-navbar animasi-left-right">
                Artikel
              </li>
            </Link>
            <Link className="linknav" to={AKSI}>
              <li className="styling-menu-navbar animasi-left-right">Aksi</li>
            </Link>
            <li className="styling-menu-navbar animasi-left-right">
              Tentang Kami
            </li>
          </div>
          <div className="buttonloginlogout">
            <Link style={{ textDecoration: "none" }} to={MASUK}>
              <button type="button" className="button-masuk">
                Masuk
              </button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={DAFTAR}>
              <button type="button" className="button-daftar">
                Daftar
              </button>
            </Link>
          </div>
        </div>
      </Navbar>
      {/* </Headroom> */}
    </>
  );
};

export default Navigation;
