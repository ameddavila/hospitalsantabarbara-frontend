import { useState } from "react";

const preguntas = [
  {
    pregunta: "¿Cómo puedo agendar una cita?",
    respuesta:
      "Puedes agendar una cita desde nuestro formulario online o llamando al número (04) 645-1234.",
  },
  {
    pregunta: "¿Atienden emergencias 24 horas?",
    respuesta:
      "Sí, nuestro servicio de emergencias está disponible las 24 horas del día, todos los días del año.",
  },
  {
    pregunta: "¿Aceptan seguros médicos?",
    respuesta:
      "Sí, aceptamos la mayoría de seguros médicos nacionales. Puedes consultarnos si el tuyo está incluido.",
  },
  {
    pregunta: "¿Dónde están ubicados?",
    respuesta:
      "Nos encontramos en la ciudad de Sucre, en Calle Bolívar #123 (zona central).",
  },
  {
    pregunta: "¿Qué especialidades médicas ofrecen?",
    respuesta:
      "Ofrecemos más de 10 especialidades, incluyendo Cardiología, Pediatría, Neurología y más.",
  },
];

export default function Faq() {
  const [activa, setActiva] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiva(activa === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Preguntas Frecuentes</h2>
        <p className="text-gray-600">
          Encuentra respuestas a las dudas más comunes sobre nuestros servicios y atención médica.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {preguntas.map((item, index) => (
          <div key={index} className="bg-white rounded-md shadow">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left p-4 font-medium text-gray-800 hover:bg-blue-100 transition"
            >
              {item.pregunta}
              <span>{activa === index ? "−" : "+"}</span>
            </button>
            {activa === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">{item.respuesta}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
