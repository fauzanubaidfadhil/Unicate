import { Container, Navbar } from "react-bootstrap";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
// import Headroom from "react-headroom";
import { MASUK, KOMUNITAS, HOME, AKSI, DAFTAR, } from "../router";
import "../CSS/Navigation.css";
// import "../CSS/Responsive.css";
import React from "react";

const Navigation = () => {
  return (
    <>
      {/* <Headroom> */}
      <div className="navbar">
        <Navbar bg="transparant">
          <Container>
            <Navbar.Brand href="#home">
              <img className="logo" src={logo} alt="logo" />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <ul className="dropdown-menu position-menu-navbar">
          <Link to={HOME}>
            <li className="styling-menu-navbar animasi-left-right">Beranda</li>
          </Link>
          <Link to={KOMUNITAS}>
            <li className="styling-menu-navbar animasi-left-right">
              Komunitas
            </li>
          </Link>
          
              <li className="styling-menu-navbar animasi-left-right">Artikel</li>
       
          <Link to={AKSI}>
            <li className="styling-menu-navbar animasi-left-right">Aksi</li>
          </Link>
          <li className="styling-menu-navbar animasi-left-right">
            Tentang Kami
          </li>
        </ul>
        <Link to={MASUK}>
          <button type="button" className="button-masuk">
            Masuk
          </button>
        </Link>
        <Link to={DAFTAR}>
          <button type="button" className="button-daftar">
            Daftar
          </button>
        </Link>
      </div>
      {/* </Headroom> */}
    </>
  );
};

export default Navigation;
