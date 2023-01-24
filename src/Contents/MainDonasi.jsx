import React from "react";
import image67 from "../Assets/orangdidonasi.png";
import image68 from "../Assets/Orangdilaporan.png";
import image69 from "../Assets/smile.png";
import "../CSS/Donasi.css";
import "../CSS/Mobile/DonasiMobile.css";
import iddonasi from "../Assets/iddonasiimg.png";
import { useNavigate, Link } from "react-router-dom";
import { PEMBAYARAN } from "../router";
// import MyButton from "../Components/Buttons";
// import PaymentForm from "../Components/Payment";
import { useState, useEffect } from "react";
// import DonasiHOC from "../Components/DonasiHOC";
import axios from "axios";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";

function MainDonasi() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
    });
  }, []);

  const [inputs, setInputs] = useState({
    jumlah: 0,
  });

  const [menuBank, setMenuBank] = useState("");

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (value) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/user-donasi`,
        value
      );
      console.log(data);
      if (data.Authorization) {
        localStorage.setItem(process.env.REACT_APP_AUTH, data.Authorization);
        navigate("/Donasi", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateDonasi = () => {
    setInputs((previousState) => {
      return { ...previousState, jumlah: 10000 };
    });
  };
  const updateDonasi2 = () => {
    setInputs((previousState) => {
      return { ...previousState, jumlah: 20000 };
    });
  };
  const updateDonasi3 = () => {
    setInputs((previousState) => {
      return { ...previousState, jumlah: 50000 };
    });
  };
  const updateDonasi4 = () => {
    setInputs((previousState) => {
      return { ...previousState, jumlah: 75000 };
    });
  };
  const updateDonasi5 = () => {
    setInputs((previousState) => {
      return { ...previousState, jumlah: 100000 };
    });
  };
  const updateDonasi6 = () => {
    setInputs((previousState) => {
      return { ...previousState, jumlah: 125000 };
    });
  };
  const updateDonasi7 = () => {
    setInputs((previousState) => {
      return { ...previousState, jumlah: 150000 };
    });
  };

  const handleText = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setMenuBank(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inputs);

  // };

  return (
    <>
      <div
        style={{
          borderStyle: "solid",
          height: "auto",
          borderColor: "transparent",
          backgroundColor: "#005C95",
        }}
      >
        <img src={iddonasi} alt="iddonasi" className="iddonasi" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tempatdonasi">
            <h1 className="text1">Donasi</h1>
            <h4 className="text2">Nominal</h4>
            <button onClick={updateDonasi} className="duit" type="button">
              10.000
            </button>
            <button
              onClick={updateDonasi2}
              className="duit"
              style={{ marginLeft: "90px", marginTop: "-52px" }}
              type="button"
            >
              20.000
            </button>
            <button
              onClick={updateDonasi3}
              className="duit"
              style={{ marginLeft: "180px", marginTop: "-52px" }}
              type="button"
            >
              50.000
            </button>
            <button
              onClick={updateDonasi4}
              className="duit"
              style={{ marginLeft: "270px", marginTop: "-52px" }}
              type="button"
            >
              75.000
            </button>
            <button onClick={updateDonasi5} className="duit" type="button">
              100.000
            </button>
            <button
              onClick={updateDonasi6}
              className="duit"
              style={{ marginLeft: "90px", marginTop: "-52px" }}
              type="button"
            >
              125.000
            </button>
            <button
              onClick={updateDonasi7}
              className="duit"
              style={{ marginLeft: "180px", marginTop: "-52px" }}
              type="button"
            >
              150.000
            </button>
            <h5
              name="donasi"
              className="text2"
              value={inputs.name}
              onChange={handleText}
            >
              {" "}
              Jumlah Donasi: {inputs.jumlah}
            </h5>
            <h1 className="textnama">Nama</h1>
            <input
              name="nama"
              type="text"
              className="inputiddonasi"
              {...register("fullname", { required: true })}
            />
            <h1 className="textemail">Email</h1>
            <input
              name="email"
              type="email"
              className="inputiddonasi"
              {...register("email", { required: true })}
            />
            <h1 className="textnomortelepon">Nomor Telepon</h1>
            <input
              name="phonenumber"
              type="text"
              className="inputiddonasi"
              {...register("phonenumber", { required: true })}
            />
            <h1 className="textmetodepembayaran">Metode Pembayaran</h1>
            <div className="bank">
              <select
                style={{ height: "30px" }}
                className="inputiddonasi"
                name="menu_bank"
                value={menuBank}
                onChange={handleChange}
              >
                <option value="">Pilih Pembayaran</option>
                <option value="Bank Syariah Indonesia (BSI)">
                  Bank Syariah Indonesia (BSI)
                </option>
                <option value="Bank Negara Indonesia (BNI)">
                  Bank Negara Indonesia (BNI)
                </option>
                <option value="Bank Rakyat Indonesia (BRI)">
                  Bank Rakyat Indonesia (BRI)
                </option>
                <option value="Bank Tabungan Negara (BTN)">
                  Bank Tabungan Negara (BTN)
                </option>
                <option value="Bank Central Asia (BCA)">
                  Bank Central Asia (BCA)
                </option>
                <option value="Bank Mandiri">Bank Mandiri</option>
                <option value="Bank Mega">Bank Mega</option>
              </select>
              {/* <PaymentForm/> */}
            </div>
            {/* <Link
              style={{ textDecoration: "none", color: "white", width: "100%" }}
              to="/payment"
            > */}
            <Link to={PEMBAYARAN}>
              <button type="submit" className="buttonproses">
                Proses
              </button>
            </Link>
            {/* </Link> */}
          </div>
        </form>
      </div>
      <div className="laporandet">
        <div className="laporantop">
          <div ata-aos="fade-up" className="textupdate">
            UPDATE PER NOVEMBER 2022
          </div>
          <div className="sublaporantop">
            <div className="sublaporantopdetail">
              <h1 ata-aos="fade-up" className="laporan">
                LAPORAN
              </h1>
              <h1 ata-aos="fade-up" className="textlaporan1">
                PEMASUKAN DAN PENGELUARAN DONASI YANG TERKUMPUL SEKARANG
              </h1>
              <h1 ata-aos="fade-up" className="textlaporan2">
                Terimakasih kami ucapkan kepada seluruh para donatur yang telah
                menitipkan sebagian hartanya untuk ikut berpartisipasi dalam
                memajukan pendidikan indonesia
              </h1>
            </div>
            <img className="image68" src={image68} alt="image68" />
          </div>
        </div>
        <div className="laporankeuangan">
          <div ata-aos="fade-up" className="laporankeuangandetail">
            <div className="bordertextuang">Total Pemasukan</div>
            <div className="bordernominaluang">3.500.000</div>
          </div>
          <div ata-aos="fade-up" className="laporankeuangandetail">
            <div className="bordertextuang">Total Pengeluaran</div>
            <div className="bordernominaluang">2.300.000</div>
          </div>
          <div ata-aos="fade-up" className="laporankeuangandetail">
            <div className="bordertextuang1">Saldo Akhir</div>
            <div className="bordernominaluang">1.200.000</div>
          </div>
        </div>
        <div ata-aos="fade-up" className="laporanbottom">
          <p className="textlaporan3">
            Dana yang kami terima, telah kami gunakan sebaik-baiknya untuk
            kegiatan yang sudah terlaksanakan seperti Rumah Pintar yang ada di
            setiap daerah.<br></br>
            <br></br>
            Semoga dengan adanya program Rumah Pintar dapat membantu anak-anak
            Indonesia untuk mendapatkan pendidikan yang seharusnya mereka
            dapatkan.
          </p>
          <p className="textlaporan5">TERIMAKASIH ORANG BAIK</p>
        </div>
      </div>
      <div className="donasibottom" style={{ width: "auto", height: "auto" }}>
        <img className="image67" src={image67} alt="image67" />
        <div className="donasibottomdetail">
          <div ata-aos="fade-up" className="donasibottomsubdetail">
            <p className="textdonasi">Donasi</p>
            <p className="textdonasi1">
              Kami membuka kesempatan kepada seluruh orang untuk ikut
              mengulurkan tangan memberi donasi untuk mendukung setiap kegiatan
              para komunitas dan volunteer yang bergabung dalam website kami
              dalam memajukan pendidikan anak-anak Indonesia<br></br>Transparan,
              Cepat dan Mudah.
            </p>
          </div>
          <img className="image69" src={image69} alt="image69" />
        </div>
      </div>
    </>
  );
}

export default MainDonasi;

// {/* <form>
//   <select className='listpembayaran' value={menu} onChange={handleChange}>
//     <option></option>
//     <option></option>
//   </select>
// </form> */}
