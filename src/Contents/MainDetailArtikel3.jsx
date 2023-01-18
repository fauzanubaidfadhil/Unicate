import {MdNavigateNext} from "react-icons/md"
import facebookDetar from "../Assets/facebookDetar.png";
import twitterDetar from "../Assets/twitterDetar.png";
import instagramDetar from "../Assets/instagramDetar.png";
import Foto1Detar from "../Assets/Foto1Detar.png";
import Foto1aDetar from "../Assets/Foto1aDetar.png";
import Foto1bDetar from "../Assets/Foto1bDetar.png";
import Foto1cDetar from "../Assets/Foto1cDetar.png";


const MainDetailArtikel3 = () => {
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
                        Mengapa Pendidikan di Indonesia Belum Merata ?
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
                                    }}>Pelosok Negeri</p>
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
                    <img style={{ width:'876.28px', height: '409.93px', borderRadius: '17.6314px' }} src={Foto1cDetar} alt="" />
                    {/* text */}
                    <p style={{ marginTop:'25px',
                                fontFamily: 'Calibri',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '19.501px',
                                lineHeight: '29px',
                                textAlign:'justify' }}>
                        <a style={{ textDecoration:'none' }} href="/">Unicate.com </a>
                        Pendidikan memiliki peranan yang sangat penting sebagai penunjang kehidupan manusia, karna sejatinya manusia tidak akan terlepas dari pendidikan. Pengembangan kajian pendidikanpun harus diseimbangi sesuai dengan apa yang terjadi di masyarakat sosial. karna pendidikan bagaikan eksperimen yang menjadi percobaan sepanjang masa. Generasi muda yang berperan sebagai Agent Of Change haruslah mampu berperan juga sebagai Agent Of Producer yang mampu menciptakan perubahan yang nyata. <br/>
                        "Ada di SD Negeri 7 Kelurahan Santiong, SD Negeri 30 Kayu Merah, SD Negeri 4 Mononutu, dan SMP Islam," jelas Nuraela, Selasa (24/5). <br/>
                        Untuk Putri Delani yang kini tercatat sebagai siswi SDN 7 Santiong, kata Nurlaela, putus sekolah karena sudah yatim-piatu.
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
                        Menurut naufal syah putra (mahasiswa pgsd Uhamka) - Indonesia merupakan negara yang berpendidikan, namun kondisi pendidikan di Indonesia belum merata. Pendidikan yang belum merata menjadi permasalahan yang genting. Banyak penyebab yang menyebabkan pendidikan di Indonesia belum merata, diantara lain ialah faktor minimnya sumber daya masyarakat (SDM), rendahnya kualitas guru, dan kurangnya sarana dan prasarana yang menunjang untuk pendidikan. <br/>
                        Banyak daerah diluar sana yang masih minim tentang pendidikan, terutama di daerah bagian timur pelosok sana, bahkan bukan hanya sarana dan prasarana yang kurang memadai, namun juga rendahnya tenaga pendidik, sehingga memerlukan tenaga pendidik dari luar. Penyebab dari faktor kemiskinan anak anak yang masih dibawah umur yang membantu ekonomi keluarganya, sehingga menghambat pendidikannya. Oleh karena itu, pemerintah haruslah membuka mata memikirkan pentingnya untuk meratakan pendidikan di Indonesia, terutama bagi sekelompok masyarakat di pelosok terpencil.<br/>
                        Kualitas pendidikan di Indonesia saat ini sangat memperhatikan dengan bukti data UNESCO tahun 2000 tentang indeks pengembangan manusia (Human development indeks) yaitu merupakan komposisi dari peringkat kecapaian pendidikan. Baik pendidikan formal maupun informal.
                        Banyak hal yang harus diperbaiki di Indonesia. Baik dari pemerintah maupun masyarakat yang menjadi tokoh peran penting dalam perubahan pendidikan di Indonesia ini. Agar dapat menciptakan sumber daya manusia yang unggul dalam ilmu pengetahuan dan mampu bersaing dengan negara berkembang dan negara maju lainnya. Dimulai dari sosialisasi masyarakatnya, mewajibkan belajar selama 12 tahun, memperbaiki kualitas guru, dan melengkapi sarana dan prasarana pendidikan ditempat tempat terpencil, terutama di sekolah yang berada di daerah pelosok-pelosok negri.<br/>
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
                        <img style={{ width: '152px',
                                      height: '90px',
                                      borderRadius: '4.12811px' }} src={Foto1aDetar} alt="" />
                        <p style={{ paddingLeft:'2%',
                                    fontFamily: 'Calibri',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    width: '139px',
                                    height: '22px' }}
                            >Ada 150 Anak Putus Sekolah di Ternate</p>
                    </div>
                    {/* 2 */}
                    <div style={{ display: 'flex',
                                  flexDirection: 'row',
                                  paddingTop:'5%' }}>
                        <img style={{ width: '152px',
                                      height: '90px',
                                      borderRadius: '4.12811px' }} src={Foto1bDetar} alt="" />
                        <p style={{ paddingLeft:'2%',
                                    fontFamily: 'Calibri',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    width: '139px',
                                    height: '22px' }}
                            >Miris, Hampir 6 Ribu Anak Keluarga Miskin di Pesisir Selatan Putus Sekolah </p>
                    </div>
                    {/* 3 */}
                    <div style={{ display: 'flex',
                                  flexDirection: 'row',
                                  paddingTop:'5%' }}>
                        <img style={{ width: '152px',
                                      height: '90px',
                                      borderRadius: '4.12811px' }} src={Foto1Detar} alt="" />
                        <p style={{ paddingLeft:'2%',
                                    fontFamily: 'Calibri',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    width: '139px',
                                    height: '22px' }}
                            >Mengapa Pendidikan Indonesia</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default MainDetailArtikel3;