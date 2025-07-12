// src/components/Cita.tsx
import { useState } from "react";

export default function Cita() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section id="cita" className="bg-white py-16 px-4 font-default">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-[#1977cc] mb-4 font-heading">
          Solicitar una Cita
        </h2>
        <p className="text-gray-600">
          Complete el siguiente formulario para reservar una cita con uno de nuestros especialistas.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg grid gap-6"
      >
        <div className="grid md:grid-cols-3 gap-4">
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
            type="tel"
            placeholder="Teléfono"
            className="form-input"
            required
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="datetime-local"
            className="form-input"
            required
          />
          <select className="form-input" required>
            <option value="">Seleccione Departamento</option>
            <option value="cardiologia">Cardiología</option>
            <option value="neurologia">Neurología</option>
            <option value="pediatria">Pediatría</option>
          </select>
          <select className="form-input" required>
            <option value="">Seleccione Médico</option>
            <option value="dr1">Dr. Luis Pérez</option>
            <option value="dr2">Dra. Ana López</option>
            <option value="dr3">Dr. Mario García</option>
          </select>
        </div>

        <textarea
          rows={4}
          placeholder="Mensaje adicional (opcional)"
          className="form-input"
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#1977cc] text-white px-8 py-3 rounded-full hover:bg-[#166ab5] transition font-medium"
          >
            Reservar Cita
          </button>
        </div>

        {enviado && (
          <p className="text-green-600 text-center font-semibold animate-fade-in">
            ✅ Tu cita fue registrada correctamente.
          </p>
        )}
      </form>
    </section>
  );
}
