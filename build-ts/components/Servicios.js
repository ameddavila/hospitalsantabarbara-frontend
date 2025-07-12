import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const servicios = [
    {
        icon: "fas fa-heartbeat",
        titulo: "Cardiología",
        descripcion: "Atención especializada en enfermedades del corazón con tecnología avanzada y profesionales altamente capacitados.",
    },
    {
        icon: "fas fa-pills",
        titulo: "Farmacia",
        descripcion: "Suministro de medicamentos con control y supervisión médica para un tratamiento seguro.",
    },
    {
        icon: "fas fa-hospital-user",
        titulo: "Emergencias",
        descripcion: "Servicio 24/7 para urgencias médicas con respuesta rápida y personal capacitado.",
    },
    {
        icon: "fas fa-dna",
        titulo: "Laboratorio clínico",
        descripcion: "Análisis clínicos precisos y confiables para diagnóstico y seguimiento médico.",
    },
    {
        icon: "fas fa-wheelchair",
        titulo: "Rehabilitación",
        descripcion: "Servicios de fisioterapia y rehabilitación para una recuperación integral.",
    },
    {
        icon: "fas fa-notes-medical",
        titulo: "Historia Clínica",
        descripcion: "Acceso a la información médica del paciente para continuidad de atención.",
    },
];
export default function Servicios() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);
    return (_jsx("section", { id: "services", className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", "data-aos": "fade-up", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-2", children: "Nuestros Servicios" }), _jsx("p", { className: "text-gray-600", children: "Brindamos atenci\u00F3n integral con calidad, calidez y tecnolog\u00EDa." })] }), _jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: servicios.map((servicio, index) => (_jsxs("div", { className: "relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:bg-primary hover:text-white shadow-md", "data-aos": "fade-up", "data-aos-delay": 100 * (index + 1), children: [_jsx("div", { className: "icon text-primary text-5xl mb-4 transition-all duration-300 group-hover:text-white", children: _jsx("i", { className: `${servicio.icon}` }) }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: servicio.titulo }), _jsx("p", { className: "text-sm leading-relaxed", children: servicio.descripcion })] }, index))) })] }) }));
}
