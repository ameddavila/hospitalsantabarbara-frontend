import useAOS from "../hooks/useAOS";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contacto() {
  useAOS();

  return (
    <section id="contacto" className="bg-white py-20 px-4 font-default">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#1977cc] font-heading mb-2">
            Contáctanos
          </h2>
          <div className="w-24 h-[2px] bg-[#1977cc] mx-auto mb-4" />
          <p className="text-gray-600">
            ¿Tienes dudas? ¿Deseas una atención especializada? Envíanos un mensaje o visítanos.
          </p>
        </div>

        {/* Mapa */}
        <div className="mb-4 rounded-lg overflow-hidden shadow" data-aos="fade-up" data-aos-delay="100">
          <iframe
            className="w-full h-72"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.368785231217!2d-65.2663306!3d-19.0444621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf4a625aeb71%3A0x28ed6365931d929c!2sHospital%20Santa%20Barbara!5e0!3m2!1ses-419!2sbo!4v1720787173497!5m2!1ses-419!2sbo"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Botón para abrir en nueva pestaña */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="150">
          <a
            href="https://www.google.com/maps/place/Hospital+Santa+Barbara/@-19.0444621,-65.2663306,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#1977cc] underline text-sm hover:text-[#125a99] transition"
          >
            Ver en Google Maps
          </a>
        </div>

        {/* Contacto y formulario */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Información de contacto */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-[#1977cc] mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Dirección</h4>
                <p className="text-gray-600">Calle Bolívar #123, Sucre, Bolivia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-[#1977cc] mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Teléfono</h4>
                <p className="text-gray-600">(04) 645-1234</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl text-[#1977cc] mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Correo electrónico</h4>
                <p className="text-gray-600">info@hospitalsantabarbara.org</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("✅ Mensaje enviado correctamente.");
            }}
            className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-4"
            data-aos="fade-left"
          >
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1977cc] text-sm"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1977cc] text-sm"
              required
            />
            <input
              type="text"
              placeholder="Asunto"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1977cc] text-sm"
              required
            />
            <textarea
              rows={4}
              placeholder="Mensaje"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1977cc] text-sm"
              required
            ></textarea>
            <div className="text-right">
              <button
                type="submit"
                className="inline-block bg-[#1977cc] text-white px-6 py-3 rounded-md hover:bg-[#166ab5] transition text-sm font-medium shadow-md"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
