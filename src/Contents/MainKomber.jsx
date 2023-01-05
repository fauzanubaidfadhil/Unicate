import image1 from "../Assets/fotosd1.png";
import image2 from "../Assets/logoinmengajar.png";
import image3 from "../Assets/gambarmember.png";
import image6 from "../Assets/fotokomentar.png";
import { MdOutlineLinkedCamera } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineShare } from "react-icons/hi";
import "../CSS/Komber.css";
import Footer from "../Components/Footer";

const MainKomber = () => {
  return (
    <>
      <div className="posisikonten1">
        <img className="image1" src={image1} alt="fotosd1" />
        <img className="logomengajar" src={image2} alt="logoinmengajar" />
      </div>
      <div className="posisikonten2">
        <h1 className="textdeskripsi"> Deskripsi</h1>
        <button type="button" className="buttongabung">
          {" "}
          Gabung
        </button>
        <p className="textkomunitasini">
          Komunitas ini berdiri dengan kekuatan alam yang sangat mendasar dari
          kekuatan uchiha dari negeri konoha yang mendalami peran menjadi...
        </p>
        <p className="textlihatselengkapnya"> Lihat Selengkapnya</p>
        <img
          style={{ marginLeft: "56px", position: "absolute" }}
          src={image3}
          alt="gambarmember"
        />
        <img
          style={{ marginLeft: "96px", position: "absolute" }}
          src={image3}
          alt="gambarmember2"
        />
        <img
          style={{ marginLeft: "136px", position: "absolute" }}
          src={image3}
          alt="gambarmember3"
        />
        <p className="text100member"> 100 member</p>
      </div>
      <div className="posisikonten3">
        <textarea placeholder="Tulis pendapat kamu disini" />
        <button className="buttoninputfoto" type="button">
          <MdOutlineLinkedCamera size={30} />
          Foto/Video
        </button>
      </div>
      {/* <div className="posisikonten4">
             <div className="status">
          <img className="imgkomentar" src={image6} alt="fotokomentar" />
          <h1 className="textnamamember"> Ngab Dim</h1>
          <p className="textkomentar">
            Barang siapa yang suka membantu surga adalah tempatnya
          </p>
          <p className="like">
            <AiOutlineLike size={30} /> Ga ada yang suka
          </p>
          <p className="share">
            <HiOutlineShare size={30} /> Bagikan
          </p>
        </div>
        <div className="status">
          <img className="imgkomentar" src={image6} alt="fotokomentar" />
          <h1 className="textnamamember"> Ngab Dim</h1>
          <p className="textkomentar">
            Barang siapa yang suka membantu surga adalah tempatnya
          </p>
          <p className="like">
            <AiOutlineLike size={30} /> Ga ada yang suka
          </p>
          <p className="share">
            <HiOutlineShare size={30} /> Bagikan
          </p>
        </div>
        <div className="status">
          <img className="imgkomentar" src={image6} alt="fotokomentar" />
          <h1 className="textnamamember"> Ngab Dim</h1>
          <p className="textkomentar">
            Barang siapa yang suka membantu surga adalah tempatnya
          </p>
          <p className="like">
            <AiOutlineLike size={30} /> Ga ada yang suka
          </p>
          <p className="share">
            <HiOutlineShare size={30} /> Bagikan
          </p>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default MainKomber;
