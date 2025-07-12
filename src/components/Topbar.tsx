import { FaEnvelope, FaPhoneAlt, FaLock, FaChartBar } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="bg-[#1976d2] text-white text-sm py-2 px-6 flex justify-between items-center font-default">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <FaEnvelope className="text-white" />
          contact@hospitalsantabarbara.org
        </span>
        <span className="flex items-center gap-2">
          <FaPhoneAlt className="text-white" />
          (4) 645-1900
        </span>
      </div>

      <div className="flex items-center gap-4 text-white text-lg">
        <a
          href="https://hospitalsantabarbara.org/reportes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
          aria-label="Acceder a reportes"
        >
          <FaChartBar />
        </a>
        <a
          href="https://hospitalsantabarbara.org/portal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
          aria-label="Acceder al portal protegido"
        >
          <FaLock />
        </a>
      </div>
    </div>
  );
}
