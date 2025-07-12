import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Inicio from "../pages/Inicio";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";
import Departamentos from "../components/Departamentos";
import Doctores from "../components/Doctores";
import Nosotros from "../components/Nosotros";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AnimatedRoutes() {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });

    const timeout = setTimeout(() => {
      AOS.refreshHard(); // refresco fuerte
      setKey((prev) => prev + 1); // forzar remount
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]); // ← importante

  return (
    <div key={key}>
      <Routes location={location}>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/departamentos" element={<Departamentos />} />
        <Route path="/doctores" element={<Doctores />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </div>
  );
}
