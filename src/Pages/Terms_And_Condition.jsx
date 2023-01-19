import Logo from "../Assets/logo.png";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";
import "../CSS/Terms.css"
import { Link } from "react-router-dom";

const TermsAndCondition =() =>{
    return(
        <HOC headreTitle="Terms & Condition">
            <Navigation />
            <div >
                <img style={{width: "20%", display:"block", margin:"1% auto", paddingTop:"30px"}} src={Logo} alt="logo" />
                <div className="mainterms" style={{ fontFamily: 'Poppins', fontStyle: "normal", width: "90%", display:"block",  textAlign:"justify", margin:"3% auto"}}>
                    <h3 style={{ fontWeight: "700", fontSize: "40px", 
                                    }}>
                                Terms & Condition</h3>
                    <hr></hr>
                    <br></br>
                    <p className="detailtermscondition" style={{ fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px"}} >
                    Saat mengunjungi dan menggunakan situs ini, termasuk setiap fitur dan layanannya, 
                    Setiap Pengguna wajib untuk mematuhi ketentuan Pengguna Situs berikut ini:
                    <br /> <br />
                    <ol>
                        <li>Pengguna minimum berusia 19 tahun sampai 50 tahun.</li>
                        <li>Setiap Pengguna sepakat untuk tidak menyalin, menggunakan atau mengunduh semua informasi, tulisan, gambar, dokumen, database yang ada di situs 
                        <Link style={{textDecoration:"none", color:"#009EFF"}} to="/">
                        <span> www.unicate.com</span>
                        </Link></li>
                        <li>Saat mengunjungi dan menggunakan situs 
                            <Link style={{textDecoration:"none", color:"#009EFF"}} to="/">
                            <span> www.unicate.com</span>
                            </Link>
                             , termasuk setiap fitur dan layanannya, Setiap Pengguna tidak perkenankan untuk :
                            <br />
                            <ul>
                                <li>memberikan informasi dan konten yang salah, tidak akurat, bersifat menyesatkan, bersifat memfitnah, bersifat asusila, mengandung pornografi, bersifat diskriminasi atau rasis.</li>
                                <li>mengambil tindakan yang dapat mengacaukan sistem saran atau masukan dan atau peringkat (seperti menampilkan, mengimpor atau mengekspor informasi atau masukan dari situs luar atau menggunakannya untuk tujuan yang tidak terkait dengan situs 
                                    <Link style={{textDecoration:"none", color:"#009EFF"}} to="/">
                                    <span> www.unicate.com</span>
                                    </Link>
                                    ).</li>
                            </ul>
                        </li>
                        <li>Akses situs ini hanya diperkenankan untuk keperluan dan kepentingan user dan informasi terkait dengan layanan situs ini.</li>
                    </ol>
                    </p>

                    
                </div>
            </div>
           
            <Footer />
            
        </HOC>
    );
};

export default TermsAndCondition;