import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Departamentos from "./components/Departamentos";
import Doctores from "./components/Doctores";
import Nosotros from "./components/Nosotros";
import { useEffect } from "react";
import AOS from "aos";

export default function App() {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/departamentos" element={<Departamentos />} />
        <Route path="/doctores" element={<Doctores />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </>
  );
}
