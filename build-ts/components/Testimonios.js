import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Testimonios.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const testimonios = [
    {
        nombre: "María Fernández",
        cargo: "Paciente",
        imagen: "/assets/img/testimonials/testimonials-1.jpg",
        texto: "El personal médico fue muy atento y profesional. Me sentí acompañada en todo momento. ¡Gracias Hospital Santa Bárbara!",
    },
    {
        nombre: "Carlos Rojas",
        cargo: "Familiar de paciente",
        imagen: "/assets/img/testimonials/testimonials-2.jpg",
        texto: "La atención en emergencias fue rápida y eficiente. Sin duda, un hospital confiable.",
    },
    {
        nombre: "Lucía Gutiérrez",
        cargo: "Paciente pediátrico",
        imagen: "/assets/img/testimonials/testimonials-3.jpg",
        texto: "Me gustó mucho la forma en que explicaron todo a mis papás. El doctor fue muy amable conmigo.",
    },
];
export default function Testimonios() {
    return (_jsxs("section", { id: "testimonios", className: "bg-white py-16 px-4 font-default", children: [_jsxs("div", { className: "max-w-4xl mx-auto text-center mb-10", children: [_jsx("h2", { className: "text-3xl font-bold text-[#1977cc] mb-4 font-heading", children: "Testimonios" }), _jsx("p", { className: "text-gray-600", children: "Algunas experiencias compartidas por nuestros pacientes y familiares." })] }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx(Swiper, { modules: [Pagination, Autoplay], pagination: { clickable: true }, autoplay: { delay: 6000 }, loop: true, spaceBetween: 30, breakpoints: {
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                    }, children: testimonios.map((item, index) => (_jsx(SwiperSlide, { children: _jsxs("div", { className: "bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition h-full", children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx("img", { src: item.imagen, alt: item.nombre, className: "w-16 h-16 rounded-full object-cover" }), _jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold text-[#1977cc]", children: item.nombre }), _jsx("p", { className: "text-sm text-gray-500", children: item.cargo })] })] }), _jsx("p", { className: "text-sm text-gray-700 italic", children: item.texto })] }) }, index))) }) })] }));
}
