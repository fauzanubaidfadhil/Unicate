import titik from "../assets/titiktitik.png";
import image1 from "../assets/image1.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/tanoto.png";
import image7 from "../assets/sampoerna.png";
import image8 from "../assets/inspirasi.png";
import infinite from "../assets/infinite.png";
import image9 from "../assets/image-card-1.png";
import image10 from "../assets/image-card-2.png";
import image11 from "../assets/image-card-3.png";
import image12 from "../assets/image-article-1.png";
import FotoArtikel1 from "../assets/FotoArtikel1.png";
import FotoArtikel2 from "../assets/FotoArtikel2.png";
import FotoArtikel3 from "../assets/FotoArtikel3.png";
import Foto1aDetar from "../assets/Foto1aDetar.png";
import image17 from "../assets/peta-indonesia.jpg";
import segitiga from "../assets/segitiga.png";
import segitigakotak from "../assets/segitigakota.png";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { KOMUNITAS, ARTIKEL, DONASI, AKSI } from "../router";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import React from "react";
import "../CSS/Carousel.css";
import "../CSS/Main.css";
import "../CSS/Dekstop/MobileMain.css";
import "../CSS/Dekstop/DekstopMain.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../CSS/Mobile/MainMobile.css";

const Main = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
    });
  }, []);

  return (
    <>
      <div className="positioncontent1">
        <img className="style-img-titik" src={titik} alt="titiktitik" />
        <div className="positionlabel">
          <BsWhatsapp
            data-aos="fade-up"
            style={{ marginLeft: "4px", color: "white" }}
            size={30}
          />
          <BsInstagram
            data-aos="fade-up"
            style={{ marginLeft: "4px", color: "white" }}
            size={30}
          />
          <FaTiktok
            data-aos="fade-up"
            style={{ marginLeft: "4px", color: "white" }}
            size={30}
          />
          <FiTwitter
            data-aos="fade-up"
            style={{ marginLeft: "4px", color: "white" }}
            size={30}
          />
        </div>
        <img
          data-aos="fade-up"
          className="img-konten1"
          src={image1}
          alt="image1"
        />
        <h1 data-aos="fade-up" className="textmajukan">
          Majukan Pendidikan Anak-Anak Indonesia
        </h1>
        <p data-aos="fade-up" className="textgerakan ">
          Gerakan Peduli Anak Indonesia
        </p>
        <Link to={KOMUNITAS}>
          <button className="buttonbergabung" type="button">
            Bergabung Sekarang
          </button>
        </Link>
        <div className="position-textlabel">
          <h2 data-aos="fade-up" className="textlabel">
            2020/2021 Ada Sekitar 83,7 Ribu Anak Putus Sekolah di Seluruh
            Indonesia.
          </h2>
          <img
            data-aos="fade-up"
            style={{
              position: "absolute",
              bottom: "0px",
              width: "140px",
              left: "50px",
            }}
            src={image4}
            alt="image4"
          />
        </div>
      </div>
      {/* Our Mission */}
      <div className="positioncontent2">
        <div className="positioncontent2left">
          <img
            data-aos="fade-up"
            className="img-konten2"
            src={image5}
            alt="image5"
          />
          <img className="segitiga" src={segitiga} alt="segitiga" />
        </div>
        <div className="positioncontent2right">
          <h1 data-aos="fade-up" className="textourmission">
            Our Mission
          </h1>
          <p data-aos="fade-up" className="paragraphkonten2">
            Unicate sebagai wujud kepedulian kami terhadap tantangan pendidikan
            yang dihadapi oleh pelajar dan pelaku pendidikan. unicate merupakan
            platform yang menghubungkan pemberi bantuan dengan pelajar atau
            pelaku pendidikan yang membutuhkan bantuan akses, dukungan fasilitas
            belajar, serta konten pendidikan yang berkualitas.
            <br />
            <br />
            Kami tidak menerima dana dan mengambil komisi dalam bentuk apapun
            melalui platform ini, serta bekerja sama dengan mitra situs
            penggalangan dana untuk menjaga transparansi donasi yang Anda
            berikan.
          </p>
          <div className="corp">
            <h4 data-aos="fade-up" className="textcorporate">
              Corporate with:
            </h4>
            <div className="posisiiconcorporate">
              <img
                data-aos="fade-up"
                className="logotonoto"
                src={image6}
                alt="image6"
              />
              <img
                data-aos="fade-up"
                className="logosampoerna"
                src={image7}
                alt="image7"
              />
              <img
                data-aos="fade-up"
                className="logoinspirasi"
                src={image8}
                alt="image8"
              />
            </div>
            <div data-aos="fade-up" className="posisiiconcorporate">
              <img className="logoinfinite" src={infinite} alt="infinite" />
            </div>
          </div>
        </div>
      </div>
      {/* Our Mission */}
      {/* Our Services */}
      <div data-aos="fade-up" className="positioncontent3">
        <div className="positionourservice">
          <div className="positionourservicedetail">
            <div className="positionourservicedetailleft">
              <h1 className="textourservice">Our Services</h1>
              <h1 className="textwhypeople">Why People Chooise Our Services</h1>
            </div>
            <div className="positionourservicedetailright">
              <p className="textkonten3">
                Kami bekerja secara jujur dan berintegritas dalam memperjuangan
                <br />
                hak pendidikan setiap anak Indonesia
              </p>
            </div>
          </div>
          {/* card */}
          <div data-aos="flip-left" className="cardcontent">
            <Link
              to={KOMUNITAS}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="card1 card">
                <img className="imgcard" src={image9} alt="image9" />
                <h3 className="textcard textcardjudul">Komunitas</h3>
                <p className="textcard kontencard">
                  Berperan dalam turun ke lapangan untuk membantu anak anak
                  kecil.
                </p>
              </div>
            </Link>
            <Link
              to={DONASI}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div data-aos="flip-up" className="card2 card">
                <img className="imgcard" src={image10} alt="image10" />
                <h3 className="textcard textcardjudul">Donasi</h3>
                <p className="textcard kontencard">
                  Ikut andil dalam membantu gerakan mendukung pendidikan
                  Indonesia.
                </p>
              </div>
            </Link>
            <Link to={AKSI} style={{ textDecoration: "none", color: "black" }}>
              <div data-aos="flip-right" className="card3 card">
                <img className="imgcard" src={image11} alt="image11" />
                <h3 className="textcard textcardjudul">Inspiratif</h3>
                <p className="textcard kontencard">
                  Kisah-kisah dari para anak-anak maupun volunter yang ikut
                  andil.
                </p>
              </div>
            </Link>
          </div>
          {/* card */}
        </div>
      </div>
      {/* Our Services */}
      {/* Berita */}
      <div data-aos="fade-up" className="positioncontent4">
        <div className="positioncontent4top">
          <div className="textberita">Artikel Terbaru</div>
          <Link
            to={ARTIKEL}
            style={{ textDecoration: "none", color: "#0076BF" }}
          >
            <div className="textlihat">Lihat selengkapnya</div>
          </Link>
        </div>

        <img
          className="segitigakotak"
          src={segitigakotak}
          alt="segitigakotak"
        />
        <div className="positioncontent4mainberita">
          <div className="posisiimgartikel1">
            <img className="imgartikel1 transisi" src={image12} alt="image12" />
          </div>
          <div className="positioncontent4detailmainberita">
            <div className="jatimberanda">
              <p className="lokasiartikelinhome">JATIM</p>
              <p className="dateberanda">3 hari yang lalu</p>
            </div>
            <p className="titlearticleinhome">
              Melalui 'Jaketku' Ribuan Anak Putus Sekolah di Gresik Bisa Dapat
              Ijazah
            </p>
            <p className="detailarticleinhome">
              Pemkab Gresik menggagas sebuah program yang dapat membantu anak
              putus sekolah untuk bisa menyelesaikan pendidikannya.
            </p>
          </div>
        </div>
        <div className="positioncontent4subberita">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/DetailArtikel"
          >
            <div className="subarticleinhome">
              <div
                style={{
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="imgartikel2 transisi"
                  src={FotoArtikel1}
                  alt="image13"
                />
              </div>
              <p className="textberi posisiteksartikel">
                Aplikasi Eduly Ciptaan Mahasiswa ITS, Bisa Nyumbang Peralatan
                Sekolah untuk Anak Kurang Mampu
                <br />
                <span className="tambahanMain">13 November 2022</span>
              </p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/DetailArtikel4"
          >
            <div className="subarticleinhome">
              <div
                style={{
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="imgartikel2 transisi"
                  src={FotoArtikel3}
                  alt="image14"
                />
              </div>
              <p className="textberi posisiteksartikel">
                Miris, Hampir 6 Ribu Anak Keluarga Miskin di Pesisir Selatan
                Putus Sekolah
                <br />
                <span className="tambahanMain">12 November 2022</span>
              </p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/DetailArtikel3"
          >
            <div className="subarticleinhome">
              <div
                style={{
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="imgartikel2 transisi"
                  src={FotoArtikel2}
                  alt="image15"
                />
              </div>
              <p className="textberi posisiteksartikel">
                Mengapa Pendidikan di Indonesia Belum Merata?
                <br />
                <span className="tambahanMain">12 November 2022</span>
              </p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/DetailArtikel2"
          >
            <div className="subarticleinhome">
              <div
                style={{
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="imgartikel2 transisi"
                  src={Foto1aDetar}
                  alt="image16"
                />
              </div>
              <p className="textberi posisiteksartikel">
                Ada 150 Anak Putus Sekolah di Ternate
                <br />
                <span className="tambahanMain">13 November 2022</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* Berita */}
      <div className="positioncontent5">
        <h2 data-aos="fade-up" className="textbagaimana">
          Bagaimana pendapat mereka
        </h2>
        <img
          data-aos="fade-up"
          className="imgpetaindonesia"
          src={image17}
          alt="image17"
        />
        <div data-aos="fade-up" className="position-carousel">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="slidependapat">
                <p className="position-text-1-slider-1 ">
                  “Website ini sangat memudahkan saya dalam membantu pendidikan
                  anak Indonesia, terlebih anak jalanan di luar sana”
                </p>
                <h2 className="position-text-2-slider-1">Andre Michael</h2>
                <p className="position-text-3-slider-1">Mahasiswa Jakarta</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slidependapat">
                <p className="position-text-1-slider-1 ">
                  “Melalui website ini saya jadi bisa membantu anak-anak di
                  Indonesia. Saya telah bergabung ke dalam komunitas volunteer
                  melalui website ini.”
                </p>
                <h2 className="position-text-2-slider-1">Vianica Sofia</h2>
                <p className="position-text-3-slider-1">Mahasiswa Bekasi</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slidependapat">
                <p className="position-text-1-slider-1 ">
                  “Tampilannya yang interaktif membuat website ini menjadi lebih
                  menarik. Artikel yang disajikan juga selalu yang terbaru”
                </p>
                <h2 className="position-text-2-slider-1">Dinda Hauwala</h2>
                <p className="position-text-3-slider-1">Mahasiswa Medan</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slidependapat">
                <p className="position-text-1-slider-1 ">
                  “Saya harap website ini dapat terus exist dan mendukung
                  pendidikan anak di Indonesia”
                </p>
                <h2 className="position-text-2-slider-1">Mario Hasbuan</h2>
                <p className="position-text-3-slider-1">Mahasiswa Sulawesi</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
