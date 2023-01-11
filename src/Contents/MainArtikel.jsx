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
import {MdNavigateNext} from "react-icons/md"
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
          <div >
            <ul className="ulartikel">
                <li style={{color: '#009EFF'}} className="homefromartikel"> Home </li>
                <MdNavigateNext />
                <li className="linknavartikel"> Artikel </li>
            </ul>
            <div className="artikeltitletop">
              <p className='titleartikel'>Artikel</p>
              <img className='artikelimage' src={Artikelpertama} alt="Fotoartikelatas" />
              <div className="artikeltitlebottom">
                <ul className="locanddatearticle">
                  <li className='locate'>JATIM</li>
                  <li className='date'>3 hari yang lalu</li>
                </ul>
                  <h1 className='titlecontentarticle'>Melalui 'Jaketku' Ribuan Anak Putus Sekolah di Gresik Bisa Dapat Ijazah</h1>
                  <p className='subcontentarticle'>
                  Pemkab Gresik menggagas sebuah program yang dapat membantu anak putus sekolah agar bisa
                  menyelesaikan pendidikannya. Program itu bernama Kejar Paket Tuntaskan Putus Sekolah atas...
                  </p>
                  <p className="sharearticle">Share</p>
                  <div className="iconshare">
                    <img  src={Iconfb} alt="iconfb" />
                    <img  src={Iconig} alt="iconig" />
                    <img  src={Icontwit} alt="icontwit" />
                  </div>
                </div>
              </div>
          </div>

                                      {/* CAROUSEL ARTIKEL 1 */}

    <div className="swiperartikel">
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
                      {/* Artikel 1 */}
              <div
              style={{
                width: "370px",
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
                  width: "100%",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
                Sekolah untuk Anak Kurang Mampu
              </h4>
              <p
                style={{
                  textAlign: "left",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "18px",
                  width: "100%",
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
                  width: "100%",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
                Sekolah untuk Anak Kurang Mampu
              </h4>
              <p
                style={{
                  textAlign: "left",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "18px",
                  width: "100%",
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
                  width: "100%",
                  height: "72px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
                Sekolah untuk Anak Kurang Mampu
              </h4>
              <p
                style={{
                  textAlign: "left",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "18px",
                  width: "100%",
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
                  width: "100%",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
                Sekolah untuk Anak Kurang Mampu
              </h4>
              <p
                style={{
                  textAlign: "left",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "18px",
                  width: "100%",
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
