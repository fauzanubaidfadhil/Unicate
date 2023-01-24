import React from "react";
import "../CSS/Pembayaran.css";
import logo from "../Assets/logo.png";
import bcapay from "../Assets/bcapay.png";
import { VscCopy } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Pembayaran() {
  return (
    <>
      {" "}
      <Link to="/">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" className="logopay" />
        </div>
      </Link>
      <div className="bordercenter">
        <div className="borderpay">
          <div style={{ textAlign: "center" }}>
            <p className="textpay">
              No Pembayaran
              <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
                INV-123456789101112
              </h5>
            </p>
            <p>
              Total Pembayaran Donasi
              <h2 style={{ fontWeight: "bold" }}>Rp 20.000</h2>
              <button className="tombolpayatas">
                <VscCopy />
                Salin Nominal
              </button>
            </p>
          </div>
          <div
            style={{
              borderStyle: "solid",
              height: "32px",
              borderLeft: "none",
              borderRight: "none",
            }}
          >
            <ul className="ulpay">
              <li className="lipay">Jumlah Nominal</li>
              <li className="lipay">Rp 20.000</li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p className="ketpay">
              Donasi akan kadaluwarsa 23 jam dari sekarang, Selesaikan
              pembayaran donasi sebelum 30 Jan 2023, pukul 16:26
            </p>
          </div>
          <h5 style={{ textAlign: "center" }}>Silahkan Transfer Ke</h5>
          <div
            style={{
              borderStyle: "solid",
              height: "95px",
              borderLeft: "none",
              borderRight: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img className="bcatapibri" src={bcapay} alt="bcapay" />
              <h5 style={{ marginTop: "10px" }}>937737848</h5>
              <p style={{ marginTop: "-10px" }}>an. Unicate</p>
            </div>
          </div>
          <div>
            <div className="tombolbawah">
              <button className="tombolpaybawah">
                <VscCopy />
                Salin nomor rekening
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pembayaran;
