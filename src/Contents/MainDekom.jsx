import IMygy from '../Assets/IMygy.png';
import Avaownercuy from '../Assets/Avaownercuy.png';
import Avamembercuy from '../Assets/Avamembercuy.png';
import Avamembercuy2 from '../Assets/Avamembercuy2.png';
import fotokegiatan from '../Assets/kegiatankomunitas.png';
import { FcCalendar } from "react-icons/fc";
import {MdNavigateNext} from "react-icons/md"
import '../CSS/Dekom.css';
import '../CSS/Mobile/DekomMobile.css';


const MainDekom = () => {
    
    return ( 
        <>
            <ul className="linknavdekom">
                <li style={{color: '#009EFF'}} className="linknavhome"> Home </li>
                <MdNavigateNext style={{color:"#dfdfdf"}}/>
                <li className="linknavdetail"> Komunitas </li>
                <MdNavigateNext style={{color:"#dfdfdf"}}/>
                <li className="linknavdetail"> Rumah Mengajar </li>
            </ul>
            <div className='maindekom'>
                <div className='maindekomleft'>
                    <img className='imagekomunitasdetail' src={IMygy} alt="IMygy"/>
                    <div className='personalteamkomunitasdetail'>
                        <div className='ownerkomunitas'>
                            <p className='ownerkomunitasid'>Owner</p>
                            <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                        </div>
                        <div className='memberkomunitas'>
                            <p className='memberkomunitasid'>Member</p>
                            <ul style={{padding: '0 0'}}>
                                <img src={Avamembercuy} className='imagememberkomunitasid' />
                                <img src={Avamembercuy} className='imagememberkomunitasid'/>
                                <img src={Avamembercuy2} className='imagememberkomunitasid'/>
                            </ul>
                        </div>
                        <div className="lokasikomunitas">
                            <p className='lokasikomunitasid'>Lokasi</p>
                        </div>
                    </div>
                </div>
                <div className='maindekomright'>
                    <div className='maindekomrighttop'>
                        <p className='identifyjoin'>Anda Sudah Bergabung</p>
                        <p className='logoutkomunitas'>keluar</p>
                    </div>
                    <p className='deskripsititlekomunitas'>Description</p>
                    <p className='deskripsidetailkomunitasdekom'>
                        Indonesia Mengajar merupakan komunitas yang bertekad 
                        dalam membantu pendidikan anak Indonesia.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p className='kegiatankomunitasdetail'>Kegiatan</p>
                    <ul className='datekegiatan'>
                        <FcCalendar size={30}/>
                        <li className='tanggalkegiatankomunitas'>16 Juli 2022</li>
                        <li className='tanggalkegiatankomunitas'>|</li>
                        <li className='tanggalkegiatankomunitas'>Tinjau Anak-anak di Kec. Bondowoso</li>
                    </ul>
                    <ul className='datekegiatan'>
                        <FcCalendar size={30}/>
                        <li className='tanggalkegiatankomunitas'>16 Juli 2022</li>
                        <li className='tanggalkegiatankomunitas'>|</li>
                        <li className='tanggalkegiatankomunitas'>Tinjau Anak-anak di Kec. Bondowoso</li>
                    </ul>
                    <p className='fotokegiatantitle'>Foto</p>
                    <div className='fotokegiatandetail'>
                        <img className='fotokegiatandetailid' src={fotokegiatan} alt="Fotosidekom"/>
                        <img className='fotokegiatandetailid' src={fotokegiatan} alt="Fotosidekom"/>
                        <img className='fotokegiatandetailid' src={fotokegiatan} alt="Fotosidekom"/>
                    </div>
                    <div className='fotokegiatandetail'>
                        <img className='fotokegiatandetailid' src={fotokegiatan} alt="Fotosidekom"/>
                        <img className='fotokegiatandetailid' src={fotokegiatan} alt="Fotosidekom"/>
                        <img className='fotokegiatandetailid' src={fotokegiatan} alt="Fotosidekom"/>
                    </div>
                </div>
            </div>
        </>
     );
}

export default MainDekom;