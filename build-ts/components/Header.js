import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Header.tsx
import NavMenu from "./NavMenu";
import Topbar from "./Topbar";
export default function Header() {
    return (_jsxs("header", { className: "sticky top-0 z-50 bg-white shadow", children: [_jsx(Topbar, {}), _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between px-6 py-4", children: [_jsx("h1", { className: "text-2xl text-[#1977cc] font-bold", children: "Hospital Santa B\u00E1rbara" }), _jsxs("div", { className: "hidden md:flex items-center gap-6", children: [_jsx("a", { href: "#inicio", className: "text-gray-700 hover:text-[#1977cc]", children: "Inicio" }), _jsx("a", { href: "#servicios", className: "text-gray-700 hover:text-[#1977cc]", children: "Servicios" }), _jsx("a", { href: "#departamentos", className: "text-gray-700 hover:text-[#1977cc]", children: "Departamentos" }), _jsx("a", { href: "#doctores", className: "text-gray-700 hover:text-[#1977cc]", children: "M\u00E9dicos" }), _jsx("a", { href: "#contacto", className: "text-gray-700 hover:text-[#1977cc]", children: "Contacto" }), _jsx("a", { href: "#cita", className: "bg-[#1977cc] text-white px-4 py-2 rounded-full hover:bg-[#166ab5] text-sm", children: "Reservar cita" })] }), _jsx("div", { className: "md:hidden", children: _jsx(NavMenu, {}) })] })] }));
}
