import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const links = [
  { path: "/", label: "Inicio" },
  { path: "/servicios", label: "Servicios" },
  { path: "/departamentos", label: "Departamentos" },
  { path: "/doctores", label: "Médicos" },
  { path: "/contacto", label: "Contacto" },
];

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Cierra el menú al hacer scroll
  useEffect(() => {
    const closeOnScroll = () => setOpen(false);
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <div className="md:hidden relative z-50">
      {/* Botón de menú */}
      <button
        onClick={() => setOpen(!open)}
        className="text-[#1977cc] text-2xl focus:outline-none"
        aria-label="Abrir menú"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menú desplegable */}
      {open && (
        <div className="absolute top-12 right-0 bg-white border rounded-lg shadow-lg w-52 p-4 space-y-3 animate-fade-in">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigate(link.path)}
              className="block w-full text-left relative text-gray-700 hover:text-[#1977cc] transition-all
                before:content-[''] before:absolute before:-bottom-1 before:left-0
                before:w-0 before:h-[2px] before:bg-[#1977cc]
                before:transition-all before:duration-300 hover:before:w-full"
            >
              {link.label}
            </button>
          ))}

          <a
            href="#cita"
            className="block text-center bg-[#1977cc] text-white px-4 py-2 rounded-full text-sm hover:bg-[#166ab5] transition"
          >
            Reservar cita
          </a>
        </div>
      )}
    </div>
  );
}
