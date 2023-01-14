import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Artikel.css";
import "../CSS/Mobile/ArtikelMobile.css";
import Artikelpertama from "../Assets/Fotoartikelatas.png";
import FotoArtikel1 from "../Assets/FotoArtikel1.png";
import FotoArtikel2 from "../Assets/FotoArtikel2.png";
import FotoArtikel3 from "../Assets/FotoArtikel3.png";
import Iconfb from "../Assets/Iconfb.png";
import Iconig from "../Assets/Iconig.png";
import Icontwit from "../Assets/Icontwit.png";
import AC2 from "../Assets/AC2.png";
import benefit from "../Assets/benefitanak.png"
import benefit2 from "../Assets/benefitanak2.png"
import benefit3 from "../Assets/benefitanak3.png"
// import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { HOME } from "../router";
import styled from 'styled-components'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation  } from "swiper";


const Benefit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 114px;
  gap: 100px;
  background-image: url('../Assets/AC2.png');
  .imgbenefit{
    width: 120px;
    height: 120px;
  }
  p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }
  @media(max-width: 768px){
    p{
      font-size: 12px;
    }
    .imgbenefit{
      width: 80px;
      height: 80px;
    }
  }
`

const MainArtikel = () => {
  return (
    <>
      <div>
        <ul className="ulartikel">
          <li className="homefromartikel">
            {" "}
            <Link
              style={{ color: "#009EFF", textDecoration: "none" }}
              to={HOME}
            >
              Home
            </Link>
          </li>
          <MdNavigateNext style={{color:"#dfdfdf"}}/>
          <li className="linknavartikel"> Artikel </li>
        </ul>
        <div className="artikeltitletop">
          <p className="titleartikel">Artikel</p>
          <div className="imgdanartikelspot">
            <img
              className="artikelimage"
              src={Artikelpertama}
              alt="Fotoartikelatas"
            />
            <div className="artikeltitlebottom">
              <ul className="locanddatearticle">
                <li className="locate">JATIM</li>
                <li className="date">3 hari yang lalu</li>
              </ul>
              <h1 className="titlecontentarticle">
                Melalui 'Jaketku' Ribuan Anak Putus Sekolah di Gresik Bisa Dapat
                Ijazah
              </h1>
              <p className="subcontentarticle">
                Pemkab Gresik menggagas sebuah program yang dapat membantu anak
                putus sekolah agar bisa menyelesaikan pendidikannya. Program itu
                bernama Kejar Paket Tuntaskan Putus Sekolah atas...
              </p>
              <p className="sharearticle">Share</p>
              <div className="iconshare">
                <img src={Iconfb} id="iconsocmed" />
                <img src={Iconig} id="iconsocmed" />
                <img src={Icontwit} id="iconsocmed" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CAROUSEL ARTIKEL 1 */}
      <div className="swiperartikel">
        <>
          <h2 className="Artikellainnya">Artikel Lainnya</h2>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
              position: 'relative'
            }}
            modules={[Pagination]}
            className="Carouselsusah" >
            <SwiperSlide>
              {" "}
              {/* Artikel 1 */}
              <div className="cardartikelbottom">
                  <img
                    style={{ width: "100%"}}
                    src={FotoArtikel1}
                    alt="FotoArtikel1"
                  />
                  <h4 className='titleartikelbottom'>
                    Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang
                    Peralatan Sekolah untuk Anak Kurang Mampu
                  </h4>
                  <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel">
                  <p className="subtitleartikelbottom">
                    Keterbatasan ekonomi masih menjadi salah satu alasan
                    banyaknya anak-anak tidak bisa melanjutkan......
                  </p>
                </Link>
              </div>
              {/* Artikel 1 */}
              {/* Artikel 2 */}
              <div className="cardartikelbottom">
                <img
                  style={{ width: "100%"  }}
                  src={FotoArtikel2}
                  alt="FotoArtikel2"
                />
                <h4
                  className='titleartikelbottom'
                >
                  Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
                  Sekolah untuk Anak Kurang Mampu
                </h4>
                <p className="subtitleartikelbottom">
                  Beri Kesempatan Anak Kurang Mampu, Ganjar Banjir Dukungan
                  karena Resmikan Sekolah Virtual
                </p>
              </div>
              {/* Artikel 2 */}
              {/* Artikel 3 */}
              <div className="cardartikelbottom">
                  <img
                    style={{ width: "100%" }}
                    src={FotoArtikel3}
                    alt="FotoArtikel3"
                  />
                  <h4 className='titleartikelbottom'>
                    Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang
                    Peralatan Sekolah untuk Anak Kurang Mampu
                  </h4>
                  <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel3">
                  <p className="subtitleartikelbottom">
                    Beri Kesempatan Anak Kurang Mampu, Ganjar Banjir Dukungan
                    karena Resmikan Sekolah Virtual
                  </p>
                </Link>
              </div>
              {/* Artikel 3 */}
            </SwiperSlide>
            <SwiperSlide>
              <div className="cardartikelbottom">
                    <img
                      style={{ width: "100%"}}
                      src={FotoArtikel1}
                      alt="FotoArtikel1"
                    />
                    <h4 className='titleartikelbottom'>
                      Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang
                      Peralatan Sekolah untuk Anak Kurang Mampu
                    </h4>
                    <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel">
                    <p className="subtitleartikelbottom">
                      Keterbatasan ekonomi masih menjadi salah satu alasan
                      banyaknya anak-anak tidak bisa melanjutkan......
                    </p>
                  </Link>
                </div>
                <div className="cardartikelbottom">
                    <img
                      style={{ width: "100%"}}
                      src={FotoArtikel1}
                      alt="FotoArtikel1"
                    />
                    <h4 className='titleartikelbottom'>
                      Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang
                      Peralatan Sekolah untuk Anak Kurang Mampu
                    </h4>
                    <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel">
                    <p className="subtitleartikelbottom">
                      Keterbatasan ekonomi masih menjadi salah satu alasan
                      banyaknya anak-anak tidak bisa melanjutkan......
                    </p>
                  </Link>
                </div>
                <div className="cardartikelbottom">
                    <img
                      style={{ width: "100%"}}
                      src={FotoArtikel1}
                      alt="FotoArtikel1"
                    />
                    <h4 className='titleartikelbottom'>
                      Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang
                      Peralatan Sekolah untuk Anak Kurang Mampu
                    </h4>
                    <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel">
                    <p className="subtitleartikelbottom">
                      Keterbatasan ekonomi masih menjadi salah satu alasan
                      banyaknya anak-anak tidak bisa melanjutkan......
                    </p>
                  </Link>
                </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      <div className="dipnyacarousel2">

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 1000 }}
        >
          <SwiperSlide>
            <Benefit>
              <img src={benefit} className="imgbenefit"/>
              <p>Anak-anak yang putus sekolah di Kudus mendapat bantuan pakaian yang layak.</p>
            </Benefit>
          </SwiperSlide>
          <SwiperSlide>
            <Benefit>
              <img src={benefit2} className="imgbenefit"/>
              <p>Anak-anak yang putus sekolah di Kudus mendapat bantuan pakaian yang layak.</p>
            </Benefit>
          </SwiperSlide>
          <SwiperSlide>
            <Benefit>
              <img src={benefit3} className="imgbenefit"/>
              <p>Anak-anak yang putus sekolah di Kudus mendapat bantuan pakaian yang layak.</p>
            </Benefit>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainArtikel;
