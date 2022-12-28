import { Container, Navbar } from "react-bootstrap";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
// import Headroom from "react-headroom";
import { BERANDA, KOMUNITAS, HOME } from "../router";
import "../CSS/Navigation.css";
// import "../CSS/Responsive.css";
import "../CSS/ResNav.css";
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
          <li className="styling-menu-navbar animasi-left-right">Aksi</li>
          <li className="styling-menu-navbar animasi-left-right">
            Tentang Kami
          </li>
        </ul>
        <Link to={BERANDA}>
          <button type="button" className="button-masuk">
            Masuk
          </button>
        </Link>
        <button type="button" className="button-daftar">
          Daftar
        </button>
      </div>
      {/* </Headroom> */}
    </>
  );
};

export default Navigation;
