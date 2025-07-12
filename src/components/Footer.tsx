import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#0d2b53] text-white pt-12 pb-6 px-4 font-default">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Columna 1: Información */}
        <div>
          <h2 className="text-2xl font-bold mb-4 font-heading text-white">
            Hospital Santa Bárbara
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Calle Bolívar #123, Sucre - Bolivia
            <br />
            <strong>Tel:</strong> (04) 645-1234
            <br />
            <strong>Email:</strong> info@hospitalsantabarbara.org
          </p>
          <div className="flex gap-4 mt-4 text-white text-xl">
            <a href="#" className="hover:text-[#1977cc] transition">
              <BsFacebook />
            </a>
            <a href="#" className="hover:text-[#1977cc] transition">
              <BsInstagram />
            </a>
            <a href="#" className="hover:text-[#1977cc] transition">
              <BsLinkedin />
            </a>
          </div>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white/90">Enlaces útiles</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-white transition">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:text-white transition">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-white transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Servicios destacados */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white/90">Servicios</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Cardiología</li>
            <li>Emergencias 24/7</li>
            <li>Consulta externa</li>
            <li>Rehabilitación</li>
          </ul>
        </div>

        {/* Información legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white/90">Información</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Política de privacidad</li>
            <li>Términos de servicio</li>
            <li>Horario de atención</li>
            <li>Mapa del sitio</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Hospital Santa Bárbara — Todos los derechos reservados.
      </div>
    </footer>
  );
}
