import img1 from "../Assets/img_komunitas1.png";
import img2 from "../Assets/img_komunitas2.png";
import img3 from "../Assets/profil_komunitas.png";
import "../CSS/Komunitas.css";

const MainKomunitas = () => {
  return (
    <>
      <section>
        {/* konten komunitas */}
        <div>
          <img
            style={{ width: "100%", height: "413px", position: "absolute" }}
            src={img1}
            alt="img_komunitas1"
          />
          <h1
            style={{
              position: "absolute",
              color: "white",
              width: "917px",
              height: "120px",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "40px",
              lineHeight: "149.5%",
              textAlign: "center",
              left: "13.5%",
              top: "18%",
            }}
          >
            Temukan Komunitas & Bergabunglah Dalam Gerakan Memajukan Pendidikan
            Indonesia
          </h1>
          <p
            style={{
              position: "absolute",
              color: "white",
              width: "827px",
              height: "1z0px",
              textAlign: "center",
              left: "17%",
              top: "43%",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "149.5%",
            }}
          >
            Kami menyediakan wadah para volunteer dan juga masyarakat yang ingin
            bergabung bersatu dalam menggalang aksi untuk pendidikan anak
            Indonesia
          </p>
          {/* konten komunitas */}

          {/* konten 2 komunitas*/}
          <div
            style={{
              position: "absolute",
              width: "99.5%",
              height: "687.03px",
              top: "74.5%",
              borderStyle:"solid",
            }}
          >
            <img
              style={{
                position: "absolute",
                width: "669px",
                height: "553.03px",
                top: "8%",
                left: "5%",
              }}
              src={img2}
              alt="img_komunitas2"
            />
            <div
              style={{
                position: "absolute",
                width: "425px",
                height: "366px",
                left: "65%",
                top: "20%",
              }}
            >
              <p className="text-1-komunitas">Support Education</p>
              <h1 className="text-2-komunitas">Fitur Komunitas</h1>
              <p className="text-3-komunitas">
                Kami menyediakan fitur komunitas untuk menggaet para volunteer
                di Indonesia yang ingin ikut dalam menggerakkan perjuangan
                maupun membantu anak-anak yang kurang mendapat pendidikan.
                Selain itu, komunitas juga bisa membuat antar sesama volunteer
                saling berkenalan dan berinteraksi.
              </p>
              <h1 className="text-4-komunitas font-100-80-90-komunitas">
                100+
              </h1>
              <p className="text-5-komunitas ">Volunteer</p>
              <h1 className="text-6-komunitas font-100-80-90-komunitas">
                80k+
              </h1>
              <p className="text-7-komunitas">Anak-anak terbantu</p>
              <h1 className="text-8-komunitas font-100-80-90-komunitas">90</h1>
              <p className="text-9-komunitas">Komunitas</p>
            </div>
          </div>
          <div
            style={{
              borderStyle: "solid",
              borderRadius: "8px",
              width: "296px",
              height: "608px",
              position: "absolute",
              top: "210%",
              left: "5%",
            }}
          >
            <h3 style={{ marginLeft: "25px" }}>Komunitas Terbaru</h3>
            <div
              style={{ borderStyle: "solid", height: "100px", width:"256px",display: "flex", marginLeft: "17px" }}
            >
              <img
                style={{ height: "50px", width: "50px" }}
                src={img3}
                alt="profil_komunitas"
              />
              <p>Bumi Langit</p>
              <p style={{marginTop:"50px"}}>50 member</p>
              <p>20 post</p>
            </div>
          </div>
          {/* kontent 2 komunitas */}
        </div>
      </section>
    </>
  );
};

export default MainKomunitas;
