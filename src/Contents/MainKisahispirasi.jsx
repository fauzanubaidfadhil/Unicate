import image1 from "../Assets/kisahin1.png";
import image2 from "../Assets/bulatoren.png";
import image3 from "../Assets/garis.png";
import image4 from "../Assets/bulatbiru.png";
import image5 from "../Assets/bulathijau.png";
import image6 from "../Assets/segitiga1.png";
import image7 from "../Assets/segitiga2.png";
import image8 from "../Assets/segitiga3.png";
import image9 from "../Assets/segitiga4.png";
import "../CSS/Kisahinspirasi.css";

const MainKisahinspirasi = () => {
  return (
    <>
      <div>
        <ul>
          <li className="text-home"> home</li>
          <li> . </li>
          <li>Aksi</li>
          <li> . </li>
          <li> Kisah Inspirasi </li>
          <li> . </li>
          <li> Kekuatan Impian Anak-anak Pelosok Negeri </li>
        </ul>
      </div>
      <div className="judul">
        <h1> Banyak Anak Yang Putus Sekolah Kapolsek Dirikan Sekolah </h1>
      </div>
      <img className="image9" src={image9} alt="segitiga4" />
      <img className="image8" src={image8} alt="segitiga3" />
      <img className="image7" src={image7} alt="segitiga2" />
      <img className="image6" src={image6} alt="segitiga1" />
      <img className="image5" src={image5} alt="bulathijau" />
      <img className="image4" src={image4} alt="bulatbiru" />
      <img className="image3" src={image3} alt="garis" />
      <img className="image1" src={image1} alt="kisahin1" />
      <div>
        <h1 className="isi">
          Berawal dari keprihatinannya saat berpatroli ke setiap pelosok desa di
          Cianjur selatan, dia menemukan satu desa yang memiliki lulusan SMP
          putus sekolah paling banyak. Alasan putus sekolah tersebut didasari
          berbagai faktor, namun didominasi akibat masalah ekonomi serta jarak
          tempuh yang cukup jauh ke SMA dan SMK.
        </h1>
        <h1 className="isi2">
          Dia akhirnya berinisiatif untuk mendirikan sekolah menengah kejuruan
          (SMK) yang diberi nama Sekolah Bina Remaja Pasundan. Iptu Deden
          berkoordinasi dengan pihak-pihak terkait dan berhasil mendirikan SMK
          di Desa Padaluyu. Meski ruang belajar-mengajar masih menumpang di SD
          setempat yang beralamat di Kampung Padamakmur, Desa Padaluyu,
          Kecamatan Tanggeung, Kabupaten Cianjur, namun para pelajar terlihat
          antusias.
        </h1>
        <h1 className="isi3">
          “Pada saat itu saya melihat sekelompok anak-anak yang bermain pada
          saat jam belajar. Lalu saya bertanya kepada anak-anak tersebut kenapa
          tidak sekolah. Mereka menjawab 'kami ingin sekolah dan kami juga sudah
          lulus SMP tapi tidak bisa melanjutkan sekolah karena orang tua kami
          tidak memiliki biaya untuk melanjutkan sekolah',” ujar Deden.
        </h1>
        <h2 className="isi4">
          Kini, sekolah yang didirikannya berhasil merekrut 53 siswa-siswi dan
          sudah memasuki tahun kedua. Sedangkan untuk tahun ini sudah ada 26
          calon siswa yang mendaftar.
        </h2>
      </div>
      <img className="image2" src={image2} alt="bulatoren" />
    </>
  );
};

export default MainKisahinspirasi;