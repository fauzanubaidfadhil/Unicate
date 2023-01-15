import React from 'react'
import image67 from '../Assets/orangdidonasi.png';
import image68 from '../Assets/Orangdilaporan.png';
import image69 from '../Assets/smile.png';
import '../CSS/Donasi.css';
import '../CSS/Mobile/DonasiMobile.css';
import { Dropdown } from 'react-bootstrap';
import BRI from '../Assets/BRI.png'
import iddonasi from '../Assets/iddonasiimg.png'


function MainDonasi() {
  return (
    <>
    <div style={{borderStyle:"solid", height:"auto", borderColor:"transparent", backgroundColor: '#005C95'}}>
      <img src={iddonasi} alt='iddonasi' className='iddonasi'/>
      <div className='tempatdonasi'>
        <h1 className='text1'>Donasi</h1>
        <h4 className='text2'>Nominal</h4>
        <div className='listnominal'>
          <button type="button" className='bordernominal'>5.000</button>
          <button type="button" className='bordernominal'>10.000</button>
          <button type="button" className='bordernominal'>20.000</button>
          <button type="button" className='bordernominal'>50.000</button>
          <button type="button" className='bordernominal'>75.000</button>`
        </div>
        <div className='listnominal'>
          <button type="button" className='bordernominal'>100.000</button>
          <button type="button" className='bordernominal'>200.000</button>
          <button type="button" className='bordernominal'>500.000</button>
        </div>
        <h1 className='textnama'>Nama</h1>
        <input type="text" className='inputiddonasi' />
        <h1 className='textemail'>Emaill</h1>
        <input type="text" className='inputiddonasi'/>
        <h1 className='textnomortelepon'>Nomor Telepon</h1>
        <input type="text" className='inputiddonasi'/>
        <h1 className='textmetodepembayaran'>Metode Pembayaran</h1>
        <div className='bank'>
          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                  <img src={BRI} alt="BRI" style={{ width: '60px', height: '20px'}}/>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
          <button type="button" className="buttonproses">
              Masuk
            </button>
      </div>  
      </div>
      <div className='laporandet'>  
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
          <p className='textlaporan5'>TERIMAKASIH ORANG BAIK</p>
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
    
    </>
  )
}
export default MainDonasi;
