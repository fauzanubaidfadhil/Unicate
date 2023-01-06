import Profile from "../Assets/adeliaprofil.png";
import "../CSS/Profile.css";

const MainDa = () => {
    return ( 
        <>
        <div className="posisi-mainda">
            <h3 className="textdetailakun">Detail Akun</h3>
            <img className="profile" src={Profile} alt="profil" /> 
            <button className="buttonunggah" type="submit">Unggah foto baru</button>
            <button className="buttonhapus" type="submit">Hapus</button>
            <div className="posisiusernameprofil">
                <p className="fontstyledataprofil">Username</p>
                <p className="fontstyleisidata">adelia</p>
            </div>
            <div className="posisinamaprofil">
                <p className="fontstyledataprofil">Nama</p>
                <p className="fontstyleisidata">Adelia</p>
            </div>
            <div className="posisialamatprofil">
                <p className="fontstyledataprofil">Alamat</p>
                <p className="fontstyleisidata">Jalan SM. Raja, Pematang Siantar, Sumatera Utara</p>
            </div>
            <div className="posisijeniskelaminprofil">
                <p className="fontstyledataprofil">Jenis Kelamin</p>
                <p className="fontstyleisidata">perempuan</p>
            </div>
            <div className="posisitgllahirprofil">
                <p className="fontstyledataprofil">Tanggal Lahir</p>
                <p className="fontstyleisidata">20/08/2022</p>
            </div>
            <div className="posisiemailprofil">
                <p className="fontstyledataprofil">Email</p>
                <p className="fontstyleisidata">ade***6@gmail.com</p>
            </div>
            <div className="posisiphoneprofil">
                <p className="fontstyledataprofil">No. Telephone</p>
                <p className="fontstyleisidata">+62 878-yang lain kapan-kapan</p>
            </div>
        </div>
        </>
     );
}
 
export default MainDa;