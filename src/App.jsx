import Home from "./Pages/Home";
import Komunitas from "./Pages/Komunitas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HOME, BERANDA, KOMUNITAS} from './router';
import Beranda from "./Pages/Beranda";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={BERANDA} element={<Beranda />} />
          <Route path={KOMUNITAS} element={<Komunitas />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
