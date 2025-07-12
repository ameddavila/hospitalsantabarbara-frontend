// src/components/Testimonios.tsx
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper estilos
import "swiper/css";
import "swiper/css/pagination";

// AOS para animaciones
import AOS from "aos";
import "aos/dist/aos.css";

const testimonios = [
  {
    nombre: "María Fernández",
    cargo: "Paciente",
    imagen: "/assets/img/testimonials/testimonials-1.jpg",
    texto:
      "El personal médico fue muy atento y profesional. Me sentí acompañada en todo momento. ¡Gracias Hospital Santa Bárbara!",
  },
  {
    nombre: "Carlos Rojas",
    cargo: "Familiar de paciente",
    imagen: "/assets/img/testimonials/testimonials-2.jpg",
    texto:
      "La atención en emergencias fue rápida y eficiente. Sin duda, un hospital confiable.",
  },
  {
    nombre: "Lucía Gutiérrez",
    cargo: "Paciente pediátrico",
    imagen: "/assets/img/testimonials/testimonials-3.jpg",
    texto:
      "Me gustó mucho la forma en que explicaron todo a mis papás. El doctor fue muy amable conmigo.",
  },
];

export default function Testimonios() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section id="testimonios" className="bg-white py-20 px-4 font-default">
      <div className="max-w-4xl mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-[#1977cc] mb-2 font-heading">
          Testimonios
        </h2>
        <div className="w-24 h-[2px] mx-auto bg-[#1977cc] mb-4" />
        <p className="text-gray-600">
          Algunas experiencias compartidas por nuestros pacientes y familiares.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-2" data-aos="fade-up">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonios.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#1977cc]"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-[#1977cc]">{item.nombre}</h4>
                    <p className="text-sm text-gray-500">{item.cargo}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic">
                  <i className="fas fa-quote-left mr-2 text-[#1977cc]"></i>
                  {item.texto}
                  <i className="fas fa-quote-right ml-2 text-[#1977cc]"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
