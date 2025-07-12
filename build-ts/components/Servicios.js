import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Servicios() {
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
            descripcion: "Análisis y estudios clínicos de apoyo diagnóstico con resultados confiables.",
        },
        {
            icon: "fas fa-wheelchair",
            titulo: "Rehabilitación",
            descripcion: "Terapias físicas y ocupacionales personalizadas para recuperación y movilidad.",
        },
        {
            icon: "fas fa-notes-medical",
            titulo: "Consulta externa",
            descripcion: "Diversas especialidades para atención médica ambulatoria y diagnósticos tempranos.",
        },
    ];
    return (_jsxs("section", { id: "servicios", className: "bg-white py-16 px-4 font-default", children: [_jsxs("div", { className: "max-w-7xl mx-auto text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-[#1977cc] mb-4 font-heading", children: "Nuestros Servicios" }), _jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Conoce los servicios que ofrecemos para cuidar tu salud y bienestar." })] }), _jsx("div", { className: "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: servicios.map((servicio, index) => (_jsxs("div", { className: "bg-gray-50 border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition text-center", "data-aos": "fade-up", "data-aos-delay": index * 100, children: [_jsx("div", { className: "text-[#1977cc] text-5xl mb-4", children: _jsx("i", { className: servicio.icon }) }), _jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-2", children: servicio.titulo }), _jsx("p", { className: "text-gray-600 text-sm", children: servicio.descripcion })] }, index))) })] }));
}
