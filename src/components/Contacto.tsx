// src/components/Contacto.tsx
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto font-default">
        <h2 className="text-3xl font-bold text-[#1977cc] text-center mb-4 font-heading">
          Contáctanos
        </h2>
        <p className="text-center text-gray-600 mb-10">
          ¿Tienes dudas? ¿Deseas una atención especializada? Envíanos un mensaje o visítanos.
        </p>

        {/* Mapa de Google */}
        <div className="mb-10">
          <iframe
            className="w-full h-72 rounded-md shadow"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Información de contacto */}
          <div className="space-y-6">
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
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">info@hospitalsantabarbara.org</p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("✅ Mensaje enviado correctamente.");
            }}
            className="grid gap-4 bg-gray-50 p-6 rounded-lg shadow-lg"
          >
            <input
              type="text"
              placeholder="Nombre completo"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="form-input"
              required
            />
            <input
              type="text"
              placeholder="Asunto"
              className="form-input"
              required
            />
            <textarea
              rows={4}
              placeholder="Mensaje"
              className="form-input"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#1977cc] text-white py-3 rounded-md hover:bg-[#166ab5] transition text-sm font-medium"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
