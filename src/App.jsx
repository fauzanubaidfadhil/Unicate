import Home from "./Pages/Home";
import Komunitas from "./Pages/Komunitas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HOME, BERANDA, KOMUNITAS, KOMBER} from './router';
import Beranda from "./Pages/Beranda";
import Komber from "./Pages/Komber";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={BERANDA} element={<Beranda />} />
          <Route path={KOMUNITAS} element={<Komunitas />} />
          <Route path={KOMBER} element={<Komber />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
