import image1 from "../Assets/fotosd1.png";
import image2 from "../Assets/logoinmengajar.png";
import image3 from "../Assets/gambarmember.png";
import image6 from "../Assets/fotokomentar.png";
import { DEKOM } from "../router";
import { Link } from "react-router-dom";
import { MdOutlineLinkedCamera } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineShare } from "react-icons/hi";
import "../CSS/Komber.css";
import Footer from "../Components/Footer";
import "../CSS/Mobile/KomberMobile.css";

const MainKomber = () => {
  
  
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
        <p className="textlihatselengkapnya"> Lihat Selengkapnya</p>
        <div className="allmember">
          <div className="fotomemberpilihan">
            <img
              
              src={image3}
              alt="gambarmember"
            />
            <img
              src={image3}
              alt="gambarmember2"
            />
            <img
              src={image3}
              alt="gambarmember3"
            />
          </div>
          <p className="text100member"> 100 member</p>
        </div>
      </div>
      <div className="posisikonten3">
        <textarea placeholder="Tulis pendapat kamu disini" />
        <button className="buttoninputfoto" type="button">
          <MdOutlineLinkedCamera size={30} />
          Foto/Video
        </button>
      </div>
      <div className="posisikonten4">
          <div className="status">
            <div className="detailstatus">
              <div className="detailstatustop">
                <img className="imgkomentar" src={image6} alt="fotokomentar" />
                <h1 className="textnamamember"> Ngab Dim</h1>
              </div>
              <p className="textkomentar">
              Barang siapa yang suka membantu surga adalah tempatnya
              </p>
            </div>
            <div className="detailstatusbottom">
              <p className="like">
              <AiOutlineLike size={30} /> Ga ada yang suka
              </p>
              <p className="share">
                <HiOutlineShare size={30} /> Bagikan
              </p>
            </div>
        </div>
        <div className="status">
            <div className="detailstatus">
              <div className="detailstatustop">
                <img className="imgkomentar" src={image6} alt="fotokomentar" />
                <h1 className="textnamamember"> Ngab Dim</h1>
              </div>
              <p className="textkomentar">
              Barang siapa yang suka membantu surga adalah tempatnya
              </p>
            </div>
            <div className="detailstatusbottom">
              <p className="like">
              <AiOutlineLike size={30} /> Ga ada yang suka
              </p>
              <p className="share">
                <HiOutlineShare size={30} /> Bagikan
              </p>
            </div>
        </div>
        <div className="status">
            <div className="detailstatus">
              <div className="detailstatustop">
                <img className="imgkomentar" src={image6} alt="fotokomentar" />
                <h1 className="textnamamember"> Ngab Dim</h1>
              </div>
              <p className="textkomentar">
              Barang siapa yang suka membantu surga adalah tempatnya
              </p>
            </div>
            <div className="detailstatusbottom">
              <p className="like">
              <AiOutlineLike size={30} /> Ga ada yang suka
              </p>
              <p className="share">
                <HiOutlineShare size={30} /> Bagikan
              </p>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainKomber;
