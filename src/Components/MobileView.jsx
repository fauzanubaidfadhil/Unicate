import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
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
const MobileView = ({ open }) => {
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
            <Link style={{ textDecoration: "none" }} to={MASUK}>
              <li className="styling-menu-navbar animasi-left-right">
              <button type="button" className="buttonmasukmobile">
                Masuk
              </button>
              </li>
            </Link>
            <Link style={{ textDecoration: "none" }} to={DAFTAR}>
              <li className="styling-menu-navbar animasi-left-right">
              <button type="button" className="buttondaftarmobile">
                Daftar
              </button>
              </li>
            </Link>
    </Ul>
  )
}

export default MobileView;