import image1 from "../assets/fotosd1.png";
import image2 from "../assets/logoinmengajar.png";
import image3 from "../assets/gambarmember.png";
import image6 from "../assets/fotokomentar.png";
import image7 from "../assets/fotokomentar1.png";
import { DEKOM } from "../router";
import { Link } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineShare } from "react-icons/hi";
import "../CSS/Komber.css";
import Footer from "../Components/Footer";
import "../CSS/Mobile/KomberMobile.css";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MainKomber = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandleChange = () => {
    setComments(() => [...comments, comment]);
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
    });
  }, []);

  return (
    <>
      <div className="posisikonten1">
        <img className="image1" src={image1} alt="fotosd1" />
        <Link to={DEKOM}>
          <img className="logomengajar" src={image2} alt="logoinmengajar" />
        </Link>
      </div>
      <div className="posisikonten2">
        <div className="konten2top">
          <h1 data-aos="fade-down" className="textdeskripsi">
            {" "}
            Deskripsi
          </h1>
          <Link to={DEKOM}>
            <button data-aos="fade-down" type="button" className="buttongabung">
              {" "}
              Gabung
            </button>
          </Link>
        </div>
        <p data-aos="fade-down" className="textkomunitasini">
          {" "}
          Komunitas ini berdiri dengan kekuatan alam yang sangat mendasar dari
          kekuatan uchiha dari negeri konoha yang mendalami peran menjadi...
        </p>
        <Link style={{ textDecoration: "none", color: "#009EFF" }} to="/">
          <p data-aos="fade-down" className="textlihatselengkapnya">
            {" "}
            Lihat Selengkapnya
          </p>
          {/* Swal.fire("username/password salah!", "", "error"); */}
        </Link>
        <div className="allmember">
          <div className="fotomemberpilihan">
            <img data-aos="fade-down" src={image3} alt="gambarmember" />
            <img
              data-aos="fade-up"
              src={image6}
              alt="gambarmember2"
              style={{ width: "55px", height: "55px" }}
            />
            <img
              data-aos="fade-up"
              src={image7}
              alt="gambarmember3"
              style={{ width: "55px", height: "55px" }}
            />
          </div>
          <p data-aos="fade-up" className="text100member">
            100 member
          </p>
        </div>
      </div>
      <div className="posisikonten3">
        <textarea
          value={comment}
          onChange={handleChange}
          placeholder="Tulis pendapat kamu disini"
        />
        <button
          onClick={onClickHandleChange}
          className="buttoninputfoto"
          type="button"
        >
          <FiSend size={30} />
          Kirim
        </button>
      </div>
      <div className="posisikonten4">
        {comments.map((text) => (
          <div className="status">
            <div className="detailstatus">
              <div className="detailstatustop">
                {/* <img className="imgkomentar" src={image6} alt="fotokomentar" /> */}
                <CgProfile size={35} />
                <h1 className="textnamamember">Fauzan</h1>
              </div>
              <p className="textkomentar">{text}</p>
            </div>
            <div className="detailstatusbottom">
              <p className="like">
                <AiOutlineLike size={30} /> Belum ada yang suka
              </p>
              <p className="share">
                <HiOutlineShare size={30} /> Bagikan
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default MainKomber;
