import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaClipboardList, FaGem, FaFlask } from "react-icons/fa";

export default function Hero() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section
      id="inicio"
      className="relative bg-[url('/assets/img/hero-bg.jpg')] bg-cover bg-center bg-no-repeat py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Parte izquierda */}
        <div className="space-y-8" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight font-heading">
            Hospital <span className="text-[#1977cc]">Santa Bárbara</span>
          </h1>
          <p className="text-lg text-gray-600">
            Somos un equipo de profesionales comprometidos con tu salud.
            Nuestra misión es brindar atención médica humana y de calidad.
          </p>

          {/* Caja azul */}
          <div className="bg-[#1977cc] text-white rounded-lg p-6 shadow-md max-w-xl">
            <h3 className="text-2xl font-bold mb-3">¿Por qué elegirnos?</h3>
            <p className="text-sm leading-relaxed mb-4">
              Brindamos atención oportuna, cálida y especializada. Nuestro
              hospital cuenta con tecnología de vanguardia y personal médico
              altamente calificado para garantizar tu bienestar.
            </p>
            <a
              href="#nosotros"
              className="inline-block text-sm bg-white text-[#1977cc] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Conócenos →
            </a>
          </div>
        </div>

        {/* Parte derecha */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3" data-aos="fade-left">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg shadow text-center">
            <FaClipboardList className="text-[#1977cc] text-3xl mx-auto mb-3" />
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Atención integral
            </h4>
            <p className="text-sm text-gray-600">
              Diagnóstico, prevención y tratamiento desde la primera consulta.
            </p>
          </div>

          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg shadow text-center">
            <FaGem className="text-[#1977cc] text-3xl mx-auto mb-3" />
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Profesionales de calidad
            </h4>
            <p className="text-sm text-gray-600">
              Nuestro equipo médico está conformado por especialistas certificados.
            </p>
          </div>

          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg shadow text-center">
            <FaFlask className="text-[#1977cc] text-3xl mx-auto mb-3" />
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Infraestructura moderna
            </h4>
            <p className="text-sm text-gray-600">
              Ambientes equipados para una atención segura y eficaz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
