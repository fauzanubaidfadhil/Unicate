//content
import background from "../Assets/background.png";
import ellipse1 from "../Assets/ellipse1.png";
import ellipse2 from "../Assets/ellipse2.png";
import ellipse3 from "../Assets/ellipse3.png";
import smile from "../Assets/smileAksi.png";
import panah from "../Assets/tanda_panah.png";
import { Link } from "react-router-dom";
import { KISAHINSPIRASI, DONASI, AKSIDETAIL, AKSIDETAIL2 } from "../router";

//kisahinspirasi
import Foto from "../Assets/foto.png";

// card
import Logo from "../Assets/logo.png";
import Card1 from "../Assets/card1.png";
import Card2 from "../Assets/card2.png";
import Card3 from "../Assets/card3.png";
import "../CSS/Aksi.css";
import "../CSS/Mobile/AksiMobile.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
 
const MainAksi =() => {
    useEffect(() => {
        AOS.init({
          once: true,
          duration: 400,
        })
      }, [])

    return (
        <>
        {/* Content */}
            <div data-aos="fade-up" className="pembungkus-content">
                <div className="blur">
                    <div className="content">
                        <h1 className="text-ku">Berbuat baik kapan saja. Mereka sangat membutuhkan bantuanmu</h1>
                        <p className="text2-ku">Mari bersama-sama membantu anak-anak Indonesia yang sedang membutuhkan pendidikan. Satu rupiah dari anda sangat berharga untuk mereka</p>
                        <Link to={DONASI}>
                            <button className="button-aksi-link">Mulai berdonasi sekarang</button>
                        </Link>
                    </div>
                    <div className="content2bottom">
                        <p className="text3">Usaha kecil membuat perubahan besar. <br></br>Ayo mulai sekarang!</p>    
                        <div className="content2">
                            <div className="icon">
                                <img classname="gambar " src={ellipse1} alt="icon1" />
                                <img classname="gambar " src={ellipse2} alt="icon2" />
                                <img classname="gambar" src={ellipse3} alt="icon3" />
                            </div>
                            <div className="vol">1300+ Volunteers</div>
                        </div>
                    </div>
                </div>
                  <div>
                    <img className="smile" src={smile} alt="smile" />
                    <img className="panah" src={panah} alt="tanda_panah" />
                  </div>
                <img  src={background} alt="background" className="gambartopaksi"/>
            </div>
        {/* Content */}

        {/* KisahInspirasi */}
        <div className="kishpircon2" style={{height: "auto", display: "flex", flexDirection: "column", alignItems: "flex-start", gap:"15px", padding:"20px 56px"}} >
                
                    <p className="aksi">Kisah Inspirasi</p>
                    <div className="aksikishpir">
                        <div className="aksikishpirdetail">
                            <p className="text1-aksi-size-text ">Masih banyak anak-anak di indonesia yang belum mendapatkan pendidikan yang layak.</p>
                            <p className="text2-aksi-size-text">Rupanya anak miskin di Indonesia adalah anak-anak usia sekolah dasar (7 - 12 tahun) yang tidak memperoleh kesempatan menikmati pendidikan formal...</p>
                        </div>
                        <img style={{width: "489px", height: "350px"}} src={Foto} alt="foto" className="fotokish"/>
                    </div>
            </div>
        {/* KisahInspirasi */}

        {/* card */}
        <div className="bagian-card">
        <Link style={{textDecoration:"none"}} to={KISAHINSPIRASI}> 
            <div data-aos="flip-left" className="shadow">
                <div className="card-1" >
                    <img className="unicate" src={Logo} alt="logo unicate" />
                    <div className="caption">
                        
                        <h2 style={{ color:"white", fontStyle:"normal", fontWeight:"700px", fontSize:"18px", lineHeight:"33px", marginLeft:"15px", textDecoration:"none" }}>
                        Banyak anak putus sekolah, kapolsek dirikan sekolah</h2>
                        <div className="position-inspirasi">
                            <h2 style={{ fontWeight:"500px", fontSize:"15.2765px", lineWeight:"23px", display:"flex", textAlign:"center", alignItems:"center", justifyContent:"center", marginTop:"5px" }}>Inspirasi</h2>
                        </div>
                    </div>
                    <img classname="imgcard" src={Card1} alt="background" />
                </div>
            </div>
        </Link>

            <div data-aos="flip-up" className="shadow">
            <Link to={AKSIDETAIL}>
                <div className="card-2" >
                    <img className="unicate" src={Logo} alt="logo unicate" />
                    <div className="caption">
                        <h2 style={{ color:"white", fontStyle:"normal", fontWeight:"700px", fontSize:"18px", lineHeight:"33px", marginLeft:"15px"  }}>
                        Kekuatan impian anak-anak pelosok negeri</h2>
                        <div className="position-inspirasi">
                            <h2 style={{ fontWeight:"500px", fontSize:"15.2765px", lineWeight:"23px", display:"flex", textAlign:"center", alignItems:"center", justifyContent:"center", marginTop:"5px" }}>Inspirasi</h2>
                        </div>
                    </div>
                    <img classname="imgcard" src={Card2} alt="background" />
                </div>
                </Link>
            </div>

            <Link to={AKSIDETAIL2}>
            <div data-aos="flip-right" className="shadow">
                <div className="card-3" >
                    <img className="unicate" src={Logo} alt="logo unicate" />
                    <div className="caption">
                        <h2 style={{ color:"white", fontStyle:"normal", fontWeight:"700px", fontSize:"18px", lineHeight:"33px", marginLeft:"15px"  }}>
                        Sarjana mendidik di daerah tertinggal</h2>
                        <div className="position-inspirasi">
                            <h2 style={{ fontWeight:"500px", fontSize:"15.2765px", lineWeight:"23px", display:"flex", textAlign:"center", alignItems:"center", justifyContent:"center", marginTop:"5px" }}>Inspirasi</h2>
                        </div>
                    </div>
                    <img classname="imgcard" src={Card3} alt="background" />
                </div>
            </div>
            </Link>

        </div>
        {/* card */}
        </>
    );
};

export default MainAksi;
    