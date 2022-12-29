import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";
import img1 from "../assets/imgAbout1.png";
import img2 from "../assets/imgAbout2.png";
import img3 from "../assets/imgAbout3.png";
import img4 from "../assets/imgAbout4.png";
import img5 from "../assets/imgAbout5.png";


const About = () => {
  return (
    <>
      <Navs />
      <div className="about-banner d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-center flex-column">
          <div className="title-about">
            <h1>ABOUT</h1>
          </div>
          <div className="subtitle-about">
            <p>    Futura Space adalah Sebuah website yang membantu masyarakat
              menemukan tempat belajar fashiondesign untuk bisa menjadi
              seorang fashion designer dan dapat dipertemukan dengan mentor
              profesional yang tersebar di seluruh indonesia untuk konsultasi
              lebih lanjut  secara online maupun offline.</p>
          </div>
        </div>
      </div>
      <div className="our-team">
        <h1>Our Team</h1>
      </div>
      <div className="container" style={{marginBottom:"200px"}}>
        <div className="row">
          <div className="col-4">
            <div className="card-team1">
              <div className="title-team">
                <p>
                  Saya elang, asal dari surabaya, saya suka sekali dengan yang namanya ngoding. di team ini saya    bekerja sebagai hipster</p>
              </div>
            </div>
            <img src={img1} alt="" />
            <div className="card-team2">
              <div className="title-team">
                <h3>hipster</h3>
                <p>elang Samudera</p>
              </div>
            </div>
            <div className="card-team1">
              <div className="title-team">
                <p>
                  Saya arya, asal dari bekasi pride, saya suka sekali dengan yang namanya ngoding. di team ini saya bekerja sebagai coder</p>
              </div>
            </div>
            <img src={img3} alt="" />
            <div className="card-team2">
              <div className="title-team">
                <h3>hacker</h3>
                <p>arya</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <img src={img2} alt="" />
            <div className="card-team3">
              <div className="title-team">
                <h3>project manager</h3>
                <p>husnul khatimah</p>
              </div>
            </div>
            <img src={img4} alt="" />
            <div className="card-team3">
              <div className="title-team">
                <h3>hacker</h3>
                <p>andi</p>
              </div>
            </div>
          </div>
          <div className="col-4">
          <div className="card-team4">
              <div className="title-team">
                <p>
                Saya husnul, asal dari sulawesi, saya ingin menjadi presiden maka dari itu di team ini saya bekerja sebagai hipster</p>
              </div>
            </div>
            <div className="card-team5">
              <div className="title-team">
                <h3>project manager</h3>
                <p>husnul khatimah</p>
              </div>
            </div>
            <div className="card-team6">
              <div className="title-team">
                <p>
                Saya arya, asal dari bekasi pride, saya suka membuat design. di team ini saya bekerja sebagai hipster</p>
              </div>
            </div>
            <img src={img5} alt="" />
            <div className="card-team7">
              <div className="title-team">
                <h3>hipster</h3>
                <p>Dimas pamungkas mursidi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;