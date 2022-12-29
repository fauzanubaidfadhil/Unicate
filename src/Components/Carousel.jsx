import "../CSS/Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Slide = () => {
  return (
    <>
     
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          
        >
          <SwiperSlide>
            <p className="position-text-1-slider-1 ">
              “Website ini sangat memudahkan saya dalam membantu pendidikan anak
              Indonesia, terlebih anak jalanan di luar sana”
            </p>
            <h2 className="position-text-2-slider-1">Andre Michael</h2>
            <p className="position-text-3-slider-1">Mahasiswa Jakarta</p>
          </SwiperSlide>

          <SwiperSlide>
            <p className="position-text-1-slider-1">
              “Website ini sangat memudahkan saya dalam membantu pendidikan anak
              Indonesia, terlebih anak jalanan di luar sana”
            </p>
            <h2 className="position-text-2-slider-1">Andre Michael</h2>
            <p className="position-text-3-slider-1">Mahasiswa Jakarta</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="position-text-1-slider-1">
              “Website ini sangat memudahkan saya dalam membantu pendidikan anak
              Indonesia, terlebih anak jalanan di luar sana”
            </p>
            <h2 className="position-text-2-slider-1">Andre Michael</h2>
            <p className="position-text-3-slider-1">Mahasiswa Jakarta</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="position-text-1-slider-1">
              “Website ini sangat memudahkan saya dalam membantu pendidikan anak
              Indonesia, terlebih anak jalanan di luar sana”
            </p>
            <h2 className="position-text-2-slider-1">Andre Michael</h2>
            <p className="position-text-3-slider-1">Mahasiswa Jakarta</p>
          </SwiperSlide>
        </Swiper>
    
    </>
  );
};

export default Slide;
