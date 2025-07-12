import "aos/dist/aos.css";
import { FaClipboardList, FaGem, FaFlask } from "react-icons/fa";
import useAOS from "../hooks/useAOS";

const beneficios = [
  {
    icon: <FaClipboardList className="text-[#1977cc] text-3xl mx-auto mb-3" />,
    titulo: "Atención integral",
    descripcion: "Diagnóstico, prevención y tratamiento desde la primera consulta.",
  },
  {
    icon: <FaGem className="text-[#1977cc] text-3xl mx-auto mb-3" />,
    titulo: "Profesionales de calidad",
    descripcion: "Nuestro equipo médico está conformado por especialistas certificados.",
  },
  {
    icon: <FaFlask className="text-[#1977cc] text-3xl mx-auto mb-3" />,
    titulo: "Infraestructura moderna",
    descripcion: "Ambientes equipados para una atención segura y eficaz.",
  },
];

export default function Hero() {
  useAOS();

  return (
    <section
      id="inicio"
      className="-mt-[140px] relative bg-[url('/assets/img/hero-bg.jpg')] bg-cover bg-center bg-no-repeat text-white"
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
        {/* Columna izquierda */}
        <div className="flex-1 space-y-8" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-heading text-white">
            Hospital <span className="text-[#1977cc]">Santa Bárbara</span>
          </h1>
          <p className="text-lg text-white/90 max-w-xl">
            Somos un equipo de profesionales comprometidos con tu salud.
            Nuestra misión es brindar atención médica humana y de calidad.
          </p>

          <div
            className="bg-[#1977cc] text-white rounded-2xl px-8 py-6 shadow-2xl max-w-xl"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
              ¿Por qué elegirnos?
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-6 text-white/90">
              Brindamos atención oportuna, cálida y especializada. Nuestro hospital cuenta
              con tecnología de vanguardia y personal médico altamente calificado para
              garantizar tu bienestar.
            </p>
            <a
              href="#nosotros"
              className="inline-flex items-center gap-2 bg-white text-[#1977cc] px-5 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-all text-sm md:text-base"
              role="button"
              aria-label="Ir a sección nosotros"
            >
              Conócenos <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>

        {/* Columna derecha: beneficios */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-[60%] self-end lg:justify-end"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {beneficios.map((item, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
              data-aos="zoom-in"
              data-aos-delay={400 + i * 100}
            >
              {item.icon}
              <h4 className="text-lg font-bold text-gray-800 mb-2">{item.titulo}</h4>
              <p className="text-sm text-gray-600">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
