import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, } from "react-icons/fa";
const doctores = [
    {
        nombre: "Dr. Luis Pérez",
        especialidad: "Cardiólogo",
        descripcion: "Especialista en enfermedades cardiovasculares y cuidados intensivos.",
        imagen: "/assets/img/doctors/doctors-1.jpg",
        redes: {
            facebook: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        nombre: "Dra. Ana López",
        especialidad: "Pediatra",
        descripcion: "Atención integral a niños, desde recién nacidos hasta adolescentes.",
        imagen: "/assets/img/doctors/doctors-2.jpg",
        redes: {
            facebook: "#",
            instagram: "#",
        },
    },
    {
        nombre: "Dr. Mario García",
        especialidad: "Neurólogo",
        descripcion: "Diagnóstico y tratamiento de trastornos del sistema nervioso.",
        imagen: "/assets/img/doctors/doctors-3.jpg",
        redes: {
            linkedin: "#",
        },
    },
    {
        nombre: "Dra. Sofía Ramírez",
        especialidad: "Oftalmóloga",
        descripcion: "Cirugía ocular y tratamientos para visión y salud visual.",
        imagen: "/assets/img/doctors/doctors-4.jpg",
        redes: {
            facebook: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
];
export default function Doctores() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);
    return (_jsx("section", { id: "doctores", className: "bg-gray-50 py-16 px-4 font-default", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-bold text-center text-[#1977cc] mb-4 font-heading", "data-aos": "fade-up", children: "Nuestros Profesionales" }), _jsx("p", { className: "text-center text-gray-600 mb-10", "data-aos": "fade-up", "data-aos-delay": "100", children: "Conoce a parte del equipo m\u00E9dico que conforma el Hospital Santa B\u00E1rbara." }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: doctores.map((doc, index) => (_jsxs("div", { "data-aos": "zoom-in", "data-aos-delay": index * 100, className: "bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition", children: [_jsx("img", { src: doc.imagen, alt: doc.nombre, className: "w-32 h-32 rounded-full mx-auto mb-4 object-cover" }), _jsx("h4", { className: "text-xl font-semibold text-[#1977cc] mb-1", children: doc.nombre }), _jsx("p", { className: "text-gray-500 text-sm mb-2", children: doc.especialidad }), _jsx("p", { className: "text-sm text-gray-600", children: doc.descripcion }), _jsxs("div", { className: "flex justify-center gap-4 mt-4 text-[#1977cc] text-lg", children: [doc.redes.facebook && (_jsx("a", { href: doc.redes.facebook, "aria-label": "Facebook", target: "_blank", rel: "noreferrer", className: "hover:text-blue-900 transition", children: _jsx(FaFacebookF, {}) })), doc.redes.instagram && (_jsx("a", { href: doc.redes.instagram, "aria-label": "Instagram", target: "_blank", rel: "noreferrer", className: "hover:text-blue-900 transition", children: _jsx(FaInstagram, {}) })), doc.redes.linkedin && (_jsx("a", { href: doc.redes.linkedin, "aria-label": "LinkedIn", target: "_blank", rel: "noreferrer", className: "hover:text-blue-900 transition", children: _jsx(FaLinkedinIn, {}) }))] })] }, index))) })] }) }));
}
