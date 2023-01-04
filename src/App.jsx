import Home from "./Pages/Home";
import Komunitas from "./Pages/Komunitas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HOME, BERANDA, KOMUNITAS, KOMBER, ABOUTUS, DONASI, AKSI,AKSI_NAVLOGIN, PRIVACYPOLICY, TERMS_AND_CONDITION, 
  KISAHINSPIRASI, DAFTAR} from './router';
import Beranda from "./Pages/Beranda";
import Komber from "./Pages/Komber";
import AboutUs from "./Pages/AboutUs";
import Donasi from "./Pages/Donasi";
import Aksi from "./Pages/Aksi"; 
import Aksi_NavLogin from "./Pages/Aksi_NavLogin"; 
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndCondition from "./Pages/Terms_And_Condition";
import Kisahinspirasi from "./Pages/Kisahinspirasi";
import Daftar from "./Pages/Daftar";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={BERANDA} element={<Beranda />} />
          <Route path={KOMUNITAS} element={<Komunitas />} />
          <Route path={KOMBER} element={<Komber />} />
          <Route path={AKSI} element={<Aksi/>} />
          <Route path={AKSI_NAVLOGIN} element={<Aksi_NavLogin />} />
          <Route path={ABOUTUS} element={<AboutUs />} />
          <Route path={DONASI} element={<Donasi />} />
          <Route path={PRIVACYPOLICY} element={<PrivacyPolicy />} />
          <Route path={TERMS_AND_CONDITION} element={<TermsAndCondition />} />
          <Route path={KISAHINSPIRASI} element={<Kisahinspirasi />} />
          <Route path={DAFTAR} element={<Daftar />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
