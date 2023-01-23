import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Carousel, Button} from 'react-bootstrap';
import "../CSS/Artikel.css";
import "../CSS/Mobile/ArtikelMobile.css";
import Artikelpertama from "../Assets/Fotoartikelatas.png";
import FotoArtikel1 from "../Assets/FotoArtikel1.png";
import FotoArtikel2 from "../Assets/FotoArtikel2.png";
import FotoArtikel3 from "../Assets/FotoArtikel3.png";
import Foto1aDetar from "../Assets/Foto1aDetar.png";
import Iconfb from "../Assets/Iconfb.png";
import Iconig from "../Assets/Iconig.png";
import Icontwit from "../Assets/Icontwit.png";
// import benefit from "../Assets/benefitanak.png"
// import benefit2 from "../Assets/benefitanak2.png"
// import benefit3 from "../Assets/benefitanak3.png"
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { HOME } from "../router";
// import styled from 'styled-components'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import img1c2 from "../Assets/img-carousel2-artikel.png";
import img2c2 from "../Assets/img2-carousel2-artikel.png";
import img3c2 from "../Assets/img3-carousel2-artikel.png";

// import required modules
import { Pagination,  } from "swiper";


// const Benefit = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding: 20px 114px;
//   gap: 100px;
//   background-image: url('../Assets/AC2.png');
//   .imgbenefit{ alt="benefit"
//     width: 120px;
//     height: 120px;
//   }
//   p{
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 20px;
//   }
//   @media(max-width: 768px){
//     p{
//       font-size: 12px;
//     }
//     .imgbenefit{ alt="benefit"
//       width: 80px;
//       height: 80px;
//     }
//   }
// `

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
          <MdNavigateNext/>
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
                <img src={Iconfb} alt="iconsocmed" />
                <img src={Iconig} alt="iconsocmed" />
                <img src={Icontwit} alt="iconsocmed" />
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* CAROUSEL ARTIKEL 1 */}
      <div className="swiperartikel">
        <>
          <h2 className="Artikellainnya">Artikel Lainnya</h2>
          <Swiper
            spaceBetween={20}
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
                <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel">
                  <img
                    style={{ width: "100%"}}
                    src={FotoArtikel1}
                    alt="FotoArtikel1"
                  />
                  <h4 className='titleartikelbottom'>
                    Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang
                    Peralatan Sekolah untuk Anak Kurang Mampu
                  </h4>
                  <p className="subtitleartikelbottom">
                    Keterbatasan ekonomi masih menjadi salah satu...
                  </p>
                </Link>
              </div>
              {/* Artikel 1 */}
              {/* Artikel 2 */}
              <div className="cardartikelbottom">
                <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel3">
                <img
                  style={{ width: "100%"  }}
                  src={FotoArtikel2}
                  alt="FotoArtikel2"
                />
                <h4
                  className='titleartikelbottom'
                >
                  Mengapa Pendidikan di Indonesia Belum Merata ?
                </h4>
                <p className="subtitleartikelbottom">
                Pendidikan memiliki peranan yang sangat penting sebagai penunjang kehidupan manusia,...
                </p>
                </Link>
              </div>
              {/* Artikel 2 */}
              {/* Artikel 3 */}
              <div className="cardartikelbottom">
                <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel4">
                  <img
                    style={{ width: "100%" }}
                    src={FotoArtikel3}
                    alt="FotoArtikel3"
                  />
                  <h4 className='titleartikelbottom'>
                     Miris, Hampir 6 Ribu Anak Keluarga Miskin di Pesisir Selatan Putus Sekolah
                    </h4>
                    <p className="subtitleartikelbottom">
                      Kondisi itu selaras dengan Angka Partisipasi...
                    </p>
                </Link>
              </div>
              {/* Artikel 3 */}
            </SwiperSlide>
            <SwiperSlide style={{ justifyContent:"left" }}>
              <div className="cardartikelbottom">
                <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel">
                    <img
                      style={{ width: "100%"}}
                      src={Foto1aDetar}
                      alt="FotoArtikel1"
                    />
                    <h4 className='titleartikelbottom'>
                    Ada 150 Anak Putus Sekolah di Ternate
                    </h4>
                    <p className="subtitleartikelbottom">
                    Anak putus sekolah di Kota Ternate, Maluku Utara (Malut), secara bertahap dikembalikan ke sekolah.
                    </p>
                  </Link>
                </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      <div style={{display:"flex", alignItems:"center", flexDirection:"column"}} className="dipnyacarousel2">
      <Carousel className="sizecarouselartikel2" fade>
      <Carousel.Item>
        <img
          className=""
          src={img1c2 }
          alt="First slide"
        />
        <Carousel.Caption>
        <Button className="btn-btstrp">Donasi Sekarang</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={img2c2 }
          alt="Second slide"
        />
        <Carousel.Caption>
        <Button className="btn-btstrp">Donasi Sekarang</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={img3c2 }
          alt="Third slide"
        />
        <Carousel.Caption>
        <Button className="btn-btstrp">Donasi Sekarang</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </>
  );
};

export default MainArtikel;

// {/* <Swiper
//   modules={[Navigation, Autoplay]}
//   slidesPerView={1}
//   navigation
//   autoplay={{ delay: 1000 }}
// >
//   <SwiperSlide>
//     <Benefit>
//       <img src={benefit} className="imgbenefit" alt="benefit"/>
//       <p>Anak-anak yang putus sekolah di Kudus mendapat bantuan pakaian yang layak.</p>
//     </Benefit>
//   </SwiperSlide>
//   <SwiperSlide>
//     <Benefit>
//       <img src={benefit2} className="imgbenefit" alt="benefit"/>
//       <p>Anak-anak yang putus sekolah di Kudus mendapat bantuan pakaian yang layak.</p>
//     </Benefit>
//   </SwiperSlide>
//   <SwiperSlide>
//     <Benefit>
//       <img src={benefit3} className="imgbenefit" alt="benefit"/>
//       <p>Anak-anak yang putus sekolah di Kudus mendapat bantuan pakaian yang layak.</p>
//     </Benefit>
//   </SwiperSlide>
// </Swiper> */}