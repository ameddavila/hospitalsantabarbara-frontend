import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Inicio, {}) }), _jsx(Route, { path: "/servicios", element: _jsx(Servicios, {}) }), _jsx(Route, { path: "/departamentos", element: _jsx(Departamentos, {}) }), _jsx(Route, { path: "/doctores", element: _jsx(Doctores, {}) }), _jsx(Route, { path: "/contacto", element: _jsx(Contacto, {}) }), _jsx(Route, { path: "/nosotros", element: _jsx(Nosotros, {}) })] }), _jsx(Footer, {})] }));
}
