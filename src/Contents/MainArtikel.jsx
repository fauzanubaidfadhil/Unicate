import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/MainArtikel.css";
import Artikelpertama from '../Assets/Fotoartikelatas.png';
import FotoArtikel1 from "../Assets/FotoArtikel1.png";
import FotoArtikel2 from "../Assets/FotoArtikel2.png";
import FotoArtikel3 from "../Assets/FotoArtikel3.png";
import Iconfb from "../Assets/Iconfb.png";
import Iconig from "../Assets/Iconig.png";
import Icontwit from "../Assets/Icontwit.png";
import AC2 from "../Assets/AC2.png";
import { Link } from "react-router-dom";
// import Ava from "../Assets/Avacarousel.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

// import required modules
import { Navigation } from "swiper";


const MainArtikel = () => {
    return ( 
        <>
          <div className="BungkusArtikelcuy">
            <ul className="Ulnyaartikel">
                <li style={{color: '#009EFF'}} className="Linya"> Home </li>
                <li className="Linyaartikel"> - </li>
                <li className="Linyaartikel"> Artikel </li>
            </ul>
                <p className='Artikelatascuy'>Artikel</p>
                <img className='FotoPertamanicuy' src={Artikelpertama} alt="Fotoartikelatas" />
            <ul className="Ulnyaartikel2">
                <li className='Jatim1cuy'>JATIM</li>
                <li className='Jatim2cuy'>3 hari yang lalu</li>
            </ul>
                <h1 className='Headernicuy'>Melalui 'Jaketku' Ribuan Anak Putus Sekolah di Gresik Bisa Dapat Ijazah</h1>
                <p className='Bawahheadernicuy'>
                Pemkab Gresik menggagas sebuah program yang dapat membantu anak putus sekolah agar bisa
                menyelesaikan pendidikannya. Program itu bernama Kejar Paket Tuntaskan Putus Sekolah atas...
                </p>
                <p className="sernicuy">Share</p>
                <div className="sericoncuy">
                <img className='iconsercuy' src={Iconfb} alt="iconfb" />
                <img className='iconsercuy' src={Iconig} alt="iconig" />
                <img className='iconsercuy' src={Icontwit} alt="icontwit" />
                </div>
          </div>

                                      {/* CAROUSEL ARTIKEL 1 */}

    <div className="divnyaartikel">
          <>
          <h2 className="Artikellainnyacuy">Artikel Lainnya</h2>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="Carouselsusah"
      >
        <SwiperSlide>
          {" "}
        <div>
          {/* Artikel 1 */}
          <div
            style={{
              height: "360px",
            }}
          >
            <img
              style={{ width: "364px", height: "198px" }}
              src={FotoArtikel1}
              alt="FotoArtikel1"
            />
            <h4
              style={{
                textAlign: "left",
                width: "322px",
                height: "72px",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "5px",
              }}
            >
              Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
              Sekolah untuk Anak Kurang Mampu
            </h4>
            <p
              style={{
                textAlign: "left",
                marginTop: "-15px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
                width: "350px",
                height: "51px",
              }}
            ><Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel">
              Keterbatasan ekonomi masih menjadi salah satu alasan banyaknya
              anak-anak tidak bisa melanjutkan......
            </Link>
            </p>
          </div>
          {/* Artikel 1 */}
          {/* Artikel 2 */}
          <div
            style={{
              height: "360px",
            }}
          >
            <img
              style={{ width: "364px", height: "198px" }}
              src={FotoArtikel2}
              alt="FotoArtikel2"
            />
            <h4
              style={{
                textAlign: "left",
                width: "322px",
                height: "72px",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "5px",
              }}
            >
              Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
              Sekolah untuk Anak Kurang Mampu
            </h4>
            <p
              style={{
                textAlign: "left",
                marginTop: "-15px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
                width: "300px",
                height: "51px",
              }}
            >
              Beri Kesempatan Anak Kurang Mampu, Ganjar Banjir Dukungan karena
              Resmikan Sekolah Virtual
            </p>
          </div>
          {/* Artikel 2 */}
          {/* Artikel 3 */}
          <div
            style={{
              height: "360px",
            }}
          >
            <img
              style={{ width: "364px", height: "198px" }}
              src={FotoArtikel3}
              alt="FotoArtikel3"
            />
            <h4
              style={{
                textAlign: "left",
                width: "322px",
                height: "72px",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "5px",
              }}
            >
              Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
              Sekolah untuk Anak Kurang Mampu
            </h4>
            <p
              style={{
                textAlign: "left",
                marginTop: "-15px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
                width: "300px",
                height: "51px",
              }}
            >
              Beri Kesempatan Anak Kurang Mampu, Ganjar Banjir Dukungan karena
              Resmikan Sekolah Virtual
            </p>
          </div>
          {/* Artikel 3 */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
                    {/* Artikel 1 */}
                    <div
            style={{
              width: "370px",
              height: "360px",
              position: "absolute",
              left: "4%",
            }}
          >
            <img
              style={{ width: "364px", height: "198px" }}
              src={FotoArtikel1}
              alt="FotoArtikel1"
            />
            <h4
              style={{
                textAlign: "left",
                width: "322px",
                height: "72px",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "5px",
              }}
            >
              Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
              Sekolah untuk Anak Kurang Mampu
            </h4>
            <p
              style={{
                textAlign: "left",
                marginTop: "-15px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
                width: "350px",
                height: "51px",
              }}
            >
              Keterbatasan ekonomi masih menjadi salah satu alasan banyaknya
              anak-anak tidak bisa melanjutkan......
            </p>
          </div>
          {/* Artikel 1 */}
          {/* Artikel 2 */}
          <div
            style={{
              width: "370px",
              height: "360px",
              position: "absolute",
              left: "458px",
            }}
          >
            <img
              style={{ width: "364px", height: "198px" }}
              src={FotoArtikel2}
              alt="FotoArtikel2"
            />
            <h4
              style={{
                textAlign: "left",
                width: "322px",
                height: "72px",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "5px",
              }}
            >
              Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
              Sekolah untuk Anak Kurang Mampu
            </h4>
            <p
              style={{
                textAlign: "left",
                marginTop: "-15px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "18px",
                width: "392.31px",
                height: "51px",
              }}
            >
              Beri Kesempatan Anak Kurang Mampu, Ganjar Banjir Dukungan karena
              Resmikan Sekolah Virtual
            </p>
          </div>
          {/* Artikel 2 */}
          {/* Artikel 3 */}
          <div
            style={{
              width: "370px",
              height: "360px",
              position: "absolute",
              left: "864px",
            }}
          >
            <img
              style={{ width: "364px", height: "198px" }}
              src={FotoArtikel3}
              alt="FotoArtikel3"
            />
            <h4
              style={{
                textAlign: "left",
                width: "322px",
                height: "72px",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "5px",
              }}
            >
              Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
              Sekolah untuk Anak Kurang Mampu
            </h4>
            <p
              style={{
                textAlign: "left",
                marginTop: "-15px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "18px",
                width: "392.31px",
                height: "51px",
              }}
            >
              Beri Kesempatan Anak Kurang Mampu, Ganjar Banjir Dukungan karena
              Resmikan Sekolah Virtual
            </p>
          </div>
          {/* Artikel 3 */}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
                    {/* Artikel 1 */}
                    <div
            style={{
              width: "370px",
              height: "360px",
              position: "absolute",
              left: "4%",
            }}
          >
            <img
              style={{ width: "364px", height: "198px" }}
              src={FotoArtikel1}
              alt="FotoArtikel1"
            />
            <h4
              style={{
                textAlign: "left",
                width: "322px",
                height: "72px",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "5px",
              }}
            >
              Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
              Sekolah untuk Anak Kurang Mampu
            </h4>
            <p
              style={{
                textAlign: "left",
                marginTop: "-15px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
                width: "350px",
                height: "51px",
              }}
            >
              Keterbatasan ekonomi masih menjadi salah satu alasan banyaknya
              anak-anak tidak bisa melanjutkan......
            </p>
          </div>
          {/* Artikel 1 */}
          {/* Artikel 2 */}
          <div
            style={{
              width: "370px",
              height: "360px",
              position: "absolute",
              left: "458px",
            }}
          >
            <img
              style={{ width: "364px", height: "198px" }}
              src={FotoArtikel2}
              alt="FotoArtikel2"
            />
            <h4
              style={{
                textAlign: "left",
                width: "322px",
                height: "72px",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "5px",
              }}
            >
              Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
              Sekolah untuk Anak Kurang Mampu
            </h4>
            <p
              style={{
                textAlign: "left",
                marginTop: "-15px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "18px",
                width: "392.31px",
                height: "51px",
              }}
            >
              Beri Kesempatan Anak Kurang Mampu, Ganjar Banjir Dukungan karena
              Resmikan Sekolah Virtual
            </p>
          </div>
          {/* Artikel 2 */}
          {/* Artikel 3 */}
          <div
            style={{
              width: "370px",
              height: "360px",
              position: "absolute",
              left: "864px",
            }}
          >
            <img
              style={{ width: "364px", height: "198px" }}
              src={FotoArtikel3}
              alt="FotoArtikel3"
            />
            <h4
              style={{
                textAlign: "left",
                width: "322px",
                height: "72px",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "5px",
              }}
            >
              Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
              Sekolah untuk Anak Kurang Mampu
            </h4>
            <p
              style={{
                textAlign: "left",
                marginTop: "-15px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "18px",
                width: "392.31px",
                height: "51px",
              }}
            >
              Beri Kesempatan Anak Kurang Mampu, Ganjar Banjir Dukungan karena
              Resmikan Sekolah Virtual
            </p>
          </div>
          {/* Artikel 3 */}
        </SwiperSlide>
      </Swiper>
    </>
          </div>

          <div className="dipnyacarousel2">
          <Swiper navigation={true} modules={[Navigation]} className="busetdah">
        <SwiperSlide className="babi">
            <div className="dippotocuy">
                <img className='FotoAC2cuy' src={AC2} alt="AC2"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
          </div>
        </>
     );
}

export default MainArtikel;
