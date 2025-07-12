import useAOS from "../hooks/useAOS";

const servicios = [
  {
    icon: "fas fa-heartbeat",
    titulo: "Cardiología",
    descripcion:
      "Atención especializada en enfermedades del corazón con tecnología avanzada y profesionales altamente capacitados.",
  },
  {
    icon: "fas fa-pills",
    titulo: "Farmacia",
    descripcion:
      "Suministro de medicamentos con control y supervisión médica para un tratamiento seguro.",
  },
  {
    icon: "fas fa-hospital-user",
    titulo: "Emergencias",
    descripcion:
      "Servicio 24/7 para urgencias médicas con respuesta rápida y personal capacitado.",
  },
  {
    icon: "fas fa-dna",
    titulo: "Laboratorio clínico",
    descripcion:
      "Análisis y estudios clínicos de apoyo diagnóstico con resultados confiables.",
  },
  {
    icon: "fas fa-wheelchair",
    titulo: "Rehabilitación",
    descripcion:
      "Terapias físicas y ocupacionales personalizadas para recuperación y movilidad.",
  },
  {
    icon: "fas fa-notes-medical",
    titulo: "Consulta externa",
    descripcion:
      "Diversas especialidades para atención médica ambulatoria y diagnósticos tempranos.",
  },
];

export default function Servicios() {
  useAOS(); // ← importante para reactivar animaciones al volver

  return (
    <section id="servicios" className="bg-white py-16 px-4 font-default">
      <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl font-bold text-[#2c4964] mb-2 font-heading">Servicios</h2>
        <div className="w-24 h-[2px] mx-auto bg-[#1977cc] mb-2" />
        <p className="text-gray-600 max-w-2xl mx-auto">
          Conoce los servicios que ofrecemos para cuidar tu salud y bienestar.
        </p>
      </div>

      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="group cursor-pointer rounded-lg border p-6 transition-all duration-300 relative hover:bg-[#1977cc]"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="relative inline-block mb-4">
              <div className="w-14 h-14 rounded-lg absolute top-1 left-1 bg-blue-100 group-hover:bg-white/20" />
              <div className="w-14 h-14 flex items-center justify-center rounded-lg relative z-10 bg-[#1977cc] text-white text-2xl group-hover:bg-white group-hover:text-[#1977cc] transition-all">
                <i className={servicio.icon}></i>
              </div>
            </div>
            <h4 className="text-lg font-bold mb-2 text-[#2c4964] group-hover:text-white transition-all">
              {servicio.titulo}
            </h4>
            <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white transition-all">
              {servicio.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
