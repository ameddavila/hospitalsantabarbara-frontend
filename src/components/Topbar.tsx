// src/components/Topbar.tsx
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="bg-[#1976d2] text-white text-sm py-2 px-6 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <FaEnvelope className="text-white" />
          contact@hospitalsantabarbara.org
        </span>
        <span className="flex items-center gap-2">
          <FaPhoneAlt className="text-white" />
          +591 (4) 645-1234
        </span>
      </div>
      <div className="flex items-center gap-4 text-white text-lg">
        <a href="#" className="hover:text-gray-200" aria-label="X"><FaTwitter /></a>
        <a href="#" className="hover:text-gray-200" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" className="hover:text-gray-200" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" className="hover:text-gray-200" aria-label="LinkedIn"><FaLinkedinIn /></a>
      </div>
    </div>
  );
}
