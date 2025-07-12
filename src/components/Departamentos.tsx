import { useState } from "react";
import useAOS from "../hooks/useAOS";

const departamentos = [
  {
    id: "cardiologia",
    nombre: "Cardiología",
    imagen: "/assets/img/departments-1.jpg",
    subtitulo: "Especialistas en enfermedades del corazón",
    descripcion:
      "Ofrecemos atención integral en diagnóstico, tratamiento y prevención de enfermedades cardiovasculares. Contamos con tecnología de punta y un equipo multidisciplinario.",
  },
  {
    id: "neurologia",
    nombre: "Neurología",
    imagen: "/assets/img/departments-2.jpg",
    subtitulo: "Trastornos neurológicos y del sistema nervioso",
    descripcion:
      "Brindamos diagnóstico y tratamiento para epilepsia, Parkinson, migrañas, esclerosis y otras enfermedades neurológicas.",
  },
  {
    id: "pediatria",
    nombre: "Pediatría",
    imagen: "/assets/img/departments-4.jpg",
    subtitulo: "Cuidamos de los más pequeños",
    descripcion:
      "Atención médica especializada para bebés, niños y adolescentes, con enfoque en crecimiento, vacunas y prevención.",
  },
  {
    id: "oftalmologia",
    nombre: "Oftalmología",
    imagen: "/assets/img/departments-5.jpg",
    subtitulo: "Salud visual y tratamientos oculares",
    descripcion:
      "Evaluaciones, cirugías oculares y tratamientos para cataratas, miopía, glaucoma y más.",
  },
];

export default function Departamentos() {
  const [activo, setActivo] = useState("cardiologia");
  const depto = departamentos.find((d) => d.id === activo)!;

  useAOS();

  return (
    <section id="departamentos" className="bg-gray-50 py-16 px-4 font-default">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold text-center text-[#1977cc] mb-4 font-heading"
          data-aos="fade-up"
        >
          Departamentos
        </h2>
        <p
          className="text-center text-gray-600 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Áreas especializadas al servicio de tu salud
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs laterales */}
          <div className="flex lg:flex-col gap-2 lg:w-1/4" data-aos="fade-right">
            {departamentos.map((d) => (
              <button
                key={d.id}
                onClick={() => setActivo(d.id)}
                className={`py-3 px-4 text-left rounded border text-sm font-medium transition ${
                  activo === d.id
                    ? "bg-[#1977cc] text-white shadow"
                    : "bg-white text-gray-700 hover:bg-blue-100"
                }`}
              >
                {d.nombre}
              </button>
            ))}
          </div>

          {/* Contenido dinámico */}
          <div className="flex-1 grid md:grid-cols-2 gap-8 items-center">
            <div data-aos="zoom-in">
              <img
                src={depto.imagen}
                alt={depto.nombre}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div data-aos="fade-left" data-aos-delay="100">
              <h3 className="text-2xl font-semibold text-[#1977cc] mb-2">
                {depto.nombre}
              </h3>
              <p className="italic text-gray-600 mb-3">{depto.subtitulo}</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {depto.descripcion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
