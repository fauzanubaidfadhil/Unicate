import IMygy from '../Assets/IMygy.png';
import Avaownercuy from '../Assets/Avaownercuy.png';
import fotokegiatan from '../Assets/kegiatankomunitas.png';
import { FcCalendar } from "react-icons/fc";
import {MdNavigateNext} from "react-icons/md"
import '../CSS/Dekom.css';
import '../CSS/Mobile/DekomMobile.css';
import { Link } from "react-router-dom";
import { KOMUNITAS, HOME} from "../router";


const MainDekom = () => {
    
    return ( 
        <>
            <ul className="linknavdekom">
                <Link
                style={{ color: "#009EFF", textDecoration: "none" }}
                to={HOME}
                >
                    <li style={{color: '#009EFF'}} className="linknavhome"> Home </li>
                </Link>
                <MdNavigateNext style={{color:"#dfdfdf"}}/>
                <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to={KOMUNITAS}
                    >
                <li className="linknavdetail"> Komunitas </li>
                </Link>
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
                            <div className='jajaranmember'>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                            </div>
                            <div className='jajaranmember'>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                            </div>
                            <div className='jajaranmember'>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                                <img className='imageownerkomunitasid' src={Avaownercuy} alt="Avaownercuy"/>
                            </div>
                        </div>
                        <div className="lokasikomunitas">
                            <p className='lokasikomunitasid'>Lokasi</p>
                            <iframe style={{width: '100%', 
                            allowFullScreen: '', 
                            loading: 'lazy', 
                            reffererPolicy: 'no-referrer-when-downgrade'}}
                            title="lokasimedan"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254832.50415561642!2d98.52940335267581!3d3.6426183063634547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cc1c3eb2fd%3A0x23d431c8a6908262!2sMedan%2C%20Kota%20Medan%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1673717114211!5m2!1sid!2sid" ></iframe>
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