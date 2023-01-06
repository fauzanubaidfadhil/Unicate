import IMygy from '../Assets/IMygy.png';
import Avaownercuy from '../Assets/Avaownercuy.png';
import Avamembercuy from '../Assets/Avamembercuy.png';
import Avamembercuy2 from '../Assets/Avamembercuy2.png';
import Fotosidekom from '../Assets/Fotosidekom.png';
import Petadekom from '../Assets/Petadekom.png';
import { FcCalendar } from "react-icons/fc";
import '../CSS/Dekom.css';

const MainDekom = () => {
    return ( 
        <>
        <div style={{borderStyle:'solid', borderColor:'transparent', height:'1250px'}}>
            <ul className="Ulnyaartikel">
                <li style={{color: '#009EFF'}} className="Linya"> Home </li>
                <li className="Linyaartikel"> - </li>
                <li className="Linyaartikel"> Komunitas </li>
                <li className="Linyaartikel"> - </li>
                <li className="Linyaartikel"> Rumah Mengajar </li>
            </ul>
            <img className='image1cuy' src={IMygy} alt="IMygy"/>
            <p className='gabungdekom'>Anda Sudah Bergabung</p>
            <p className='keluarcuy'>keluar</p>
            <p className='deskripsidekom'>Description</p>
            <p className='bawahnyadeskripsi'>
                Indonesia Mengajar merupakan komunitas yang bertekad 
                dalam membantu pendidikan anak Indonesia.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p className='kegiatancuy'>Kegiatan</p>
            <ul style={{borderStyle:'solid', height:'50px', width:'500px',
                        borderColor:'#009EFF', backgroundColor:'#009EFF',
                        textAlign:'center', listStyle:'none', height: '40px',
                        display:'flex', marginLeft:'570px', marginTop:'-15px'}}>
                <li className='icondekom'><FcCalendar size={30}/></li>
                <li className='tgldekom'>16 Juli 2022</li>
                <li className='tgldekom'>|</li>
                <li className='ketdekom'>Tinjau Anak-anak di Kec. Bondowoso</li>
            </ul>
            <ul style={{borderStyle:'solid', height:'50px', width:'500px',
                        borderColor:'#009EFF', backgroundColor:'#009EFF',
                        textAlign:'center', listStyle:'none', height: '40px',
                        display:'flex', marginLeft:'570px', marginTop:'0px'}}>
                <li className='icondekom'><FcCalendar size={30}/></li>
                <li className='tgldekom'>17 September 2022</li>
                <li className='tgldekom'>|</li>
                <li className='ketdekom'>Saluran Bantuan di Tulung Agung</li>
            </ul>
            <p className='ownercuy'>Owner</p>
            <img className='image2cuy' src={Avaownercuy} alt="Avaownercuy"/>
            <p className='membercuy'>Member</p>
            <ul style={{marginLeft: '10px'}}>
            <li className='imagemembernicuy'><img src={Avamembercuy} alt="Avamembercuy"/></li>
            <li className='imagemembernicuy'><img src={Avamembercuy} alt="Avamembercuy"/></li>
            <li className='imagemembernicuy'><img src={Avamembercuy2} alt="Avamembercuy2"/></li>
            </ul>
            <p className='fotocuy'>Foto</p>
            <img className='fotosidekom' src={Fotosidekom} alt="Fotosidekom"/>
            <img className='fotosidekom2' src={Fotosidekom} alt="Fotosidekom"/>
            
            <p className='lokasicuy'>Lokasi</p>
            <img className='petadekom' src={Petadekom} alt="Petadekom"/>
        </div>
        </>
     );
}

export default MainDekom;