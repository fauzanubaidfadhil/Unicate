import titik from "../Assets/titiktitik.png";
import image1 from "../Assets/image1.png";
import image4 from "../Assets/image4.png";
import image5 from "../Assets/image5.png";
import image6 from "../Assets/tanoto.png";
import image7 from "../Assets/sampoerna.png";
import image8 from "../Assets/inspirasi.png";
import infinite from "../Assets/infinite.png";
import image9 from "../Assets/image-card-1.png";
import image10 from "../Assets/image-card-2.png";
import image11 from "../Assets/image-card-3.png";
import image12 from "../Assets/image-article-1.png";
import image13 from "../Assets/image-article-2.png";
import image14 from "../Assets/image-article-3.png";
import image15 from "../Assets/image-article-4.png";
import image16 from "../Assets/image-article-5.png";
// import image17 from "../Assets/peta-indonesia.jpg";
// import segitiga from "../Assets/segitiga.png";
import segitigakotak from "../Assets/segitigakota.png";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
// import label from "../Assets/label_konten1.png";
// import Footer from "../Components/Footer";
import "../CSS/ResMain.css";
import "../CSS/New.css";
import React from "react";

const Main = () => {
  return (
    <>
      <div className="positioncontent1">
        <img className="style-img-titik" src={titik} alt="titiktitik" />
        <div className="positionlabel">
          <BsWhatsapp style={{ marginLeft: "8px" }} size={30} />
          <BsInstagram style={{ marginLeft: "8px" }} size={30} />
          <FaTiktok style={{ marginLeft: "8px" }} size={30} />
          <FiTwitter style={{ marginLeft: "8px" }} size={30} />
        </div>
        <img className="img-konten1" src={image1} alt="image1" />
        <h1 className="textmajukan">Majukan Pendidikan Anak-Anak Indonesia</h1>
        <p className="textgerakan ">Gerakan Peduli Anak Indonesia</p>
        <button className="buttonbergabung" onClick="">
          Bergabung Sekarang
        </button>

        <div className="position-textlabel">
          <h2 className="textlabel">
            2020/2021 Ada Sekitar 83,7 Ribu Anak Putus Sekolah di Seluruh
            Indonesia.
          </h2>
          <img
            style={{
              position: "absolute",
              bottom: "0",
              width: "178px",
              left: "50px",
            }}
            src={image4}
            alt="image4"
          />
        </div>
      </div>

      {/* Our Mission */}
      <div className="positioncontent2">
        <img className="img-konten2" src={image5} alt="image5" />
        <h1 className="textourmission">Our Mission</h1>
        <p className="paragraphkonten2">
          Unicate sebagai wujud kepedulian kami terhadap tantangan pendidikan
          yang dihadapi oleh pelajar dan pelaku pendidikan. unicate merupakan
          platform yang menghubungkan pemberi bantuan dengan pelajar atau pelaku
          pendidikan yang membutuhkan bantuan akses, dukungan fasilitas belajar,
          serta konten pendidikan yang berkualitas.
          <br />
          <br />
          Kami tidak menerima dana dan mengambil komisi dalam bentuk apapun
          melalui platform ini, serta bekerja sama dengan mitra situs
          penggalangan dana untuk menjaga transparansi donasi yang Anda berikan.
        </p>
        <h4 className="textcorporate">Corporate with:</h4>
        <div className="posisiiconcorporate">
          <img className="logotonoto" src={image6} alt="image6" />
          <img className="logosampoerna" src={image7} alt="image7" />
          <img className="logoinspirasi" src={image8} alt="image8" />
          <img className="logoinfinite" src={infinite} alt="infinite" />
        </div>
        {/* <img src={segitiga} alt="segitiga" /> */}
      </div>
      {/* Our Mission */}

      {/* Our Services */}
      <div className="positioncontent3">
        <div className="positionourservice">
          <h1 className="textourservice">Our Services</h1>
          <h1 className="textwhypeople">Why People Chooise Our Services</h1>
          <p className="textkonten3">
            Kami bekerja secara jujur dan berintegritas dalam memperjuangan hak
            pendidikan setiap anak Indonesia
          </p>
          {/* card */}
          <div className="card1 card">
            <img className="imgcard" src={image9} alt="image9" />
            <h3 className="textcard textcardjudul">Komunitas</h3>
            <p className="textcard kontencard">
              Berperan dalam turun ke lapangan untuk membantu anak anak kecil.
            </p>
          </div>
          <div className="card2 card">
            <img className="imgcard" src={image10} alt="image10" />
            <h3 className="textcard textcardjudul">Donasi</h3>
            <p className="textcard kontencard">
              Ikut andil dalam membantu gerakan mendukung pendidikan Indonesia
            </p>
          </div>
          <div className="card3 card">
            <img className="imgcard" src={image11} alt="image11" />
            <h3 className="textcard textcardjudul">Inspiratif</h3>
            <p className="textcard kontencard">
              Kisah-kisah dari para anak-anak maupun volunter yang ikut andil.
            </p>
          </div>
          {/* card */}
        </div>
      </div>
      {/* Our Services */}

      {/* Berita */}
      <div className="positioncontent4">
        <h1 className="textberita">Berita Terbaru</h1>
        <p className="textlihat">Lihat selengkapnya</p>
        <div className="posisiimgartikel1">
          <img className="imgartikel1 transisi" src={image12} alt="image12" />
        </div>
        <h3 className="textjatim">JATIM</h3>
        <h1 className="textmelalui">
          Melalui 'Jaketku' Ribuan Anak Putus Sekolah di Gresik Bisa Dapat
          Ijazah
        </h1>
        <p className="textpemkab">
          Pemkab Gresik menggagas sebuah program yang dapat membantu anak putus
          sekolah untuk bisa menyelesaikan pendidikannya.
        </p>
        {/* <img src={segitigakotak} alt="segitigakotak" /> */}
        <div className="posisiartikel2">
          <div
            style={{
              height: "218px",
              width: "273px",
              borderRadius: "30px",
              overflow: "hidden",
            }}
          >
            <img className="imgartikel2 transisi" src={image13} alt="image13" />
          </div>
          <p className="textberi posisiteksartikel">
            Beri Kesempatan Anak Kurang Mampu, Ganjar Banjir Dukungan karena
            Resmikan Sekolah Virtual
          </p>
        </div>
        <div className="posisiartikel3">
          <div>
            <img src={image14} alt="image14" />
          </div>
          <p>
            Beri Kesempatan Anak Kurang Mampu, Ganjar Banjir Dukungan karena
            Resmikan Sekolah Virtual
          </p>
        </div>
        <div className="posisiartikel4">
          <div>
            <img src={image15} alt="image15" />
          </div>
          <p>
            Beri Kesempatan Anak Kurang Mampu, Ganjar Banjir Dukungan karena
            Resmikan Sekolah Virtual
          </p>
        </div>
        {/* <div>
          <div>
            <img src={image16} alt="image16" />
          </div>
          <p>
            Beri Kesempatan Anak Kurang Mampu, Ganjar Banjir Dukungan
            karenaResmikan Sekolah Virtual
          </p>
        </div> */}
      </div>
      {/* Berita */}

      {/* <h2 className="text-19">Bagaimana pendapat mereka</h2>
        <img className="image-peta-indonesia" src={image17} alt="image17" />
      </div>
      <div style={{position: "absolute", top:"540%"}}> */}
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
};

export default Main;
