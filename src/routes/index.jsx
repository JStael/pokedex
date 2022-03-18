import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Agua from "../pages/Agua";
import Fogo from "../pages/Fogo";
import Planta from "../pages/Planta";
import Favoritos from "../pages/Favoritos";
import Pagina404 from "../pages/Pagina404";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/agua" element={<Agua />} />
        <Route exact path="/fogo" element={<Fogo />} />
        <Route exact path="/planta" element={<Planta />} />
        <Route exact path="/favoritos" element={<Favoritos />} />
        <Route exact path="*" element={<Pagina404 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
