import Home from "./Pages/Home";
import Komunitas from "./Pages/Komunitas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HOME,
  KOMUNITAS,
  KOMBER,
  DEKOM,
  ARTIKEL,
  ABOUTUS,
  DONASI,
  AKSI,
  AKSIDETAIL,
  AKSIDETAIL2,
  PRIVACYPOLICY,
  TERMS_AND_CONDITION,
  KISAHINSPIRASI,
  DAFTAR,
  MASUK,
  FAQ,
  CONTACTUS,
  
} from "./router";
import Komber from "./Pages/Komber";
import Dekom from "./Pages/Dekom";
import Artikel from "./Pages/Artikel";
import AboutUs from "./Pages/AboutUs";
import Donasi from "./Pages/Donasi";
import Aksi from "./Pages/Aksi";
import AksiDetail from "./Pages/AksiDetail";
import AksiDetail2 from "./Pages/AksiDetail2";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndCondition from "./Pages/Terms_And_Condition";
import Kisahinspirasi from "./Pages/Kisahinspirasi";
import Daftar from "./Pages/Daftar";
import Masuk from "./Pages/Masuk";
import Profile from "./Pages/Profile";
import Faq from "./Pages/Faq";
import ContactUs from "./Pages/ContactUs";
import DetailArtikel from "./Pages/DetailArtikel";
import DetailArtikel2 from "./Pages/DetailArtikel2";
import DetailArtikel3 from "./Pages/DetailArtikel3";
import DetailArtikel4 from "./Pages/DetailArtikel4";
import Payment from "./Pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={KOMUNITAS} element={<Komunitas />} />
        <Route path={KOMBER} element={<Komber />} />
        <Route path={DEKOM} element={<Dekom />} />
        <Route path={ARTIKEL} element={<Artikel />} />
        <Route path={AKSI} element={<Aksi />} />
        <Route path={AKSIDETAIL} element={<AksiDetail/>} />
        <Route path={AKSIDETAIL2} element={<AksiDetail2/>} />
        <Route path={ABOUTUS} element={<AboutUs />} />
        <Route path={DONASI} element={<Donasi />} />
        <Route path={PRIVACYPOLICY} element={<PrivacyPolicy />} />
        <Route path={TERMS_AND_CONDITION} element={<TermsAndCondition />} />
        <Route path={KISAHINSPIRASI} element={<Kisahinspirasi />} />
        <Route path={DAFTAR} element={<Daftar />} />
        <Route path={MASUK} element={<Masuk />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/DetailArtikel" element={<DetailArtikel />} />
        <Route path="/DetailArtikel2" element={<DetailArtikel2 />} />
        <Route path="/DetailArtikel3" element={<DetailArtikel3 />} />
        <Route path="/DetailArtikel4" element={<DetailArtikel4 />} />
        <Route path={FAQ} element={<Faq />} />
        <Route path={CONTACTUS} element={<ContactUs />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
