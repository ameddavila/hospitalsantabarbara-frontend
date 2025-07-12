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
  return (
    <section id="testimonios" className="bg-white py-16 px-4 font-default">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-[#1977cc] mb-4 font-heading">
          Testimonios
        </h2>
        <p className="text-gray-600">
          Algunas experiencias compartidas por nuestros pacientes y familiares.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonios.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-[#1977cc]">
                      {item.nombre}
                    </h4>
                    <p className="text-sm text-gray-500">{item.cargo}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic">{item.texto}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
