import React from 'react'
import image66 from '../Assets/navdonasi.png';
import image67 from '../Assets/orangdidonasi.png';
import image68 from '../Assets/Orangdilaporan.png';
import image69 from '../Assets/smile.png';
import '../CSS/Donasi.css';
import '../CSS/Mobile/DonasiMobile.css';


function MainDonasi() {
  return (
    <>
    <div style={{borderStyle:"solid", height:"auto", borderColor:"transparent"}}>
      <div>
      <img className='image66' src={image66} alt="image66" /></div>
       <div className='tempatdonasi' style={{borderStyle:"solid", position:"relative", marginTop:"200px", width:"422px", height:"620px", marginLeft:"800px", 
       backgroundColor:"White", borderRadius:"20px", borderColor:"transparent", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
        <h1 className='text1'>Donasi</h1>
        <h4 className='text2'>Nominal</h4>
        <button type="button" className='bordernominal'>5.000</button>
        <button type="button" className='bordernominal1'>10.000</button>
        <button type="button" className='bordernominal2'>20.000</button>
        <button type="button" className='bordernominal3'>50.000</button>
        <button type="button" className='bordernominal4'>75.000</button>
        <button type="button" className='bordernominal5'>100.000</button>
        <button type="button" className='bordernominal6'>200.000</button>
        <button type="button" className='bordernominal7'>500.000</button>
        
          <h1 className='textnama'>Nama</h1>
          <input type="text" style={{width:"372px", height:"32px", borderRadius:"12px", marginLeft:"15px", position:"absolute", marginTop:"85px", borderColor:"black", border:"2px solid rgba (0, 0, 0, 0.5)"}}/>
          <h1 className='textemail'>Emaill</h1>
          <input type="text" style={{width:"372px", height:"32px", borderRadius:"12px", marginLeft:"15px", position:"absolute", marginTop:"170px", borderColor:"black", border:"2px solid rgba (0, 0, 0, 0.5)"}}/>
          <h1 className='textnomortelepon'>Nomor Telepon</h1>
          <input type="text" style={{width:"372px", height:"32px", borderRadius:"12px", marginLeft:"15px", position:"absolute", marginTop:"250px", borderColor:"black", border:"2px solid rgba (0, 0, 0, 0.5)"}}/>
          <h1 className='textmetodepembayaran'>Metode Pembayaran</h1>
          <input type="text" style={{width:"372px", height:"32px", borderRadius:"12px", marginLeft:"15px", position:"absolute", marginTop:"350px", borderColor:"black", border:"2px solid rgba (0, 0, 0, 0.5)"}}/>
          <button type="button" className="buttonproses">
              Masuk
            </button>
      </div>  
      <div className='laporandet' style={{width:"60%", height:"auto",borderColor:"black", padding:" 10px 56px", marginTop:"-300px"}}>  
        <div className="laporantop">
          <div className='textupdate'>UPDATE PER NOVEMBER 2022</div>
          <div className='sublaporantop'>
            <div className='sublaporantopdetail'>
              <h1 className='laporan'>LAPORAN</h1>
              <h1 className='textlaporan1'>PEMASUKAN DAN PENGELUARAN
              DONASI YANG TERKUMPUL SEKARANG</h1>
              <h1 className='textlaporan2'>Terimakasih kami ucapkan kepada seluruh para donatur 
              yang telah menitipkan sebagian hartanya untuk ikut berpartisipasi
              dalam memajukan pendidikan indonesia</h1>
            </div>
            <img className='image68' src={image68} alt="image68" />
          </div>
        </div>
        <div className='laporankeuangan'>
          <div className='laporankeuangandetail'>
            <div className='bordertextuang'>Total Pemasukan</div>
            <div className='bordernominaluang'>3.500.000</div>
          </div>
          <div className='laporankeuangandetail'>
            <div className='bordertextuang'>Total Pengeluaran</div>
            <div className='bordernominaluang'>2.300.000</div>
          </div>
          <div className='laporankeuangandetail'>
            <div className='bordertextuang1'>Saldo Akhir</div>
            <div className='bordernominaluang'>1.200.000</div>
          </div>
        </div>
        <div className='laporanbottom'>
          <p className='textlaporan3'>Dana yang  kami terima, telah kami gunakan sebaik-baiknya untuk kegiatan
              yang sudah terlaksanakan seperti Rumah Pintar yang ada di setiap daerah.<br></br><br></br>
              Semoga dengan adanya program Rumah Pintar dapat membantu anak-anak
              Indonesia untuk mendapatkan pendidikan yang seharusnya mereka dapatkan.
          </p>
          <p className='textlaporan5'>TERIMKASIH ORANG BAIK</p>
        </div>
      </div>
      <div className='donasibottom' style={{width:"auto",height:"auto"}}>
        <img className='image67' src={image67} alt="image67" />
        <div className='donasibottomdetail'>
          <div className='donasibottomsubdetail'>
            <p className='textdonasi'>Donasi</p>
            <p className='textdonasi1'>Kami membuka kesempatan kepada seluruh orang untuk ikut mengulurkan tangan memberi donasi
            untuk mendukung setiap kegiatan para komunitas dan volunteer yang bergabung dalam website kami dalam memajukan pendidikan anak-anak Indonesia<br></br>Transparan, Cepat dan Mudah.</p>
          </div>
          <img className='image69' src={image69} alt="image69" />
        </div>
      </div>
    </div>
    </>
  )
}
export default MainDonasi;
