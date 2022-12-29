import { Container, Navbar } from "react-bootstrap";
import logo from "../Assets/logo.png";
import Headroom from "react-headroom";
import { MdOutlineNotificationsActive } from "react-icons/md";
import "../CSS/Navigation.css";
import profil from "../Assets/profil.png";
import { Link } from "react-router-dom";
import { KOMBER } from "../router";

function Navslogin() {
  return (
    <>
      <Headroom>
        <div className="navbar">
          <Navbar bg="transparant">
            <Container>
              <Navbar.Brand href="#home">
                <img className="logo" src={logo} alt="logo" />
              </Navbar.Brand>
            </Container>
          </Navbar>
          <ul className="position-menu-navbar">
            <li className="styling-menu-navbar animasi-left-right">Beranda</li>
            <Link to={KOMBER}> <li className="styling-menu-navbar animasi-left-right">
              Komunitas
            </li></Link>
            <li className="styling-menu-navbar animasi-left-right">Artikel</li>
            <li className="styling-menu-navbar animasi-left-right">Aksi</li>
            <li className="styling-menu-navbar animasi-left-right">
              Tentang Kami
            </li>
            <MdOutlineNotificationsActive
              className="position-icon-notif"
              size={30}
            />
            <img className="img-profil" src={profil} alt="profil" />
            <h4
              style={{
                marginLeft: "10px",
                marginTop: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "149.5%",
              }}
            >
              Adelia
            </h4>
          </ul>
        </div>
      </Headroom>
    </>
  );
}

export default Navslogin;
