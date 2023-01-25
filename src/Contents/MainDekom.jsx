import IMygy from "../Assets/IMygy.png";
import Avaownercuy from "../Assets/Avaownercuy.png";
import Avamembercuy1 from "../Assets/Avamembercuy1.png";
import Avamembercuy2 from "../Assets/Avamembercuy2.png";
import Avamembercuy3 from "../Assets/avamembercuy3.png";
import Avamembercuy4 from "../Assets/avamembercuy4.png";
import Avamembercuy5 from "../Assets/avamembercuy5.png";
import Avamembercuy6 from "../Assets/avamembercuy6.png";
import Avamembercuy7 from "../Assets/avamembercuy7.png";
import Avamembercuy8 from "../Assets/avamembercuy8.png";
import Avamembercuy9 from "../Assets/avamembercuy9.png";
import Avamembercuy10 from "../Assets/avamembercuy10.png";
import Avamembercuy11 from "../Assets/avamembercuy11.png";
import Avamembercuy12 from "../Assets/avamembercuy12.png";
import Avamembercuy13 from "../Assets/Avamembercuy13.png";
import Avamembercuy14 from "../Assets/avamembercuy14.png";
import Avamembercuy15 from "../Assets/avamembercuy15.png";
import Avamembercuy16 from "../Assets/avamembercuy16.png";
import fotokegiatan from "../Assets/kegiatankomunitas.png";
import fotokegiatan1 from "../Assets/fotokegiatan1.jpeg";
import fotokegiatan2 from "../Assets/fotokegiatan2.jpeg";
import fotokegiatan3 from "../Assets/fotokegiatan3.jpeg";
import fotokegiatan4 from "../Assets/fotokegiatan4.jpeg";
import fotokegiatan5 from "../Assets/fotokegiatan5.jpeg";
import { FcCalendar } from "react-icons/fc";
import { MdNavigateNext } from "react-icons/md";
import "../CSS/Dekom.css";
import "../CSS/Mobile/DekomMobile.css";
import { Link } from "react-router-dom";
import { KOMUNITAS, HOME } from "../router";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MainDekom = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
    });
  }, []);

  return (
    <>
      <ul className="linknavdekom">
        <Link style={{ color: "#009EFF", textDecoration: "none" }} to={HOME}>
          <li style={{ color: "#009EFF" }} className="linknavhome">
            {" "}
            Home{" "}
          </li>
        </Link>
        <MdNavigateNext style={{ color: "#dfdfdf" }} />
        <Link style={{ color: "black", textDecoration: "none" }} to={KOMUNITAS}>
          <li className="linknavdetail"> Komunitas </li>
        </Link>
        <MdNavigateNext style={{ color: "#dfdfdf" }} />
        <li className="linknavdetail"> Rumah Mengajar </li>
      </ul>
      <div className="maindekom">
        <div className="maindekomleft">
          <img
            data-aos="fade-up"
            className="imagekomunitasdetail"
            src={IMygy}
            alt="IMygy"
          />
          <div className="personalteamkomunitasdetail">
            <div className="ownerkomunitas">
              <p data-aos="fade-up" className="ownerkomunitasid">
                Owner
              </p>
              <img
                data-aos="fade-up"
                className="imageownerkomunitasid"
                src={Avaownercuy}
                alt="Avaownercuy"
              />
            </div>
            <div data-aos="fade-up" className="memberkomunitas">
              <p className="memberkomunitasid">Member</p>
              <div className="jajaranmember">
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy1}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy2}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy3}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy4}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy5}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy6}
                  alt="Avamembercuy"
                />
              </div>
              <div data-aos="fade-up" className="jajaranmember">
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy7}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy8}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy9}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy10}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy11}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy12}
                  alt="Avamembercuy"
                />
              </div>
              <div data-aos="fade-up" className="jajaranmember">
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy13}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy14}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy15}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy16}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy4}
                  alt="Avamembercuy"
                />
                <img
                  className="imageownerkomunitasid"
                  src={Avamembercuy8}
                  alt="Avamembercuy"
                />
              </div>
            </div>
            <div className="lokasikomunitas">
              <p data-aos="fade-up" className="lokasikomunitasid">
                Lokasi
              </p>
              <iframe
                data-aos="fade-up"
                style={{
                  width: "100%",
                  allowFullScreen: "",
                  loading: "lazy",
                  reffererPolicy: "no-referrer-when-downgrade",
                }}
                title="lokasimedan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254832.50415561642!2d98.52940335267581!3d3.6426183063634547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cc1c3eb2fd%3A0x23d431c8a6908262!2sMedan%2C%20Kota%20Medan%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1673717114211!5m2!1sid!2sid"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="maindekomright">
          <div className="maindekomrighttop">
            <p data-aos="fade-up" className="identifyjoin">
              Anda Sudah Bergabung
            </p>
            <p className="logoutkomunitas">keluar</p>
          </div>
          <p data-aos="fade-up" className="deskripsititlekomunitas">
            Description
          </p>
          <p data-aos="fade-up" className="deskripsidetailkomunitasdekom">
            Indonesia Mengajar merupakan sebuah lembaga nirlaba yang merekrut,
            melatih, dan mengirim generasi muda terbaik bangsa ke berbagai
            daerah di Indonesia untuk mengabdi sebagai Pengajar Muda di Sekolah
            Dasar dan masyarakat selama satu tahun.{" "}
          </p>
          <p data-aos="fade-up" className="kegiatankomunitasdetail">
            Kegiatan
          </p>
          <ul className="datekegiatan">
            <FcCalendar size={30} />
            <li data-aos="fade-up" className="tanggalkegiatankomunitas">
              16 Juli 2022
            </li>
            <li data-aos="fade-up" className="tanggalkegiatankomunitas">
              |
            </li>
            <li data-aos="fade-up" className="tanggalkegiatankomunitas">
              Tinjau Anak-anak di Kec. Bondowoso
            </li>
          </ul>
          <ul className="datekegiatan">
            <FcCalendar size={30} />
            <li data-aos="fade-up" className="tanggalkegiatankomunitas">
              16 Juli 2022
            </li>
            <li data-aos="fade-up" className="tanggalkegiatankomunitas">
              |
            </li>
            <li data-aos="fade-up" className="tanggalkegiatankomunitas">
              Tinjau Anak-anak di Kec. Bondowoso
            </li>
          </ul>
          <p data-aos="fade-up" className="fotokegiatantitle">
            Foto
          </p>
          <div className="fotokegiatandetail">
            <img
              data-aos="fade-up"
              className="fotokegiatandetailid"
              src={fotokegiatan}
              alt="Fotosidekom"
            />
            <img
              data-aos="fade-up"
              className="fotokegiatandetailid"
              src={fotokegiatan3}
              alt="Fotosidekom"
              // style={{ width: "220px",
              //   height: "200px" }}
            />
            <img
              data-aos="fade-up"
              className="fotokegiatandetailid"
              src={fotokegiatan2}
              alt="Fotosidekom"
            />
          </div>
          <div className="fotokegiatandetail">
            <img
              data-aos="fade-up"
              className="fotokegiatandetailid"
              src={fotokegiatan4}
              alt="Fotosidekom"
            />
            <img
              data-aos="fade-up"
              className="fotokegiatandetailid"
              src={fotokegiatan5}
              alt="Fotosidekom"
            />
            <img
              data-aos="fade-up"
              className="fotokegiatandetailid"
              src={fotokegiatan5}
              alt="Fotosidekom"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDekom;
