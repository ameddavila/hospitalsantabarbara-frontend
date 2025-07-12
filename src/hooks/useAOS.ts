import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function useAOS(delay = 100) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleRefresh = () => {
      setTimeout(() => {
        AOS.refresh();
      }, delay);
    };

    // Refrescar cuando cambia la URL (React Router o hash)
    window.addEventListener("hashchange", handleRefresh);
    window.addEventListener("popstate", handleRefresh);

    return () => {
      window.removeEventListener("hashchange", handleRefresh);
      window.removeEventListener("popstate", handleRefresh);
    };
  }, [delay]);
}
