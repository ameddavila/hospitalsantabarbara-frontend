export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-16 px-4 font-default">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="relative">
          <img
            src="/assets/img/about.jpg"
            alt="Sobre el hospital"
            className="rounded-lg shadow-lg w-full"
            data-aos="fade-right"
          />
        </div>

        {/* Contenido */}
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold text-[#1977cc] mb-4 font-heading">
            Sobre Nosotros
          </h2>
          <p className="text-gray-700 mb-6">
            Somos una institución médica comprometida con brindar atención
            integral y de calidad a nuestros pacientes. Nuestro enfoque humano
            y ético nos convierte en uno de los hospitales más importantes de
            la región.
          </p>

          <ul className="space-y-4">
            {[
              "Equipo médico altamente capacitado",
              "Infraestructura moderna y equipada",
              "Atención personalizada y humanizada",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <i className="fas fa-check-circle text-[#1977cc] text-lg mt-1"></i>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <a
              href="#cita"
              className="inline-block bg-[#1977cc] hover:bg-[#166ab5] text-white px-6 py-3 rounded-md transition text-sm font-semibold"
            >
              Reservar una cita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
