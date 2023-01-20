import "../CSS/Profile.css";
import {BsPersonCircle} from "react-icons/bs";

const MainDa = () => {
    return ( 
        <>
        <div className="posisi-mainda">
            <h3 className="textdetailakun">Detail Akun</h3>
           <BsPersonCircle style={{position:"absolute", marginLeft:"12px"}} size={120} />
            <button className="buttonunggah" type="submit">Unggah foto baru</button>
            <button className="buttonhapus" type="submit">Hapus</button>
            <div className="posisiusernameprofil">
                <p className="fontstyledataprofil">Nama</p>
                <input className="input-profil" type="text" placeholder="Your Name" />
            </div>
            <div className="posisinamaprofil">
                <p className="fontstyledataprofil">Jenis Kelamin</p>
                <input className="input-profil" type="text" placeholder="Your Gender" />
            </div>
            <div className="posisialamatprofil">
                <p className="fontstyledataprofil">Email</p>
                <input className="input-profil" type="email" placeholder="Your Email" />
            </div>
            <div className="posisijeniskelaminprofil">
                <p className="fontstyledataprofil">No Telephone</p>
                <input className="input-profil" type="phonenumber" placeholder="Your Phonenumber" />
            </div>
            <button className="btn-save-profil" type="submit">Simpan</button>
        </div>
        </>
     );
}
 
export default MainDa;