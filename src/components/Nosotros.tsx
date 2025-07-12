import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaVial, FaPumpMedical, FaHeart } from "react-icons/fa6";

export default function Nosotros() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section id="nosotros" className="bg-white py-16 px-4 font-default">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Imagen + video */}
        <div className="relative" data-aos="zoom-in">
          <img
            src="/assets/img/about.jpg"
            alt="Sobre el hospital"
            className="rounded-lg shadow-lg w-full"
          />
          <a
            href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="bg-[#1977cc] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform transform group-hover:scale-110">
              ▶
            </div>
          </a>
        </div>

        {/* Contenido textual */}
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold text-[#1977cc] mb-4 font-heading">
            Sobre Nosotros
          </h2>
          <p className="text-gray-700 mb-6">
            En el Hospital Santa Bárbara nos dedicamos a brindar atención médica
            integral y humana. Contamos con personal especializado,
            infraestructura moderna y un compromiso firme con la salud de
            nuestra comunidad.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <FaVial className="text-[#1977cc] text-xl mt-1" />
              <div>
                <h5 className="font-semibold text-gray-800">
                  Laboratorio clínico confiable
                </h5>
                <p className="text-gray-600 text-sm">
                  Resultados precisos para diagnósticos certeros.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaPumpMedical className="text-[#1977cc] text-xl mt-1" />
              <div>
                <h5 className="font-semibold text-gray-800">
                  Tecnología de vanguardia
                </h5>
                <p className="text-gray-600 text-sm">
                  Equipamiento moderno para una mejor atención.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaHeart className="text-[#1977cc] text-xl mt-1" />
              <div>
                <h5 className="font-semibold text-gray-800">
                  Atención humanizada
                </h5>
                <p className="text-gray-600 text-sm">
                  Nos enfocamos en el bienestar físico y emocional del paciente.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
