import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";
import Topbar from "./Topbar";

const sections = [
  { path: "/", label: "Inicio" },
  { path: "/servicios", label: "Servicios" },
  { path: "/departamentos", label: "Departamentos" },
  { path: "/doctores", label: "Médicos" },
  { path: "/contacto", label: "Contacto" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow font-default">
      <Topbar />

      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4">
        <h1 className="text-2xl text-[#1977cc] font-bold font-heading">
          Hospital Santa Bárbara
        </h1>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {sections.map(({ path, label }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`group relative transition text-gray-700 hover:text-[#1977cc] ${
                activePath === path ? "text-[#1977cc]" : ""
              }`}
            >
              {label}
              <span
                className={`block h-[2px] ${
                  activePath === path ? "w-full" : "w-0"
                } bg-[#1977cc] transition-all duration-300 group-hover:w-full`}
              ></span>
            </button>
          ))}

          <a
            href="#cita"
            className="ml-2 bg-[#1977cc] text-white px-4 py-2 rounded-full hover:bg-[#166ab5] transition text-sm"
          >
            Reservar cita
          </a>
        </nav>

        <div className="md:hidden">
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
