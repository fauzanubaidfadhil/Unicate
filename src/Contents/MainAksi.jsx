//content
import background from "../assets/background.png";
import ellipse1 from "../assets/ellipse1.png";
import ellipse2 from "../assets/ellipse2.png";
import ellipse3 from "../assets/ellipse3.png";
import smile from "../assets/smileAksi.png";
import panah from "../assets/tanda_panah.png";
import { Link } from "react-router-dom";
import { KISAHINSPIRASI, DONASI, AKSIDETAIL, AKSIDETAIL2 } from "../router";

//kisahinspirasi
import Foto from "../assets/foto.png";

// card
import Logo from "../assets/logo.png";
import Card1 from "../assets/card1.png";
import Card2 from "../assets/card2.png";
import Card3 from "../assets/card3.png";
import "../CSS/Aksi.css";
import "../CSS/Mobile/AksiMobile.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MainAksi = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
    });
  }, []);

  return (
    <>
      {/* Content */}
      <div className="pembungkus-content">
        <div className="blur">
          <div className="content">
            <h1 className="text-ku">
              Berbuat baik kapan saja. Mereka sangat membutuhkan bantuanmu
            </h1>
            <p className="text2-ku">
              Mari bersama-sama membantu anak-anak Indonesia yang sedang
              membutuhkan pendidikan. Satu rupiah dari anda sangat berharga
              untuk mereka
            </p>
            <Link to={DONASI}>
              <button className="button-aksi-link">
                Mulai berdonasi sekarang
              </button>
            </Link>
          </div>
          <div className="content2bottom">
            <p className="text3">
              Usaha kecil membuat perubahan besar. <br></br>Ayo mulai sekarang!
            </p>
            <div className="content2">
              <div className="icon">
                <img className="gambar " src={ellipse1} alt="icon1" />
                <img className="gambar " src={ellipse2} alt="icon2" />
                <img className="gambar" src={ellipse3} alt="icon3" />
              </div>
              <p className="vol">1300+ Volunteers</p>
            </div>
          </div>
        </div>
        <div>
          <img className="smile" src={smile} alt="smile" />
          <img className="panah" src={panah} alt="tanda_panah" />
        </div>
        <img src={background} alt="background" className="gambartopaksi" />
      </div>
      {/* Content */}

      {/* KisahInspirasi */}
      <div
        className="kishpircon2"
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "15px",
          padding: "20px 56px",
        }}
      >
        <p data-aos="fade-up" className="aksi">
          Kisah Inspirasi
        </p>
        <div className="aksikishpir">
          <div className="aksikishpirdetail">
            <p data-aos="fade-up" className="text1-aksi-size-text ">
              Masih banyak anak-anak di indonesia yang belum mendapatkan
              pendidikan yang layak.
            </p>
            <p data-aos="fade-up" className="text2-aksi-size-text">
              Rupanya anak miskin di Indonesia adalah anak-anak usia sekolah
              dasar (7 - 12 tahun) yang tidak memperoleh kesempatan menikmati
              pendidikan formal...
            </p>
          </div>
          <img src={Foto} alt="foto" className="fotokish" />
        </div>
      </div>
      {/* KisahInspirasi */}

      {/* card */}
      <div className="bagian-card">
        <Link style={{ textDecoration: "none" }} to={KISAHINSPIRASI}>
          <div data-aos="flip-left" className="card-1 stylecardaksi">
            <img className="unicate" src={Logo} alt="logo unicate" />
            <div className="caption">
              <h2
                style={{
                  color: "white",
                  fontStyle: "normal",
                  fontWeight: "700px",
                  fontSize: "20px",
                  lineHeight: "33px",
                  marginLeft: "15px",
                  textDecoration: "none",
                }}
              >
                Banyak anak putus sekolah, kapolsek dirikan sekolah
              </h2>
              <div className="position-inspirasi">
                <h2
                  style={{
                    fontWeight: "500px",
                    fontSize: "15.2765px",
                    lineWeight: "23px",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5px",
                  }}
                >
                  Inspirasi
                </h2>
              </div>
            </div>
            <img className="efektransisi " src={Card1} alt="background" />
          </div>
        </Link>
        <Link to={AKSIDETAIL}>
          <div data-aos="flip-up" className="card-2 stylecardaksi">
            <img className="unicate" src={Logo} alt="logo unicate" />
            <div className="caption">
              <h2
                style={{
                  color: "white",
                  fontStyle: "normal",
                  fontWeight: "700px",
                  fontSize: "20px",
                  lineHeight: "33px",
                  marginLeft: "15px",
                }}
              >
                Kekuatan impian anak-anak pelosok negeri
              </h2>
              <div className="position-inspirasi">
                <h2
                  style={{
                    fontWeight: "500px",
                    fontSize: "15.2765px",
                    lineWeight: "23px",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5px",
                  }}
                >
                  Inspirasi
                </h2>
              </div>
            </div>
            <img className="efektransisi " src={Card2} alt="background" />
          </div>
        </Link>
        <Link to={AKSIDETAIL2}>
          <div data-aos="flip-right" className="card-3 stylecardaksi">
            <img className="unicate" src={Logo} alt="logo unicate" />
            <div className="caption">
              <h2
                style={{
                  color: "white",
                  fontStyle: "normal",
                  fontWeight: "700px",
                  fontSize: "20px",
                  lineHeight: "33px",
                  marginLeft: "15px",
                }}
              >
                Sarjana mendidik di daerah tertinggal
              </h2>
              <div className="position-inspirasi">
                <h2
                  style={{
                    fontWeight: "500px",
                    fontSize: "15.2765px",
                    lineWeight: "23px",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5px",
                  }}
                >
                  Inspirasi
                </h2>
              </div>
            </div>
            <img className="efektransisi " src={Card3} alt="background" />
          </div>
        </Link>
      </div>
      {/* card */}
    </>
  );
};

export default MainAksi;
