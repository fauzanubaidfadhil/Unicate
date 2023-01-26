import image1 from "../assets/kisahin1.png";
import image2 from "../assets/bulatoren.png";
import image4 from "../assets/bulatbiru.png";
import image5 from "../assets/bulathijau.png";
import image6 from "../assets/segitiga1.png";
import image7 from "../assets/segitiga2.png";
import "../CSS/Kisahinspirasi.css";
import "../CSS/Mobile/KisahInspirasiMobile.css"
import {MdNavigateNext} from "react-icons/md"
import { HOME} from '../router'
import { Link } from "react-router-dom";

const MainKisahinspirasi = () => {
  return (
    <>
      <section>
      <div className="linknavkishpir">
        <ul className="linktopkish">
          <Link className="link" to={HOME}>
            <li className="text-home"> Beranda</li>
          </Link>
          <MdNavigateNext />
          <li className="kishpir">Aksi</li>
          <MdNavigateNext />
          <li className="kishpir"> Kisah Inspirasi </li>
          <MdNavigateNext />
          <li className="kishpir"> Kekuatan Impian Anak-anak Pelosok Negeri </li>
        </ul>
      </div>
      <div className="titlekishpir">
        <div className="judul">Banyak Anak Yang Putus Sekolah Kapolsek Dirikan Sekolah </div>
        <div className="garis" />
      <div className="segitigaorange">
        <img className="image7" src={image7} alt="segitiga2" />
        <img className="image6" src={image6} alt="segitiga1" />
      </div>
      </div>
      <img className="image5" src={image5} alt="bulathijau" />
      <img className="image4" src={image4} alt="bulatbiru" />
      <div className="mainkishpir">
        <img className="image1kisahinspirasi" src={image1} alt="kisahin1" />
        <div
         style={{display: 'flex', flexDirection: 'column', alignItems: 'center', 
         padding: '10px 56px', gap: '60px'}}>
          <p className="isi">
            Berawal dari keprihatinannya saat berpatroli ke setiap pelosok desa di
            Cianjur selatan, dia menemukan satu desa yang memiliki lulusan SMP
            putus sekolah paling banyak. Alasan putus sekolah tersebut didasari
            berbagai faktor, namun didominasi akibat masalah ekonomi serta jarak
            tempuh yang cukup jauh ke SMA dan SMK<br></br><br></br>
            Dia akhirnya berinisiatif untuk mendirikan sekolah menengah kejuruan
            (SMK) yang diberi nama Sekolah Bina Remaja Pasundan. Iptu Deden
            berkoordinasi dengan pihak-pihak terkait dan berhasil mendirikan SMK
            di Desa Padaluyu. Meski ruang belajar-mengajar masih menumpang di SD
            setempat yang beralamat di Kampung Padamakmur, Desa Padaluyu,
            Kecamatan Tanggeung, Kabupaten Cianjur, namun para pelajar terlihat
            antusias.<br></br>
            “Pada saat itu saya melihat sekelompok anak-anak yang bermain pada
            saat jam belajar. Lalu saya bertanya kepada anak-anak tersebut kenapa
            tidak sekolah. Mereka menjawab 'kami ingin sekolah dan kami juga sudah
            lulus SMP tapi tidak bisa melanjutkan sekolah karena orang tua kami
            tidak memiliki biaya untuk melanjutkan sekolah',” ujar Deden.<br></br>
            Kini, sekolah yang didirikannya berhasil merekrut 53 siswa-siswi dan
            sudah memasuki tahun kedua. Sedangkan untuk tahun ini sudah ada 26
            calon siswa yang mendaftar.
          </p>
        </div>
      </div>
      <img className="image2" src={image2} alt="bulatoren" />
      </section>
    </>
  );
};

export default MainKisahinspirasi;