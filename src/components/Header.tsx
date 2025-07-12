// src/components/Header.tsx
import NavMenu from "./NavMenu";
import Topbar from "./Topbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      {/* Topbar */}
      <Topbar />

      {/* Main Nav */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4">
        <h1 className="text-2xl text-[#1977cc] font-bold">Hospital Santa Bárbara</h1>
        <div className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="text-gray-700 hover:text-[#1977cc]">Inicio</a>
          <a href="#servicios" className="text-gray-700 hover:text-[#1977cc]">Servicios</a>
          <a href="#departamentos" className="text-gray-700 hover:text-[#1977cc]">Departamentos</a>
          <a href="#doctores" className="text-gray-700 hover:text-[#1977cc]">Médicos</a>
          <a href="#contacto" className="text-gray-700 hover:text-[#1977cc]">Contacto</a>
          <a
            href="#cita"
            className="bg-[#1977cc] text-white px-4 py-2 rounded-full hover:bg-[#166ab5] text-sm"
          >
            Reservar cita
          </a>
        </div>
        {/* Menú móvil */}
        <div className="md:hidden">
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
