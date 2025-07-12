import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

interface Doctor {
  nombre: string;
  especialidad: string;
  descripcion: string;
  imagen: string;
  redes: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const doctores: Doctor[] = [
  {
    nombre: "Dr. Luis Pérez",
    especialidad: "Cardiólogo",
    descripcion:
      "Especialista en enfermedades cardiovasculares y cuidados intensivos.",
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
    descripcion:
      "Atención integral a niños, desde recién nacidos hasta adolescentes.",
    imagen: "/assets/img/doctors/doctors-2.jpg",
    redes: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    nombre: "Dr. Mario García",
    especialidad: "Neurólogo",
    descripcion:
      "Diagnóstico y tratamiento de trastornos del sistema nervioso.",
    imagen: "/assets/img/doctors/doctors-3.jpg",
    redes: {
      linkedin: "#",
    },
  },
  {
    nombre: "Dra. Sofía Ramírez",
    especialidad: "Oftalmóloga",
    descripcion:
      "Cirugía ocular y tratamientos para visión y salud visual.",
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

  return (
    <section id="doctores" className="bg-gray-50 py-16 px-4 font-default">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold text-center text-[#1977cc] mb-4 font-heading"
          data-aos="fade-up"
        >
          Nuestros Profesionales
        </h2>
        <p
          className="text-center text-gray-600 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Conoce a parte del equipo médico que conforma el Hospital Santa Bárbara.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctores.map((doc, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={doc.imagen}
                alt={doc.nombre}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-[#1977cc] mb-1">
                {doc.nombre}
              </h4>
              <p className="text-gray-500 text-sm mb-2">{doc.especialidad}</p>
              <p className="text-sm text-gray-600">{doc.descripcion}</p>

              <div className="flex justify-center gap-4 mt-4 text-[#1977cc] text-lg">
                {doc.redes.facebook && (
                  <a
                    href={doc.redes.facebook}
                    aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-900 transition"
                  >
                    <FaFacebookF />
                  </a>
                )}
                {doc.redes.instagram && (
                  <a
                    href={doc.redes.instagram}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-900 transition"
                  >
                    <FaInstagram />
                  </a>
                )}
                {doc.redes.linkedin && (
                  <a
                    href={doc.redes.linkedin}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-900 transition"
                  >
                    <FaLinkedinIn />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
