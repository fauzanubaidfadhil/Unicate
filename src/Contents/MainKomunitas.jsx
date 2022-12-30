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
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import Footer from "../Components/Footer";

const MainKomunitas = () => {
  return (
    <>
      <section>
        {/* konten 1 */}
        <div>
          <div
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
            <h1 className="texttemukan">
              Temukan Komunitas & Bergabunglah Dalam Gerakan Memajukan
              Pendidikan Indonesia
            </h1>
            <p className="textkami">
              Kami menyediakan wadah para volunteer dan juga masyarakat yang
              ingin bergabung bersatu dalam menggalang aksi untuk pendidikan
              anak Indonesia
            </p>
            <img className="imgkomunitas1" src={img1} alt="img_komunitas1" />
          </div>
        </div>
        {/* konten komunitas */}

        {/* konten 2 komunitas*/}
        <div
          style={{
            height: "687.03px",
            borderStyle: "solid",
            borderColor: "transparent",
          }}
        >
          <img className="imgkomunitas2" src={img2} alt="img_komunitas2" />
          <p className="textsupport">Support Education</p>
          <h1 className="textfitur">Fitur Komunitas</h1>
          <p className="textkamimenyediakan">
            Kami menyediakan fitur komunitas untuk menggaet para volunteer di
            Indonesia yang ingin ikut dalam menggerakkan perjuangan maupun
            membantu anak-anak yang kurang mendapat pendidikan. Selain itu,
            komunitas juga bisa membuat antar sesama volunteer saling berkenalan
            dan berinteraksi.
          </p>
          <h1 className="text100 style100-80-90 ">100+</h1>
          <p className="text100 textvolunteer">Volunteer</p>
          <h1 className="text80 style100-80-90">80k+</h1>
          <p className="textanak">Anak-anak terbantu</p>
          <h1 className="text90 style100-80-90">90</h1>
          <p className="textkomunitas">Komunitas</p>
        </div>
        {/* kontent 2 komunitas */}

        {/* konten 3 komunitas */}
        <div className="posisikonten3">
          <img className="imgvolunteersneed" src={img4} alt="volunteers_need" />
          <p className="textmari">Mari Bantu Anak-anak Indonesia</p>
          <button className="buttondonasisekarang" type="button" >Donasi Sekarang</button>
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
                  width: "656px",
                  height: "178px",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    position: "absolute",
                    left: "8%",
                    top: "15%",
                    width: "333px",
                    height: "50px",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px", marginTop: "2.5%" }}
                    src={img3}
                    alt="profil_komunitas"
                  />
                  <p>Indonesia Mengajar</p>
                  <p>Gabung</p>
                </div>
                <p style={{ position: "absolute", left: "8%", top: "40%" }}>
                  Komunitas yang masih dalam naungan bergabung
                </p>
                <div style={{ display: "flex" }}>
                  <p style={{ position: "absolute", top: "60%", left: "8%" }}>
                    50 member
                  </p>
                  <p style={{ position: "absolute", top: "60%", left: "25%" }}>
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
                  width: "656px",
                  height: "178px",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    position: "absolute",
                    left: "8%",
                    top: "15%",
                    width: "333px",
                    height: "50px",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px", marginTop: "2.5%" }}
                    src={img3}
                    alt="profil_komunitas"
                  />
                  <p>Bumi Langit</p>
                  <p>Gabung</p>
                </div>
                <p style={{ position: "absolute", left: "8%", top: "40%" }}>
                  Komunitas yang masih dalam naungan bergabung
                </p>
                <div style={{ display: "flex" }}>
                  <p style={{ position: "absolute", top: "60%", left: "8%" }}>
                    50 member
                  </p>
                  <p style={{ position: "absolute", top: "60%", left: "25%" }}>
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
                  width: "656px",
                  height: "178px",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    position: "absolute",
                    left: "8%",
                    top: "15%",
                    width: "333px",
                    height: "50px",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px", marginTop: "2.5%" }}
                    src={img3}
                    alt="profil_komunitas"
                  />
                  <p>Bumi Langit</p>
                  <p>Gabung</p>
                </div>
                <p style={{ position: "absolute", left: "8%", top: "40%" }}>
                  Komunitas yang masih dalam naungan bergabung
                </p>
                <div style={{ display: "flex" }}>
                  <p style={{ position: "absolute", top: "60%", left: "8%" }}>
                    50 member
                  </p>
                  <p style={{ position: "absolute", top: "60%", left: "25%" }}>
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
                  width: "656px",
                  height: "178px",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    position: "absolute",
                    left: "8%",
                    top: "15%",
                    width: "333px",
                    height: "50px",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px", marginTop: "2.5%" }}
                    src={img3}
                    alt="profil_komunitas"
                  />
                  <p>Bumi Langit</p>
                  <p>Gabung</p>
                </div>
                <p style={{ position: "absolute", left: "8%", top: "40%" }}>
                  Komunitas yang masih dalam naungan bergabung
                </p>
                <div style={{ display: "flex" }}>
                  <p style={{ position: "absolute", top: "60%", left: "8%" }}>
                    50 member
                  </p>
                  <p style={{ position: "absolute", top: "60%", left: "25%" }}>
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
                  width: "656px",
                  height: "178px",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    position: "absolute",
                    left: "8%",
                    top: "15%",
                    width: "333px",
                    height: "50px",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px", marginTop: "2.5%" }}
                    src={img3}
                    alt="profil_komunitas"
                  />
                  <p>Bumi Langit</p>
                  <p>Gabung</p>
                </div>
                <p style={{ position: "absolute", left: "8%", top: "40%" }}>
                  Komunitas yang masih dalam naungan bergabung
                </p>
                <div style={{ display: "flex" }}>
                  <p style={{ position: "absolute", top: "60%", left: "8%" }}>
                    50 member
                  </p>
                  <p style={{ position: "absolute", top: "60%", left: "25%" }}>
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
                  width: "656px",
                  height: "178px",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    position: "absolute",
                    left: "8%",
                    top: "15%",
                    width: "333px",
                    height: "50px",
                  }}
                >
                  <img
                    style={{ height: "40px", width: "40px", marginTop: "2.5%" }}
                    src={img3}
                    alt="profil_komunitas"
                  />
                  <p>Bumi Langit</p>
                  <p>Gabung</p>
                </div>
                <p style={{ position: "absolute", left: "8%", top: "40%" }}>
                  Komunitas yang masih dalam naungan bergabung
                </p>
                <div style={{ display: "flex" }}>
                  <p style={{ position: "absolute", top: "60%", left: "8%" }}>
                    50 member
                  </p>
                  <p style={{ position: "absolute", top: "60%", left: "25%" }}>
                    2 post
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* komunitas 6 */}
          <div className="posisikomunitasterbaru">
            <div className="spacekomunitasterbaru">
              <h3
                style={{
                  width: "194px",
                  height: "30px",
                  marginLeft: "20px",
                  marginTop: "20px",
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
        </div>
        {/* kontent 3 komunitas */}
      </section>
      <Footer/>
    </>
  );
};

export default MainKomunitas;
