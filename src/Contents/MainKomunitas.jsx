import img1 from "../Assets/img_komunitas1.png";
import img2 from "../Assets/img_komunitas2.png";
import img3 from "../Assets/profil_komunitas.png";
import img4 from "../Assets/volunteers_need.png";
import "swiper/css";
import "../CSS/Komunitas.css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "../CSS/CarouselKomunitas.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../CSS/Dekstop/DekstopMainKomunitas.css";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { KOMBER, DONASI } from "../router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import '../CSS/Mobile/KomunitasMobile.css';

const MainKomunitas = () => {
useEffect(() => {
  AOS.init({
    once: true,
    duration: 400,
  })
}, [])

  return (
    <>
      <section>
        {/* konten 1 */}
        <div>
          <div className="konten1top"
          data-aos="fade-up"
            style={{
              height: "413px",
              width: "100%",
              overflow: "hidden",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="konten1title">
              <h1 className="texttemukan">
                Temukan Komunitas & Bergabunglah Dalam Gerakan Memajukan
                Pendidikan Indonesia
              </h1>
              <p className="textkami">
                Kami menyediakan wadah para volunteer dan juga masyarakat yang
                ingin bergabung bersatu dalam menggalang aksi untuk pendidikan
                anak Indonesia
              </p>
            </div>
            <img className="imgkomunitas1" src={img1} alt="img_komunitas1" />
          </div>
        </div>
        {/* konten komunitas */}

        {/* konten 2 komunitas*/}
        <div className="konten2komunitas"
          style={{
            height: "auto", display:"flex"
          }}
        >
          <img  data-aos="fade-right" className="imgkomunitas2" src={img2} alt="img_komunitas2" />
          <div className="kontenkomunitasdetail" data-aos="fade-left">
            <div className="kontenkomunitasdetailtitle">
              <p className="textsupport">Support Education</p>
              <h1 className="textfitur">Fitur Komunitas</h1>
            </div>
            <p className="textkamimenyediakan">
              Kami menyediakan fitur komunitas untuk menggaet para volunteer di
              Indonesia yang ingin ikut dalam menggerakkan perjuangan maupun
              membantu anak-anak yang kurang mendapat pendidikan. Selain itu,
              komunitas juga bisa membuat antar sesama volunteer saling berkenalan
              dan berinteraksi.
            </p>
            <div className="konten2detailjob">
              <div className="konten2detailjobleft">
                <h1 className="text100 style100-80-90 ">100+</h1>
                <p className="text100 textvolunteer">Volunteer</p>
                <h1 className="text90 style100-80-90">90</h1>
                <p className="textkomunitas ">Komunitas</p>
              </div>
              <div className="konten2detailjobright">
                <h1 className="text80 style100-80-90">80k+</h1>
                <p className="textanak">Anak-anak terbantu</p>
              </div>
            </div>
          </div>
        </div>
        {/* kontent 2 komunitas */}

        {/* konten 3 komunitas */}
        <div className="konten3komunitas" style={{height:"auto"}} >
        <div className="posisikomunitasterbaru">
            <div className="spacekomunitasterbaru">
              <h3
                style={{
                  width: "194px",
                  height: "30px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "149.5%",
                }}
              >
                Komunitas Terbaru
              </h3>
              <div className="posisikomunitas1">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                  src={img3}
                  alt="profil_komunitas"
                />
                <p className="styletextposisikomunitas">
                  Bumi Langit 
                  <br /> 50 member 2 post
                </p>
              </div>
              <div className="posisikomunitas1">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                  src={img3}
                  alt="profil_komunitas"
                />
                <p className="styletextposisikomunitas">
                  Bumi Langit 
                  <br /> 50 member 2 post
                </p>
              </div>
              <div className="posisikomunitas1">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                  src={img3}
                  alt="profil_komunitas"
                />
                <p className="styletextposisikomunitas">
                  Bumi Langit <br />
                  50 member 2 post
                </p>
              </div>
              <div className="posisikomunitas1">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                  src={img3}
                  alt="profil_komunitas"
                />
                <p className="styletextposisikomunitas">
                  Bumi Langit 
                  <br /> 50 member 2 post
                </p>
              </div>
              <div className="posisikomunitas1">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    marginTop: "0",
                  }}
                  src={img3}
                  alt="profil_komunitas"
                />
                <p className="styletextposisikomunitas">
                  Bumi Langit  
                  <br /> 50 member 2 post
                </p>
              </div>
            </div>
            <p className="textlihatsemuanya">Lihat Semuanya</p>
          </div>
        <div  className="konten3komunitastopmobile">
          <div className="posisikomunitasterbarumobile">
            <div className="spacekomunitasterbaru">
              <h3
                style={{
                  width: "194px",
                  height: "30px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "149.5%",
                }}
              >
                Komunitas Terbaru
              </h3>
              <div className="posisikomunitas1">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    marginTop: "0",
                    marginLeft: "20px",
                  }}
                  src={img3}
                  alt="profil_komunitas"
                />
                <p className="styletextposisikomunitas">
                  Bumi Langit 
                  <br /> 50 member 2 post
                </p>
              </div>
              <div className="posisikomunitas1">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    marginTop: "0",
                    marginLeft: "20px",
                  }}
                  src={img3}
                  alt="profil_komunitas"
                />
                <p className="styletextposisikomunitas">
                  Bumi Langit <br />
                  <br /> 50 member 2 post
                </p>
              </div>
              <div className="posisikomunitas1">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    marginTop: "0",
                    marginLeft: "20px",
                  }}
                  src={img3}
                  alt="profil_komunitas"
                />
                <p className="styletextposisikomunitas">
                  Bumi Langit <br />
                  <br /> 50 member 2 post
                </p>
              </div>
              <div className="posisikomunitas1">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    marginTop: "0",
                    marginLeft: "20px",
                  }}
                  src={img3}
                  alt="profil_komunitas"
                />
                <p className="styletextposisikomunitas">
                  Bumi Langit <br />
                  <br /> 50 member 2 post
                </p>
              </div>
              <div className="posisikomunitas1">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    marginTop: "0",
                    marginLeft: "20px",
                  }}
                  src={img3}
                  alt="profil_komunitas"
                />
                <p className="styletextposisikomunitas">
                  Bumi Langit <br />
                  <br /> 50 member 2 post
                </p>
              </div>
            </div>
            <p className="textlihatsemuanya">Lihat Semuanya</p>
          </div>
          <div className="konten3komunitasrightmobile">
          <img className="imgvolunteersneed" src={img4} alt="volunteers_need" />
            <p className="textmari">Mari Bantu Anak-anak Indonesia</p>
            <Link style={{textDecoration:'none', color:"black"}} to={DONASI}>
            <button className="buttondonasisekarang" type="button" >Donasi Sekarang</button>
            </Link>
          </div>
        </div>
          <Swiper
            direction={"vertical"}
            slidesPerView={"auto"}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className="mySwiper"
          >
            {/* komunitas 1 */}
            <SwiperSlide>
              <div
                style={{
                  borderStyle: "solid",
                  width: "auto",
                  overflow: "hidden",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px", marginTop: "2.5%" }}
                    src={img3}
                    alt="profil_komunitas"
                  />
                  <Link style={{textDecoration:'none', color:"black"}} to={KOMBER}>
                    <div>Indonesia Mengajar</div>
                  </Link>
                  <div>Gabung</div>
                </div>
                <div style={{fontSize:'16px' }} >
                  Komunitas yang masih dalam naungan bergabung
                </div>
                <div style={{ display: "flex", flexDirection:'row', gap:'10px' }}>
                  <p >
                    50 member
                  </p>
                  <p >
                    2 post
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* komunitas 1 */}
            {/* komunitas 2 */}
            <SwiperSlide>
              <div
                style={{
                  borderStyle: "solid",
                  width: "auto",
                  overflow: "hidden",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px", marginTop: "2.5%" }}
                    src={img3}
                    alt="profil_komunitas"
                  />
                  <Link style={{textDecoration:'none', color:"black"}} to={KOMBER}>
                    <div>Indonesia Mengajar</div>
                  </Link>
                  <div>Gabung</div>
                </div>
                <div style={{fontSize:'16px' }} >
                  Komunitas yang masih dalam naungan bergabung
                </div>
                <div style={{ display: "flex", flexDirection:'row', gap:'10px' }}>
                  <p >
                    50 member
                  </p>
                  <p >
                    2 post
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* komunitas 2 */}
            {/* komunitas 3 */}
            <SwiperSlide>
              <div
                style={{
                  borderStyle: "solid",
                  width: "auto",
                  overflow: "hidden",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px", marginTop: "2.5%" }}
                    src={img3}
                    alt="profil_komunitas"
                  />
                  <Link style={{textDecoration:'none', color:"black"}} to={KOMBER}>
                    <div>Indonesia Mengajar</div>
                  </Link>
                  <div>Gabung</div>
                </div>
                <div style={{fontSize:'16px' }} >
                  Komunitas yang masih dalam naungan bergabung
                </div>
                <div style={{ display: "flex", flexDirection:'row', gap:'10px' }}>
                  <p >
                    50 member
                  </p>
                  <p >
                    2 post
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* komunitas 3 */}

            {/* komunitas 4 */}
            <SwiperSlide>
              <div
                style={{
                  borderStyle: "solid",
                  width: "auto",
                  overflow: "hidden",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px", marginTop: "2.5%" }}
                    src={img3}
                    alt="profil_komunitas"
                  />
                  <Link style={{textDecoration:'none', color:"black"}} to={KOMBER}>
                    <div>Indonesia Mengajar</div>
                  </Link>
                  <div>Gabung</div>
                </div>
                <div style={{fontSize:'16px' }} >
                  Komunitas yang masih dalam naungan bergabung
                </div>
                <div style={{ display: "flex", flexDirection:'row', gap:'10px' }}>
                  <p >
                    50 member
                  </p>
                  <p >
                    2 post
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* komunitas 4 */}
            {/* komunitas 5 */}
            <SwiperSlide>
              <div
                style={{
                  borderStyle: "solid",
                  width: "auto",
                  overflow: "hidden",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    width: "333px",
                    height: "50px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px", marginTop: "2.5%" }}
                    src={img3}
                    alt="profil_komunitas"
                  />
                  <Link style={{textDecoration:'none', color:"black"}} to={KOMBER}>
                    <div>Indonesia Mengajar</div>
                  </Link>
                  <div>Gabung</div>
                </div>
                <div style={{fontSize:'16px' }} >
                  Komunitas yang masih dalam naungan bergabung
                </div>
                <div style={{ display: "flex", flexDirection:'row', gap:'10px' }}>
                  <p >
                    50 member
                  </p>
                  <p >
                    2 post
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* komunitas 5 */}
            {/* komunitas 6 */}
            <SwiperSlide>
              <div
                style={{
                  borderStyle: "solid",
                  width: "auto",
                  overflow: "hidden",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px", marginTop: "2.5%" }}
                    src={img3}
                    alt="profil_komunitas"
                  />
                  <Link style={{textDecoration:'none', color:"black"}} to={KOMBER}>
                    <div>Indonesia Mengajar</div>
                  </Link>
                  <div>Gabung</div>
                </div>
                <div style={{fontSize:'16px' }} >
                  Komunitas yang masih dalam naungan bergabung
                </div>
                <div style={{ display: "flex", flexDirection:'row', gap:'10px' }}>
                  <p >
                    50 member
                  </p>
                  <p >
                    2 post
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* komunitas 6 */}
          
          <div className="konten3komunitasright">
            <img className="imgvolunteersneed" src={img4} alt="volunteers_need" />
            <p className="textmari">Mari Bantu Anak-anak Indonesia</p>
            <Link style={{textDecoration:'none', color:"black"}} to={DONASI}>
              <button className="buttondonasisekarang" type="button" >Donasi Sekarang</button>
            </Link>
          </div>
        </div>
        {/* kontent 3 komunitas */}
      </section>
      <Footer />
    </>
  );
};

export default MainKomunitas;
