import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import jwtDecode from 'jwt-decode';
import { useRef } from 'react';
import { Dropdown } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";
// import Headroom from "react-headroom";
import {
  MASUK,
  KOMUNITAS,
  HOME,
  AKSI,
  DAFTAR,
  ABOUTUS,
  ARTIKEL
} from "../router";
// import { display } from '@mui/system';

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  z-index: 100;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding: 2rem;
    gap: 5px
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    .buttonmasukmobile, .buttondaftarmobile{
      padding: 0px 2px;
      gap: 10px;
  
      width: 89px;
      height: 30%;
  
      background: #009EFF;
      border: 1px solid #FFFFFF;
      border-radius: 16px;
  
      color: #FFFFFF;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
    }
    .animasi-left-right {
      display: inline-block;
    }
  
    .animasi-left-right:after {
        content: '';
        display: block;
        height: .1525rem;
        width: 0;
        background: #fff ;
        transition: width .3s ease, background-color .3s ease;
        color: #009EFF;
    }
    
    .animasi-left-right:hover:after {
        width: 100%;
        background: #fff;
        color: #009EFF;
      }
  }
`;

const usernameLength = (name) => {
  let convertName = name;

  if (convertName.length > 5) {
    convertName = convertName.substr(0, 5) + "...";
  }

  return convertName;
};

const validateToken = () => {
  const tokenExists = localStorage.getItem(process.env.REACT_APP_AUTH);
  if (tokenExists !== null) {
    const token = tokenExists.split(" ")[1];
    const { username, email, password } = jwtDecode(token);
    const isLogin = token === undefined ? false : true;
    return {
      isLogin,
      username,
      password,
      email,
    };
  }
  return {
    isLogin: false,
    username: "",
    password:"",
    email:"",
  };
};

const MobileView = ({ open }) => {
  const { isLogin, username, password, email } = validateToken();
  const navRef = useRef({
    isLogin,
    username,
    password,
    email,
  });

  // useEffect(() => {
  //   const tokenExists = localStorage.getItem(process.env.REACT_APP_AUTH);
  //   console.log(tokenExists);
  //   if (tokenExists !== null) {
  //     const token = tokenExists.split(" ")[1];
  //     const { username } = jwtDecode(token);
  //     const isExistsToken = token === undefined ? false : true;
  //     console.log(isExistsToken);
  //     navRef.current.isLogin = isExistsToken;
  //     navRef.current.username = username;
  //   }
  // }, []);

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
            style={{ display: "flex", gap: "10px", fontSize: "18px" }}
          >
            <HiUserGroup size={30} />
            Komunitas
          </Dropdown.Item>
          <Link
            className="dropdown-item"
            style={{
              display: "flex",
              gap: "10px",
              textDecoration: "none",
              color: "black",
              fontSize: "18px",
            }}
            to={HOME}
          >
            <MdExitToApp size={30} />
            Keluar
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );

  
  return (
    <Ul open={open}>
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
            {/* <Link style={{ color: "black" }} className="linknav" to={ARTIKEL}>
            </Link> */}
            <Link style={{ color: "black" }} className="linknav" to={AKSI}>
              <li className="styling-menu-navbar animasi-left-right">Aksi</li>
            </Link>
            <Link style={{ color: "black" }} to={ABOUTUS}>
              <li className="styling-menu-navbar animasi-left-right">
                Tentang Kami
              </li>
            </Link>
          {displayButton}
    </Ul>
  )
}

export default MobileView;