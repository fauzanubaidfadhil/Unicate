import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Dropdown } from "react-bootstrap";
import jwtDecode from "jwt-decode";
import logo from "../assets/logo.png";
// import Headroom from "react-headroom";
import {
  MASUK,
  KOMUNITAS,
  HOME,
  AKSI,
  DAFTAR,
  ABOUTUS,
  ARTIKEL,
} from "../router";
import { CgProfile } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";
import Swal from "sweetalert2";
import "../CSS/Navigation.css";
import React from "react";
import Burger from "./HamburgerMenu";

// import Burger from "./HamburgerMenu";
// import MobileNav from "./MobileView";

const usernameLength = (name) => {
  let convertName = name;

  if (convertName.length > 7) {
    convertName = convertName.substr(0, 7) + "...";
  }
  return convertName;
};

const validateToken = () => {
  const tokenExists = localStorage.getItem(process.env.REACT_APP_AUTH);
  if (tokenExists !== null) {
    const token = tokenExists.split(" ")[1];
    const { username } = jwtDecode(token);
    const isLogin = token === undefined ? false : true;
    return {
      isLogin,
      username,
    };
  }
  return {
    isLogin: false,
    username: "",
  };
};

const Navigation = () => {
  const { isLogin, username, } = validateToken();
  const navRef = useRef({
    isLogin,
    username,
  });
  
    const navigate = useNavigate();
    const logout =  () => {
      Swal.fire({
        title: 'Apakah anda ingin keluar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem(process.env.REACT_APP_AUTH);
          navigate("/Masuk", {replace: true});
          Swal.fire(
            'Berhasil keluar!',
            '',
            'success'
          )
        }
      });
    };

  useEffect(() => {  
    const token = localStorage.getItem(process.env.REACT_APP_AUTH);
    if (token !== null) navigate({HOME}, { replace: true });
      // eslint-disable-next-line
  }, [])



  const displayButton = !navRef.current.isLogin ? (
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
  ) : (
    <div className="mainmenuright">
      <MdOutlineNotificationsActive className="position-icon-notif" size={30} />
      <Dropdown>
        <Dropdown.Toggle
          className="dropdownnavprofil"
          style={{
            width: "158px",
            height: "56px",
            fontSize: "18px",
            fontWeight: "500",
            marginTop: "6px",
          }}
          variant="transparant"
          id="dropdown-basic"
        >
          <CgProfile className="icon-profil" size={30} />
          {usernameLength(navRef.current.username)}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Link
            className="dropdown-item"
            style={{
              display: "flex",
              gap: "10px",
              textDecoration: "none",
              color: "black",
              fontSize: "18px",
            }}
            to="/Profile"
          >
            <CgProfile size={30} />
            Profile
          </Link>
          <Dropdown.Item
            style={{ display: "flex", gap: "10px", fontSize: "18px"  }}
          >
            <HiUserGroup size={30} />
            Komunitas
          </Dropdown.Item>
            <span onClick={() => logout()} style={{cursor:"pointer",  display: "flex", gap: "10px", fontSize: "18px", marginLeft:"16px" }}>
            <MdExitToApp size={30} />
            Keluar
            </span>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );

  return (
    <>
      {/* <Headroom> */}
      <Navbar className="navbar" bg="transparant">
        <Navbar.Brand>
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <div className="menuheader">
          <div className="mainmenu">
            <Link style={{ color: "black" }} className="linknav" to={HOME}>
              <li className="styling-menu-navbar animasi-left-right">
                Beranda
              </li>
            </Link>
            <Link style={{ color: "black" }} className="linknav" to={KOMUNITAS}>
              <li className="styling-menu-navbar animasi-left-right">
                Komunitas
              </li>
            </Link>
            <Link style={{ color: "black" }} className="linknav" to={ARTIKEL}>
              <li className="styling-menu-navbar animasi-left-right">
                Artikel
              </li>
            </Link>
            <Link style={{ color: "black" }} className="linknav" to={AKSI}>
              <li className="styling-menu-navbar animasi-left-right">Aksi</li>
            </Link>
            <Link style={{ color: "black" }} to={ABOUTUS}>
              <li className="styling-menu-navbar animasi-left-right">
                Tentang Kami
              </li>
            </Link>
          </div>
          {displayButton}
        </div>
        <Burger />
      </Navbar>
      {/* </Headroom> */}
    </>
  );
};

export default Navigation;
