import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Nosotros from "../components/Nosotros";
import Departamentos from "../components/Departamentos";
import Cita from "../components/Cita";
import Doctores from "../components/Doctores";
import Contacto from "../components/Contacto";
import Faq from "../components/Faq";
import Testimonios from "../components/Testimonios";

export default function Inicio() {
  return (
    <>
      <Hero />
      {/* Aquí puedes agregar más secciones luego */}
      <Servicios />
      <Nosotros />
      <Departamentos />
      <Cita />
      <Doctores />
      <Contacto />
      <Faq />
      <Testimonios />
    </>
  );
}
