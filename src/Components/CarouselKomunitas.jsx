import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import img1 from "../Assets/profil_komunitas.png";

import "../CSS/CarouselKomunitas.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

// swiper

const CarouselKomunitas = () => {
  return (
    <>
    
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
                  src={img1}
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
                  src={img1}
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
                  src={img1}
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
                  src={img1}
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
                  src={img1}
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
                  src={img1}
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
          {/* komunitas 6 */}
        </Swiper>
    </>
  );
};

export default CarouselKomunitas;
