import {MdNavigateNext} from "react-icons/md"
import facebookDetar from "../Assets/facebookDetar.png";
import twitterDetar from "../Assets/twitterDetar.png";
import instagramDetar from "../Assets/instagramDetar.png";
import Foto1Detar from "../Assets/Foto1Detar.png";
import Foto1aDetar from "../Assets/Foto1aDetar.png";
import Foto1bDetar from "../Assets/Foto1bDetar.png";
import Foto1cDetar from "../Assets/Foto1cDetar.png";
import { Link } from "react-router-dom";


const MainDetailArtikel4 = () => {
    return ( 
        <>
            {/* link atas */}
            <div style={{ padding: "20px 56px" }}>
        <a
          style={{ textDecoration: "none", color: "#009EFF", fontSize: "14px" }}
          href="/"
        >
          Home
        </a>
        <MdNavigateNext style={{ color: "#dfdfdf"}}/>
        <a
          style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
          href="/Artikel"
        >
          Artikel
        </a>
        <MdNavigateNext style={{ color: "#dfdfdf"}} />
        <a
          style={{ textDecoration: "none", color: "black",  fontSize: "14px" }}
          href="/DetailArtikel"
        >
          Detail Artikel
        </a>
      </div>
            {/* judul dan content */}
            <div style={{ display:'flex', flexDirection:'row', alignItems:'flex-start', padding:'40px 56px', gap:'25px' }}>
                {/* content kanan */}
                <div style={{ flex:'75%' }}>
                    <p style={{ fontFamily:'Poppins', fontStyle:'normal', fontWeight:'700', fontSize:'38.9027px', lineHeight:'58px', color:'#000000' }}>
                    Miris, Hampir 6 Ribu Anak Keluarga Miskin di Pesisir Selatan Putus Sekolah
                    </p>
                    <div style={{ display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                        <p style={{ color:'#EA5900',
                                    width:'200px',
                                    height: '29px',
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '19.4513px',
                                    lineHeight:'149.5%'
                                    }}>PELOSOK NEGERI</p>
                        <p style={{ color:'#00000066',
                                    width:'152px',
                                    height: '29px',
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '19.4513px',
                                    lineHeight: '149.5%',
                                    marginLeft:'3%'
                                    }}>3 hari yang lalu</p>
                        <div style={{ display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    gap:'9.73px',
                                    margin:'auto' }}>
                            <p style={{ fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '15.5611px',
                                        lineHeight: '149.5%'}}>Share :</p>
                            <img style={{ width:'29.18px', height:'29.18px' }} src={twitterDetar} alt="" />
                            <img style={{ width:'29.18px', height:'29.18px' }} src={instagramDetar} alt="" />
                            <img style={{ width:'29.18px', height:'29.18px' }} src={facebookDetar} alt="" />
                        </div>
                    </div>
                    <img style={{ width:'876.28px', height: '409.93px', borderRadius: '17.6314px' }} src={Foto1bDetar} alt="" />
                    {/* text */}
                    <p style={{ marginTop:'25px',
                                fontFamily: 'Calibri',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '19.501px',
                                lineHeight: '29px',
                                textAlign:'justify' }}>
                        <a style={{ textDecoration:'none' }} href="/">Unicate.com </a>
                        - Kondisi itu selaras dengan Angka Partisipasi Sekolah (APS) di daerah berjuluk 'Negeri Sejuta Pesona' itu pun hingga kini terbilang rendah. Pada jenjang SD 99,96 persen dan turun pada jenjang SMP turun menjadi 96,75 persen dan SMA hanya 82,17 persen. <br/>
                        Kepala Badan Pusat Statistik (BPS) Pesisir Selatan, Yudi Yos Elvin mengatakan, faktor pendidikan memiliki peranan sangat penting dalam meningkatkan kesejahteraan dan pertumbuhan ekonomi masyarakat melalui peningkatan kapasitas dan produktivitas kerja. <br/>
                        "Tanpa kualitas sumber daya manusia yang mumpuni, sulit bagi wilayah atau daerah lepas dari jerat kemiskinan," katanya, Selasa (8/2/2022). <br/>
                        Data TNP2K mengonfirmasi anak keluarga miskin usia sekolah 40.517 orang. Sebanyak 5.988 orang tidak bersekolah. Sebagian besar diantaranya adalah anak usia 7-12 tahun dan 13-15 tahun.
                    </p>
                    <br />
                    <div style={{ display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center' }}>
                        <div style={{ borderLeft: "7.8px solid #005C95 ", borderRadius: "10px", height: "97.5px"}}>
                        </div>
                        <p style={{ fontFamily: 'Calibri',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '19.501px',
                                    lineHeight: '29px',
                                    paddingLeft:'7.5px'}}>
                            <strong>Baca Juga</strong><br />Solusi Jitu Dinas Pendidikan Atasi Masalah Anak Putus Sekolah di Makassar</p>
                    </div>
                    <p style={{ marginTop:'25px',
                                fontFamily: 'Calibri',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '19.501px',
                                lineHeight: '29px',
                                textAlign:'justify' }}>
                        Kondisi itu selaras dengan Angka Partisipasi Sekolah (APS) di daerah berjuluk 'Negeri Sejuta Pesona' itu pun hingga kini terbilang rendah. Pada jenjang SD 99,96 persen dan turun pada jenjang SMP turun menjadi 96,75 persen dan SMA hanya 82,17 persen. <br/>
                        Menurutnya fenomena tersebut merupakan dampak dari belum efektifnya pelaksanaan program wajib belajar di Pesisir Selatan dari yang awalnya hanya sampai usia 9 tahun saja, kini meningkat menjadi 12 tahun. <br/>
                        "Sebab persentase paling tinggi berada pada jenjang pendidikan SD dan semakin menurun pada jenjang lanjutan," katanya. <br/>
                        Karena itu pemerintah kabupaten mesti meningkatkan efektivitas program wajib belajar dari 9 tahun menjadi 12 tahun dan menjamin pemerataan pendidikan yang berkualitas, sesuai target SDGs di 2030. <br/>
                        Selain sektor kesehatan, pembangunan di bidang pendidikan merupakan salah satu pembangunan utama dalam mewujudkan tercapainya kualitas sumber daya manusia yang berdaya saing.  <br/>
                        Sementara Pemerintah Kabupaten Pesisir Selatan dalam Rencana Pembangunan Jangka Menengah Daerah (RPJMD) 2021-2026 menjadikan peningkatan kualitas sumber daya manusia sebagai arus utama, salah satunya lewat pendidikan.  <br/>
                        Pemerintah kabupaten menargetkan terwujudnya sumber daya manusia yang beriman, kreatif dan berdaya saing. Upaya itu dilakukan dengan meningkatkan akses pendidikan. Pemerataan dan peningkatan sarana prasarana pendidikan.  <br/>
                        Meningkatkan partisipasi sekolah pada anak usia sekolah dengan peningkatan harapan lama sekolah dan rata-rata lama sekolah yang diaharapkan dapat menjawab sasaran pembangunan daerah.  <br/>
                        Meningkatkan daya saing pendidikan, seiring dengan menaikan jumlah tenaga pendidik yang berkompeten dan mencetak siswa berprestasi. Membangun kerjasama dengan perguruan tinggi. <br/>
                        Salah satu rencana aksi yang kini telah dilakukan untuk mencapai tujuan tersebut adalah dengan membebaskan biaya pendidikan pada jenjang SD dan SMP, sesuai kewenangan pemerintah daerah. <br/>
                    </p>
                </div>
                {/* content kiri */}
                <div style={{ flex:'25%' }}>
                    <p style={{ fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '16px',
                                lineHeight: '24px' }}>Terkini </p>
                    {/* 1 */}
                    <div style={{ display: 'flex',
                                  flexDirection: 'row' }}>
                        <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel2">
                        <img style={{ width: '152px',
                                      height: '90px',
                                      borderRadius: '4.12811px' }} src={Foto1aDetar} alt="" />
                        </Link>
                        <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel2">
                        <p style={{ paddingLeft:'2%',
                                    fontFamily: 'Calibri',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    width: '139px',
                                    height: '22px' }}
                            >Ada 150 Anak Putus Sekolah di Ternate</p>
                        </Link>
                    </div>
                    {/* 2 */}
                    <div style={{ display: 'flex',
                                  flexDirection: 'row',
                                  paddingTop:'5%' }}>
                        <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel">
                        <img style={{ width: '152px',
                                      height: '90px',
                                      borderRadius: '4.12811px' }} src={Foto1Detar} alt="" />
                        </Link>
                        <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel">
                        <p style={{ paddingLeft:'2%',
                                    fontFamily: 'Calibri',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    width: '139px',
                                    height: '22px' }}
                            >Mengapa Pendidikan Indonesia </p>
                        </Link>
                    </div>
                    {/* 3 */}
                    <div style={{ display: 'flex',
                                  flexDirection: 'row',
                                  paddingTop:'5%' }}>
                        <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel3">
                        <img style={{ width: '152px',
                                      height: '90px',
                                      borderRadius: '4.12811px' }} src={Foto1cDetar} alt="" />
                        </Link>
                        <Link style={{textDecoration:"none", color:"black"}} to="/DetailArtikel3">
                        <p style={{ paddingLeft:'2%',
                                    fontFamily: 'Calibri',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    width: '139px',
                                    height: '22px' }}
                            >Mengapa Pendidikan di Indonesia Belum Merata?</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default MainDetailArtikel4;