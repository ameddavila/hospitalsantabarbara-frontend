import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("nav", { className: "hidden md:flex items-center gap-6 font-nav", children: [_jsx("div", { className: "md:hidden flex justify-end items-center", children: _jsx("button", { onClick: toggleMenu, className: "text-3xl text-blue-700 focus:outline-none", children: "\u2630" }) }), _jsx("ul", { className: `${open
                    ? "block absolute right-4 top-16 bg-white shadow-lg rounded-md p-4 z-50"
                    : "hidden"} md:flex md:static md:bg-transparent md:shadow-none md:p-0 md:gap-6`, children: menuItems.map((item) => (_jsx("li", { children: _jsx(Link, { to: item.to, onClick: closeMenu, className: "block py-2 md:py-0 text-gray-700 hover:text-blue-700 transition", children: item.label }) }, item.to))) })] }));
}
