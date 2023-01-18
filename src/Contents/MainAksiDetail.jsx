import React from 'react'
import Fotodetailaksi from "../Assets/Fotodetailaksi.png";
import Fotodetailaksi2 from "../Assets/Fotodetailaksi2.png";
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
            <img className='fotodetailaksi' src={Fotodetailaksi} alt='Fotodetailaksi'/>
            <p className='tulisandetailartikel'>
                Lagu Ebiet G Ade ini sepertinya sangat sesuai dengan perjalanan dua orang siswi
                yang tinggal di kampung Temprigat, yaitu Margaretha (11 tahun) dan Mariana (10 tahun).
                Dua siswa ini duduk di kelas 6 & 5 di Sekolah Dasar Negeri 06 Simpang Dua,
                desa Semandang Kanan, kecamatan Simpang Dua, kabupaten Ketapang, provinsi Kalimantan Barat.
                <br/> <br/>
                Kampung Temprigat merupakan bagian dari Dusun Sungai Tontang Desa Semandang Kanan,
                letaknya kurang lebih 7 kilo meter dari dusun Sungai Tontang.
                Tidak seperti kampung-kampung lainnya, kampung Temprigat hanya dihuni oleh 12
                Kepala Keluarga saja. Sama seperti dusun Sungai Tontang yang tidak memiliki penerangan listrik,
                kampung Temprigat pun demikian. Agar penerangan dapat dinikmati oleh anak-anak mereka,
                masyarakat di kampung ini harus bergantian membeli solar untuk mengisi mesin gengset
                kepunyaan salah satu warga di kampung itu, kemudian warga lainnya menyambungkan kabel
                masing-masing ke rumahnya agar bisa menikmati cahaya malam beberapa jam.
                <br/> <br/>
                Dari kampung ini hanya ada 3 siswa yang bersekolah di SDN 06 Simpang dua, namun salah
                satu dari mereka tinggal di dusun Sungai Tontang di rumah salah satu keluarganya,
                dan hanya ada 2 siswi saja yang tiap hari berangkat yaitu Margaretha dan Mariana.
                Margaretha adalah salah satu siswi kelas 6 yang sebentar lagi akan mengikuti Ujian Nasional.
                <br/> <br/>
                Tidak seperti kebanyakan siswa di Indonesia, umumnya siswa akan bangun jam 6 pagi untuk
                berangkat ke sekolah dan mereka akan diantar oleh orang tuanya ke sekolah, apalagi jika 
                jarak dari rumah ke sekolah cukup jauh. Namun berbeda dengan Margaretha dan Mariana, dua 
                siswa ini harus bangun lebih awal pukul 5 pagi untuk bersiap-siap berangkat ke sekolah.
                <br/> <br/>
                Untuk mencapai sekolah, keduanya mesti berjalan kaki sejauh 7 kilo meter menyusuri 
                jalan tanah yang berdebu saat kering, dan berlumpur & licin saat hujan. Untungnya, 
                di separuh perjalanan pada kilo meter keempat, mereka bisa bertemu dengan kawan-kawan
                sekolah lainnya yang tinggal di kampung Sungai Dua. Ada sekitar 10 siswa SDN 06 Simpang
                Dua yang tinggal di sana. Mereka berangkat bersama melalui kondisi jalan yang sama 
                sekira 3 kilo meter lagi untuk tiba di sekolah.
                <br/> <br/>
                Menurut Kepala Dusun Sungai Tontang, pak Rakin diketahui bahwa siswa yang tiba paling 
                awal ke sekolah adalah dari kampung Margaretha, sementara siswa yang tinggal di dusun 
                lokasi sekolah baru bangun tidur saat anak-anak kampung jauh lewat di depan rumah mereka.
                Keriuhan dari canda tawa mereka yang suka bercerita sambil berjalan seperti alarm bagi
                siswa/i yang ada disekitar dusun ini, karena menjadi pengingat untuk segera bergegas 
                ke sekolah.
                <br/> <br/>
                Salah satu wali kelas SDN 06 Simpang Dua, Pak Febrianus (26 tahun) mengakui bahwa anak-anak
                itu memang tampak kelelahan setiba di sekolah, namun tertutupi oleh rasa senang saat sudah
                bertemu dengan kawan-kawan mereka di sekolah. Pertemuan itu seperti kekuatan bagi
                mereka untuk tetap menjalani perjuangannya menempuh pendidikan untuk menemukan impian 
                masa depannya.
                <br/> <br/>
                Cerita perjuangan kedua siswa itu untuk menempuh jalan sulit pergi dan pulang dari sekolah 
                mengusik rasa penasaran Fasilitator Masyarakat dari KIAT Guru, Voula dan Rena yang kemudian 
                mencoba medan yang dilalui oleh kedua siswa itu. Pada saat mereka mempersiapkan kegiatan 
                di Desa tersebut, keduanya mencoba menjajal medan berlumpur dengan berboncengan. 
                Beberapa kali ban motor mereka tenggelam dalam lumpur, dan bahkan terjatuh karena 
                licinnya jalan. Bayang-bayang perjuangan anak-anak kampung itu menjadi penyemangat untuk 
                meneruskan perjalanan.
                <br/> <br/>
                Sungguh Margaretha dan Mariana beserta teman-teman lainnya menjadi bukti dari masih 
                banyaknya anak-anak di pelosok negeri ini yang berjuang untuk menuntut ilmu dan berharap
                dari perjuangan mereka akan ada sebuah impian masa depan yang cerah, masa depan yang akan
                mengubah hidup mereka nantinya.
                <br/> <br/>
            </p>
            </div>

            <div 
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', 
                    padding: '10px 56px', gap: '60px'}}>
            <img className='fotodetailaksi' src={Fotodetailaksi2} alt='Fotodetailaksi2'/>
            <p className='tulisandetailaksi2'>Bagi sebagian orang, impian mungkin hanya akan berhenti sebagai 
            bunga tidur. Tapi bagi mereka yang menjadikan impian sebagai bangunan dasar untuk mewujudkan 
            angan-angan, impian bisa selalu menjadi api semangat untuk meraih apa pun!
            <br/><br/>
              Seorang Pelintas Negeri berkata bahwa “Menyalakan semangat anak Indonesia itu unik, 
              tidak akan habis kita bahas tangisannya, solusi demi solusi dibungkus dengan janji namun masih
              terdengar jelas doa-doa lirih dari pelosok sepi.” Dan sangat wajar mereka di desa memilih 
              meninggalkan sekolah lalu membantu orang tua di kebun/ladang karena sekolahpun tak mampu 
              menghadirkan kenyamanan belajar…. kadang juga sepi guru, karena gurunya sendiri memilih 
              berada di zona nyaman”.
            </p>
            </div>


        </div>
      </section>
    </>
  );
};


export default MainAksiDetail;
