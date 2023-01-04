import { useState } from "react";
import ReactDOM from "react-dom/client";
import Background from "../Assets/backgroundform.png";
import { FcGoogle } from "react-icons/fc";
import "../CSS/Daftar.css";
import "../CSS/Responsive/DekstopMainDaftar.css";

function MainDaftar() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div className="posisiform">
       <img
          style={{ height: "550px", position: "absolute" }}
          src={Background}
          alt="backgroundform"
        />
        <h2 className="textwelcome">WELCOME !</h2>
           <form onSubmit={handleSubmit}>
        <div className="posisiinput">
      <input className="inputdaftar" type="text" name="username" value={inputs.username} onChange={handleChange} placeholder="Username"/>
      <input className="inputdaftar" type="text" name="fullname" value={inputs.fullname} onChange={handleChange} placeholder="Full Name"/>
      <input className="inputdaftar" type="email" id="email" name="email" value={inputs.email} onChange={handleChange} placeholder="Email"/>
      <input className="inputdaftar" type="password" id="password" name="password" value={inputs.password} onChange={handleChange} placeholder="Password"/>
         </div>
         <button className="buttondaftar" type="submit">
          DARTAR
        </button>
      <p className="textor posisitextdaftar">or</p>
        <p className="textsudah posisitextdaftar">Sudah mempunyai akun?<span style={{ color: "#009EFF" }}>Masuk sekarang</span></p>
        <button className="buttongoogle" type="button" onClick="">
          <FcGoogle size={25} />
          Masuk dengan google
        </button>
    </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainDaftar />);

export default MainDaftar;