import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const preguntas = [
    {
        pregunta: "¿Cómo puedo agendar una cita?",
        respuesta: "Puedes agendar una cita desde nuestro formulario online o llamando al número (04) 645-1234.",
    },
    {
        pregunta: "¿Atienden emergencias 24 horas?",
        respuesta: "Sí, nuestro servicio de emergencias está disponible las 24 horas del día, todos los días del año.",
    },
    {
        pregunta: "¿Aceptan seguros médicos?",
        respuesta: "Sí, aceptamos la mayoría de seguros médicos nacionales. Puedes consultarnos si el tuyo está incluido.",
    },
    {
        pregunta: "¿Dónde están ubicados?",
        respuesta: "Nos encontramos en la ciudad de Sucre, en Calle Bolívar #123 (zona central).",
    },
    {
        pregunta: "¿Qué especialidades médicas ofrecen?",
        respuesta: "Ofrecemos más de 10 especialidades, incluyendo Cardiología, Pediatría, Neurología y más.",
    },
];
export default function Faq() {
    const [activa, setActiva] = useState(null);
    const toggle = (index) => {
        setActiva(activa === index ? null : index);
    };
    return (_jsxs("section", { id: "faq", className: "bg-gray-100 py-16 px-4", children: [_jsxs("div", { className: "max-w-4xl mx-auto text-center mb-10", children: [_jsx("h2", { className: "text-3xl font-bold text-blue-700 mb-4", children: "Preguntas Frecuentes" }), _jsx("p", { className: "text-gray-600", children: "Encuentra respuestas a las dudas m\u00E1s comunes sobre nuestros servicios y atenci\u00F3n m\u00E9dica." })] }), _jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: preguntas.map((item, index) => (_jsxs("div", { className: "bg-white rounded-md shadow", children: [_jsxs("button", { onClick: () => toggle(index), className: "w-full flex justify-between items-center text-left p-4 font-medium text-gray-800 hover:bg-blue-100 transition", children: [item.pregunta, _jsx("span", { children: activa === index ? "−" : "+" })] }), activa === index && (_jsx("div", { className: "px-4 pb-4 text-sm text-gray-600", children: item.respuesta }))] }, index))) })] }));
}
