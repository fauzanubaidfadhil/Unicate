import Logo from "../Assets/logo.png";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";
import "../CSS/Privacy.css";
import { Link } from "react-router-dom";

const PrivacyPolicy =() =>{
    return(
        <HOC headreTitle="Privacy Policy">
            <Navigation />
            <div >
                <img style={{width: "20%", display:"block", margin:"1% auto", paddingTop:"30px"}} src={Logo} alt="logo" />
                <div className="mainprivacy" style={{ fontFamily: 'Poppins', fontStyle: "normal", width: "90%", margin:"3% auto", textAlign:"justify"}}>
                    <h3 style={{ fontWeight: "700", fontSize: "40px", lineHeight: "60px", }}>
                                Privacy Policy</h3>
                    <hr></hr>
                    <br></br>
                    <p className='detailprivacy' style={{ fontFamily: 'Calibri',
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "36px",
                                textAlign: "justify"}} >
                        Ada berbagai cara memanfaatkan layanan kami – untuk menelusuri informasi pendidikan yang ada di Indonesia, 
                        untuk berkomunikasi dengan orang lain dalam komunitas, atau untuk berbagi dengan cara berdonasi. 
                        Saat Anda berbagi informasi dengan kami, misalnya dengan membuat Akun, kami dapat menjadikan layanan tersebut lebih baik – 
                        menampilkan artikel yang lebih relevan, membantu Anda berhubungan dengan volunteer lain, atau lebih mempermudah aktivitas berbagi kepada anak-anak di Indonesia. 
                        Karena Anda menggunakan layanan kami, kami ingin Anda mengetahui dengan jelas cara kami menggunakan informasi dan cara yang dapat Anda lakukan untuk melindungi privasi Anda.
                        <br /> <br />
                        Kebijakan Privasi kami menjelaskan:
                        <ul>
                            <li>Informasi apa yang kami kumpulkan dan alasan kami mengumpulkannya.</li>
                            <li>Cara kami menggunakan informasi tersebut.</li>
                            <li>Pilihan yang kami tawarkan, termasuk cara mengakses dan memperbarui informasi.</li>
                        </ul>
                        <br />
                        Kami telah berusaha menjelaskannya sesederhana mungkin.
                        Kami sangat menghargai privasi Anda, jadi bila Anda baru menggunakan Website Unicate ataupun seorang pengguna lama, 
                        luangkan waktu untuk memahami praktik kami – dan jika ada pertanyaan, 
                        <Link style={{textDecoration:"none", color:"#009EFF"}} to="/Aboutus">
                        <span> hubungi kami</span>.
                        </Link>
                        </p>
                </div>
            </div>
            <Footer />
        </HOC>
    );
};

export default PrivacyPolicy;