export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Columna 1: Logo y contacto */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hospital Santa Bárbara</h2>
          <p className="text-sm text-gray-300">
            Calle Bolívar #123, Sucre - Bolivia
            <br />
            <strong>Tel:</strong> (04) 645-1234
            <br />
            <strong>Email:</strong> info@hospitalsantabarbara.org
          </p>
          <div className="flex gap-3 mt-4 text-xl">
            <a href="#" className="hover:text-blue-300"><i className="bi bi-facebook"></i></a>
            <a href="#" className="hover:text-blue-300"><i className="bi bi-instagram"></i></a>
            <a href="#" className="hover:text-blue-300"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        {/* Columna 2: Enlaces útiles */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces útiles</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Inicio</a></li>
            <li><a href="#nosotros" className="hover:text-white">Nosotros</a></li>
            <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
            <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Servicios */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Servicios</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Cardiología</li>
            <li>Emergencias 24/7</li>
            <li>Consulta externa</li>
            <li>Rehabilitación</li>
          </ul>
        </div>

        {/* Columna 4: Información extra */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Información</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Política de privacidad</li>
            <li>Términos de servicio</li>
            <li>Horario de atención</li>
            <li>Mapa del sitio</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Hospital Santa Bárbara — Todos los derechos reservados.
      </div>
    </footer>
  );
}
