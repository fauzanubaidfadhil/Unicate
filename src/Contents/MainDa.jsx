import "../CSS/Profile.css";
import { BsPersonCircle } from "react-icons/bs";
// import { useRef, useEffect } from "react";
// import jwtDecode from "jwt-decode";

// const usernameLength = (name) => {
//     let convertName = name;

//     if (convertName.length > 7) {
//         convertName = convertName.substr(0, 7) + "...";
//     }
//     return convertName;
// };

// const validateToken = () => {
//     const tokenExists = localStorage.getItem(process.env.REACT_APP_AUTH);
//     if (tokenExists !== null) {
//         const token = tokenExists.split(" ") [1];
//         const { fullname } = jwtDecode(token);
//         const isLogin = token === undefined ? false : true;
//         return {
//             isLogin,
//             fullname,
//         };
//     }
//     return {
//         isLogin: false,
//         username:" ",
//     };
// };

const MainDa = () => {
  // const { isLogin, fullname, } = validateToken();
  // const navRef = useRef({
  //     isLogin,
  //     fullname,
  // });

  return (
    <>
      <div className="posisi-mainda">
        <h3 className="textdetailakun">Detail Akun </h3>
        <BsPersonCircle
          style={{ position: "absolute", marginLeft: "12px" }}
          size={120}
        />
        <button className="buttonunggah" type="submit">
          Unggah foto baru
        </button>
        <button className="buttonhapus" type="submit">
          Hapus
        </button>
        <div className="posisiusernameprofil">
          <p className="fontstyledataprofil">Nama</p>
          <input className="input-profil" type="text" placeholder="Fauzan" />
        </div>
        <div className="posisinamaprofil">
          <p className="fontstyledataprofil">Jenis Kelamin</p>
          <input
            className="input-profil"
            type="text"
            placeholder="Your Gender"
          />
        </div>
        <div className="posisialamatprofil">
          <p className="fontstyledataprofil">Email</p>
          <input
            className="input-profil"
            type="email"
            placeholder="fauzan@gmail.com"
          />
        </div>
        <div className="posisijeniskelaminprofil">
          <p className="fontstyledataprofil">No Telephone</p>
          <input
            className="input-profil"
            type="phonenumber"
            placeholder="085155120881"
          />
        </div>
        <button className="btn-save-profil" type="submit">
          Simpan
        </button>
      </div>
    </>
  );
};

export default MainDa;
