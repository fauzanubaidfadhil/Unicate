import image1 from "../Assets/fotosd1.png";
import image2 from "../Assets/logoinmengajar.png";
import image3 from "../Assets/gambarmember.png";
import image4 from "../Assets/gambarmember2.png";
import image5 from "../Assets/gambarmember3.png";
import image6 from "../Assets/fotokomentar.png";
import "../CSS/Content.css";
import { MdOutlineLinkedCamera } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineShare } from "react-icons/hi";


const MainKomber = () => {
  return (
    <>
      <img className="image1" src={image1} alt="fotosd1" />
      <img className="image3" src={image3} alt="gambarmember" />
      <img className="image4" src={image4} alt="gambarmember2" />
      <img className="image5" src={image5} alt="gambarmember3" />
      <div className="position-logo-indonesia-mengajar">
        <img src={image2} alt="logoinmengajar" />
      </div>

      <div className="detail">
        <h1> Deskripsi</h1>
        <button className="button"> Gabung</button>
        <p className="komunitas">
          Komunitas ini berdiri dengan kekuatan alam yang sangat mendasar dari
          kekuatan uchiha dari negeri konoha yang mendalami peran menjadi...</p>
        <p className="lihat-selengkapnya"> Lihat Selengkapnya</p>
        <p className="member"> 100 member</p>
      </div>
      
      <div className="text">
        <textarea placeholder="Tulis pendapat kamu disini" />
        <button className="button-input" type="button">
          <MdOutlineLinkedCamera size={30}/>
          Foto/Video
        </button>
      </div>

      <div className="status">
      <img src={image6} alt="fotokomentar" />
        <h1 className="nama"> Ngab Dim</h1>
        <p className="teks"> Barang siapa yang suka membantu surga adalah tempatnya</p>
        <p className="like"><AiOutlineLike size={30} /> Ga ada yang suka</p>  
        <p className="share"><HiOutlineShare size={30} /> Bagikan</p>
      </div>
    </>
  );
};

export default MainKomber;