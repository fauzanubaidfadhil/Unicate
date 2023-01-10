import logo from "../Assets/logo.png";
// import Headroom from "react-headroom";
import profil from "../Assets/profil.png";
import "../CSS/Navigation.css";
import { Link } from "react-router-dom";
import { BERANDA, AKSI_NAVLOGIN, HOME } from "../router";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import {MdExitToApp} from "react-icons/md";
import { Navbar, Dropdown } from "react-bootstrap";

function Navslogin() {
  return (
    <>
      {/* <Headroom> */}
        <Navbar className="navbar" bg="transparant">
            <Navbar.Brand>
              <Link to={BERANDA}>
                <img className="logo" src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            
        <div className="menuheader">
          <div className="mainmenu">
            <Link to={BERANDA}>
              <li className="styling-menu-navbar animasi-left-right">Beranda</li>
            </Link>
            <li className="styling-menu-navbar animasi-left-right">Komunitas</li>
            <li className="styling-menu-navbar animasi-left-right">Artikel</li>
            <Link to={AKSI_NAVLOGIN}>
              <li className="styling-menu-navbar animasi-left-right">Aksi</li>
            </Link>
            <li className="styling-menu-navbar animasi-left-right">
              Tentang Kami
            </li>
          </div>
          <div className="mainmenuright">
            <MdOutlineNotificationsActive
              className="position-icon-notif"
              size={30}
            />
            <Dropdown>
              <Dropdown.Toggle
                className="dropdownnavprofil"
                style={{
                  width: "150px",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginTop: "6px",
                }}
                variant="transparant"
                id="dropdown-basic"
              >
                <img className="img-profil" src={profil} alt="profil" />
                Adelia
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item style={{ fontSize: "18px" }}href="#/action-1">
                  <Link style={{display: "flex", gap: "10px",  textDecoration:"none", color:"black"}} to="/Profile">
                    <CgProfile size={30} />Profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: "flex", gap: "10px", fontSize: "18px" }} href="#/action-2" >
                  <HiUserGroup size={30} />Komunitas
                </Dropdown.Item>
                <Dropdown.Item style={{ fontSize: "18px" }}>
                  <Link style={{display: "flex", gap: "10px",  textDecoration:"none", color:"black"}} to={HOME}>
                    <MdExitToApp size={30} />Keluar
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          </div>
      </Navbar>
      {/* </Headroom> */}
    </>
  );
}

export default Navslogin;
