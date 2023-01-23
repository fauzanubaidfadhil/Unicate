import image1 from "../Assets/fotosd1.png";
import image2 from "../Assets/logoinmengajar.png";
import image3 from "../Assets/gambarmember.png";
import image6 from "../Assets/fotokomentar.png";
import image7 from "../Assets/fotokomentar1.png";
import { DEKOM } from "../router";
import { Link } from "react-router-dom";
// import { MdOutlineLinkedCamera } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineShare } from "react-icons/hi";
import "../CSS/Komber.css";
import Footer from "../Components/Footer";
import "../CSS/Mobile/KomberMobile.css";
import { useState } from "react";
// import { KOMBER } from "../router";
import { FiSend } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const MainKomber = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandleChange = () => {
    setComments(() => [...comments, comment]);
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

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
          <h1 className="textdeskripsi"> Deskripsi</h1>
          <Link to={DEKOM}>
            <button type="button" className="buttongabung">
              {" "}
              Gabung
            </button>
          </Link>
        </div>
        <p className="textkomunitasini">
          Komunitas ini berdiri dengan kekuatan alam yang sangat mendasar dari
          kekuatan uchiha dari negeri konoha yang mendalami peran menjadi...
        </p>
        <Link style={{ textDecoration: "none", color: "#009EFF" }} to="/">
          <p className="textlihatselengkapnya"> Lihat Selengkapnya</p>
          {/* Swal.fire("username/password salah!", "", "error"); */}
        </Link>
        <div className="allmember">
          <div className="fotomemberpilihan">
            <img src={image3} alt="gambarmember" />
            <img
              src={image6}
              alt="gambarmember2"
              style={{ width: "55px", height: "55px" }}
            />
            <img
              src={image7}
              alt="gambarmember3"
              style={{ width: "55px", height: "55px" }}
            />
          </div>
          <p className="text100member"> 100 member</p>
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
