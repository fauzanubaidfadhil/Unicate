import image1 from "../Assets/kisahin1.png";
import "../CSS/AksiDetail.css";
import "../CSS/Kisahinspirasi.css";
import "../CSS/Mobile/KisahInspirasiMobile.css"
import {MdNavigateNext} from "react-icons/md"
import { HOME} from '../router'
import { Link } from "react-router-dom";

const MainKisahinspirasi = () => {
  return (
    <>
      <section>
        <div className="dipaksidetail">

            <ul className="linktopkish" style={{marginLeft: "4%"}}>
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
            <h1 className='headerdetailaksi'>Banyak Anak Yang Putus Sekolah Kapolsek Dirikan Sekolah</h1>

            <div 
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', 
                    padding: '10px 56px', gap: '60px'}}>
            <img className='fotodetailaksi' src={image1} alt='kisahin1'/>
            <p className='tulisandetailartikel'>
                Berawal dari keprihatinannya saat berpatroli ke setiap pelosok desa di Cianjur selatan, 
                dia menemukan satu desa yang memiliki lulusan SMP putus sekolah paling banyak. Alasan putus 
                sekolah tersebut didasari berbagai faktor, namun didominasi akibat masalah ekonomi serta jarak 
                tempuh yang cukup jauh ke SMA dan SMK.
                <br/> <br/>
                Dia akhirnya berinisiatif untuk mendirikan sekolah menengah kejuruan (SMK) yang diberi nama 
                Sekolah Bina Remaja Pasundan. Iptu Deden berkoordinasi dengan pihak-pihak terkait dan 
                berhasil mendirikan SMK di Desa Padaluyu. Meski ruang belajar-mengajar masih menumpang di SD
                setempat yang beralamat di Kampung Padamakmur, Desa Padaluyu, Kecamatan Tanggeung, Kabupaten
                Cianjur, namun para pelajar terlihat antusias.
                <br/> <br/>
                “Pada saat itu saya melihat sekelompok anak-anak yang bermain pada saat jam belajar. 
                Lalu saya bertanya kepada anak-anak tersebut kenapa tidak sekolah. Mereka menjawab 'kami 
                ingin sekolah dan kami juga sudah lulus SMP tapi tidak bisa melanjutkan sekolah karena orang 
                tua kami tidak memiliki biaya untuk melanjutkan sekolah',” ujar Deden.
                <br/> <br/>
                Kini, sekolah yang didirikannya berhasil merekrut 53 siswa-siswi dan sudah memasuki tahun 
                kedua. Sedangkan untuk tahun ini sudah ada 26 calon siswa yang mendaftar. (fam)
                <br/> <br/>
            </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default MainKisahinspirasi;
