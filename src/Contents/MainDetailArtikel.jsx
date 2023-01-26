import facebookDetar from "../assets/facebookDetar.png";
import twitterDetar from "../assets/twitterDetar.png";
import instagramDetar from "../assets/instagramDetar.png";
import Foto1Detar from "../assets/Foto1Detar.png";
import Foto1aDetar from "../assets/Foto1aDetar.png";
import Foto1bDetar from "../assets/Foto1bDetar.png";
import Foto1cDetar from "../assets/Foto1cDetar.png";
import { Link } from "react-router-dom";
import {MdNavigateNext} from "react-icons/md"
import '../CSS/Mobile/DetailArtikelMobile.css'

const MainDetailArtikel = () => {
  return (
    <>
      {/* link atas */}
      <div style={{ padding: "20px 56px" }}>
        <a
          style={{ textDecoration: "none", color: "#009EFF", fontSize: "14px" }}
          href="/"
        >
          Home
        </a>
        <MdNavigateNext/>
        <a
          style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
          href="/Artikel"
        >
          Artikel
        </a>
        <MdNavigateNext/>
        <a
          style={{ textDecoration: "none", color: "black",  fontSize: "14px" }}
          href="/DetailArtikel"
        >
          Detail Artikel
        </a>
      </div>
      {/* judul dan content */}
      <div className="detailartikecontent"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 56px",
          gap: "25px",
        }}
      >
        {/* content kanan */}
        <div className="maindetailartikelcontent" >
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "38.9027px",
              color: "#000000",
              margin: "0 0"
            }}
          >
            Mengapa Pendidikan Indonesia
          </p>
          <div className="topartikeldetail"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%"
            }}
          >
            <div className="detaildateandlocation">
            <p style={{ color:'#EA5900',
                                    width:'200px',
                                    height: '29px',
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '19.4513px',
                                    lineHeight:'149.5%'
                                    }}>Jawa Timur</p>
              <p style={{ color:'#00000066',
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '19.4513px',
                                    }}>3 hari yang lalu</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "9.73px",
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15.5611px",
                }}
              >
                Share :
              </div>
              <img className="iconsocmed"
                src={twitterDetar}
                alt=""
              />
              <img className="iconsocmed"
                src={instagramDetar}
                alt=""
              />
              <img className="iconsocmed"
                src={facebookDetar}
                alt=""
              />
            </div>
          </div>
          <img
            style={{
              width: "100%",
              height: "409.93px",
              borderRadius: "17.6314px",
            }}
            src={Foto1Detar}
            alt=""
          />
          {/* text */}
          <p
            style={{
              marginTop: "25px",
              fontFamily: "Calibri",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "19.501px",
              textAlign: "justify",
            }}
          >
            <a style={{ textDecoration: "none" }} href="/">
              Unicate.com{" "}
            </a>
            - Keterbatasan ekonomi ini membuat mereka tak mampu membeli
            kebutuhan sekolah. Sementara di tempat lain, padahal banyak juga
            lulusan sekolah yang tidak tahu harus dikemanakan peralatan sekolah
            yang sudah tidak digunakannya. Melihat fenomena ini, tim mahasiswa
            Institut Teknologi Sepuluh Nopember (ITS) menggagas sebuah aplikasi
            terintegrasi yang menghubungkan antara donatur kebutuhan sekolah
            kepada pihak yang membutuhkan. Ketua tim Muhammad Akmal Rishwanda
            menjelaskan, awalnya para anggota tim ini sempat mengalami
            kebingungan dengan barang-barang yang mereka miliki semasa sekolah."
          </p>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{ borderLeft: "7.8px solid #005C95 ", borderRadius: "10px", height: "97.5px" }}
            ></div>
            <p
              style={{
                fontFamily: "Calibri",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "19.501px",
                paddingLeft: "7.5px",
              }}
            >
              <strong>Baca Juga</strong>
              <br />
              Solusi Jitu Dinas Pendidikan Atasi Masalah Anak Putus Sekolah di
              Makassar
            </p>
          </div>
          <p
            style={{
              marginTop: "25px",
              fontFamily: "Calibri",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "19.501px",
              textAlign: "justify",
            }}
          >
            Sedangkan keinginan untuk menyumbangkan barang bekas yang masih
            layak digunakan tersebut sangat tinggi. Namun, mereka tidak tahu
            harus kemana jika mereka ingin melakukan hal tersebut," katanya,
            Rabu (9/3/2022). Akhirnya muncul ide yang menggagas sebuah aplikasi
            bernama Eduly. Menurut mahasiswa yang akrab disapa Akmal ini, Eduly
            merupakan sebuah platform bagi orang yang membutuhkan bebagai
            perangkat sekolah dan yang sedang ingin menyumbangkan barangnya.
            Mahasiswa Departemen Teknik Informatika tersebut menambahkan,
            siapapun bisa menyumbangkan perangkat mereka mulai dari alat tulis,
            buku, baju seragam, hingga barang elektronik.
            <br /> <br /> "Jadi, apabila ada laptop yang sudah tidak terpakai
            namun masih berfungsi bisa disumbangkan juga," ujarnya, di Surabaya,
            Selasa (8/3/2022). Akmal melanjutkan, penerima dari barang yang
            disumbangkan bisa berupa yayasan panti asuhan yang merupakan mitra
            tim Eduly ataupun perorangan yang sedang membutuhkan barang
            tersebut. Aplikasi Eduly akan merekomendasikan penerima yang
            memerlukan saat donatur akan menyumbangkan barangnya. Dengan begini,
            donatur akan langsung tahu ke mana barangnya akan disumbangkan.
            Untuk pengiriman barang, tim Eduly menyediakan dua pilihan. Donatur
            bisa memilih untuk mengirimkan sendiri barangnya kepada penerima,
            atau menggunakan fitur pick-up yang mem berikan fasilitas barang
            akan diantarkan tim Eduly kepada penerima.
          </p>
        </div>
        {/* content kiri */}
        <div className="anotherdetailartikel" >
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              margin: "0 0"
            }}
          >
            Terkini{" "}
          </p>
          {/* 1 */}
          <div style={{ display: "flex", flexDirection: "row", alignItems:"center", gap: "10px" }}>
          <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel2">
            <img
              style={{
                width: "152px",
                height: "90px",
                borderRadius: "4.12811px",
              }}
              src={Foto1aDetar}
              alt=""
            />
            </Link>
            <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel2">
            <p
              style={{
                fontFamily: "Calibri",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
                Ada 150 Anak Putus Sekolah di Ternate
            </p>
              </Link>
          </div>
          {/* 2 */}
          <div
            style={{ display: "flex", flexDirection: "row",alignItems:"center", gap: "10px"  }}
          >
            <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel4">
            <img
              style={{
                width: "152px",
                height: "90px",
                borderRadius: "4.12811px",
              }}
              src={Foto1bDetar}
              alt=""
            />
            </Link>
            <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel4">
            <p
              style={{
                fontFamily: "Calibri",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                margin:"auto"
              }}
            >
              Miris, Hampir 6 Ribu Anak Keluarga Miskin di Pesisir Selatan Putus
              Sekolah{" "}
            </p>
            </Link>
          </div>
          {/* 3 */}
          <div
            style={{ display: "flex", flexDirection: "row", alignItems:"center", gap: "10px"}}
          >
            <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel3">
            <img
              style={{
                width: "152px",
                height: "90px",
                borderRadius: "4.12811px",
              }}
              src={Foto1cDetar}
              alt=""
            />
            </Link>
            <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel3">
            <p
              style={{
                fontFamily: "Calibri",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                padding:"20px auto"
              }}
            >
              Mengapa Pendidikan di Indonesia Belum Merata?
            </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDetailArtikel;
