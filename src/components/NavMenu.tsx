import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const menuItems = [
    { to: "/", label: "Inicio" },
    { to: "/servicios", label: "Servicios" },
    { to: "/departamentos", label: "Departamentos" },
    { to: "/doctores", label: "Médicos" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="hidden md:flex items-center gap-6 font-nav">
      <div className="md:hidden flex justify-end items-center">
        <button
          onClick={toggleMenu}
          className="text-3xl text-blue-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      <ul
        className={`${
          open
            ? "block absolute right-4 top-16 bg-white shadow-lg rounded-md p-4 z-50"
            : "hidden"
        } md:flex md:static md:bg-transparent md:shadow-none md:p-0 md:gap-6`}
      >
        {menuItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              onClick={closeMenu}
              className="block py-2 md:py-0 text-gray-700 hover:text-blue-700 transition"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
