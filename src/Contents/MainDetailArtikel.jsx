import VectorDetar from "../Assets/VectorDetar.png";
import facebookDetar from "../Assets/facebookDetar.png";
import twitterDetar from "../Assets/twitterDetar.png";
import instagramDetar from "../Assets/instagramDetar.png";
import Foto1Detar from "../Assets/Foto1Detar.png";
import Foto1aDetar from "../Assets/Foto1aDetar.png";
import Foto1bDetar from "../Assets/Foto1bDetar.png";
import Foto1cDetar from "../Assets/Foto1cDetar.png";


const MainDetailArtikel = () => {
    return ( 
        <>
            {/* link atas */}
            <div style={{ padding: '20px 56px'}}>
                <a style={{ textDecoration:'none', color:'black', padding:'0 5px' }} href="/">Home</a>
                <img  src={VectorDetar} alt="" />
                <a style={{ textDecoration:'none', color:'black', padding:'0 5px' }} href="/Artikel">Artikel</a>
                <img src={VectorDetar} alt="" />
                <a style={{ textDecoration:'none', color:'#009EFF', padding:'0 5px' }} href="/DetailArtikel">Detail Artikel</a>
            </div>
            {/* judul dan content */}
            <div style={{ display:'flex', flexDirection:'row', alignItems:'flex-start', padding:'40px 56px', gap:'25px' }}>
                {/* content kanan */}
                <div style={{ flex:'75%' }}>
                    <p style={{ fontFamily:'Poppins', fontStyle:'normal', fontWeight:'700', fontSize:'38.9027px', lineHeight:'58px', color:'#000000' }}>
                        Mengapa Pendidikan Indonesia
                    </p>
                    <div style={{ display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                        <p style={{ color:'#EA5900',
                                    width:'60px',
                                    height: '29px',
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '19.4513px',
                                    lineHeight:'149.5%'
                                    }}>JATIM</p>
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
                    <img style={{ width:'876.28px', height: '409.93px', borderRadius: '17.6314px' }} src={Foto1Detar} alt="" />
                    {/* text */}
                    <p style={{ marginTop:'25px',
                                fontFamily: 'Calibri',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '19.501px',
                                lineHeight: '29px',
                                textAlign:'justify' }}>
                        <a style={{ textDecoration:'none' }} href="/">Unicate.com </a>
                     - Keterbatasan ekonomi ini membuat mereka tak mampu membeli kebutuhan sekolah.
                    Sementara di tempat lain, padahal banyak juga lulusan sekolah yang tidak tahu harus dikemanakan peralatan sekolah yang sudah tidak digunakannya.
                    Melihat fenomena ini, tim mahasiswa Institut Teknologi Sepuluh Nopember (ITS) menggagas sebuah aplikasi terintegrasi yang menghubungkan antara donatur kebutuhan sekolah kepada pihak yang membutuhkan.
                    Ketua tim Muhammad Akmal Rishwanda menjelaskan, awalnya para anggota tim ini sempat mengalami kebingungan dengan barang-barang yang mereka miliki semasa sekolah."
                    </p>
                    <br />
                    <div style={{ display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center' }}>
                        <div style={{ borderLeft: '7.8px solid #005C95 ', height:'97.5px'}}>
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
                        Sedangkan keinginan untuk menyumbangkan barang bekas yang masih layak digunakan tersebut sangat tinggi. Namun, mereka tidak tahu harus kemana jika mereka ingin melakukan hal tersebut," katanya, Rabu (9/3/2022).
                        Akhirnya muncul ide yang menggagas sebuah aplikasi bernama Eduly. Menurut mahasiswa yang akrab disapa Akmal ini, Eduly merupakan sebuah platform bagi orang yang membutuhkan bebagai perangkat sekolah dan yang sedang ingin menyumbangkan barangnya.
                        Mahasiswa Departemen Teknik Informatika tersebut menambahkan, siapapun bisa menyumbangkan perangkat mereka mulai dari alat tulis, buku, baju seragam, hingga barang elektronik.
                        <br /> <br /> "Jadi, apabila ada laptop yang sudah tidak terpakai namun masih berfungsi bisa disumbangkan juga," ujarnya, di Surabaya, Selasa (8/3/2022).
                        Akmal melanjutkan, penerima dari barang yang disumbangkan bisa berupa yayasan panti asuhan yang merupakan mitra tim Eduly ataupun perorangan yang sedang membutuhkan barang tersebut.
                        Aplikasi Eduly akan merekomendasikan penerima yang memerlukan saat donatur akan menyumbangkan barangnya. Dengan begini, donatur akan langsung tahu ke mana barangnya akan disumbangkan.
                        Untuk pengiriman barang, tim Eduly menyediakan dua pilihan. Donatur bisa memilih untuk mengirimkan sendiri barangnya kepada penerima, atau menggunakan fitur pick-up yang mem berikan fasilitas barang akan diantarkan tim Eduly kepada penerima.
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
                                      borderRadius: '4.12811px' }} src={Foto1cDetar} alt="" />
                        <p style={{ paddingLeft:'2%',
                                    fontFamily: 'Calibri',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    width: '139px',
                                    height: '22px' }}
                            >Mengapa Pendidikan di Indonesia Belum Merata?</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default MainDetailArtikel;