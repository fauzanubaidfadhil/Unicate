import React from 'react'
import Fotodetailaksi3 from "../assets/Fotodetailaksi3.png";
// import image1 from "../Assets/kisahin1.png";
// import image2 from "../Assets/bulatoren.png";
// import image4 from "../Assets/bulatbiru.png";
// import image5 from "../Assets/bulathijau.png";
// import image6 from "../Assets/segitiga1.png";
// import image7 from "../Assets/segitiga2.png";
// import image8 from "../Assets/segitiga3.png";
// import image9 from "../Assets/segitiga4.png";
import "../CSS/AksiDetail.css";
import {MdNavigateNext} from "react-icons/md"
import { HOME} from '../router'
import { Link } from "react-router-dom";

function MainAksiDetail() {
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
            <div className="garis" style={{marginLeft: "4.3%"}} />

            <div 
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', 
                    padding: '10px 56px', gap: '60px'}}>
            <img className='fotodetailaksi' src={Fotodetailaksi3} alt='Fotodetailaksi3'/>
            <p className='tulisandetailartikel'>
            Sandra Novita Sari seorang sarjana kependidikan yang turut serta dalam program Sarjana Mendidik 
            di Daerah Terdepan, Terluar, dan Tertinggal (SM3T) tahun 2013.Sandra ditempatkan di daerah Borik, 
            Kabupaten Manggarai, Nusa Tenggara Timur. Sebuah daerah yang tak pernah terpikir dibenaknya dan
            belum pernah dikunjungi. Keinginannya mengikuti program SM3T karena didasari motivasi kuat yang
            ada dalam dirinya untuk menjadi guru. Baginya, guru adalah profesi yang sungguh mulia."Profesi 
            guru itu merupakan profesi yang sungguh mulia. Bisa berbagi dan membagikan ilmu pengetahuan 
            para peserta didik merupakan suatu kebanggaan yang luar biasa," ujar Sandra. 
                <br/> <br/>
            Setelah menggenggam ijazah sarjana, Sandra hanya memiliki satu tekad, ingin mengabdikan diri 
            sesuai dengan disiplin ilmu yang dimiliki.Keinginan itu terwujud tatkala ada program Maju Bersama 
            Mencerdaskan Indonesia yang diselenggarakan oleh Kemendikbud dalam percepatan pembangunan 
            pendidikan di daerah Terdepan, Terluar, dan Tertinggal (3T). Program Nasional itu adalah Sarjana 
            Mendidik di Daerah Terdepan, Terluar, dan Tertinggal (SM3T).
                <br/> <br/>
            Setelah melalui berbagai tahap seleksi SM3T tahun 2013, akhirnya Sandra Novita Sari berhak 
            mengikuti tahap pra-kondisi. Ini adalah tahap para sarjana pendidikan mendapatkan pembekalan 
            sebelum benar-benar terjun menjadi tenaga pendidik di daerah 3T. Mereka diajarkan untuk bertahan, 
            melawan tantangan dan melatih mental mereka agar dapat memberikan ilmu dan pendidikan kepada 
            anak-anak di daerah pelosok.Setelah melalui proses pra-kondisi, para sarjana pendidikan akan 
            dapat memulai tugas mulianya untuk Maju Bersama Mencerdaskan Bangsa, khususnya meningkatkan 
            pendidikan di daerah 3T.
                <br/> <br/>
            Dalam video inspirasi edukasi bersama Sandra Novita Sari, terdengar lagu "Tanah Airku" yang 
            dinyanyikan para peserta SM3T sebelum keberangkatannya ke daerah. Lagu tersebut benar-benar 
            menyentuh jiwa dan raga sehingga membangkitkan semangat nasionalisme dan pengabdian terhadap negeri.
                <br/> <br/>
            </p>
            </div>

        </div>
      </section>
    </>
  );
};


export default MainAksiDetail;
