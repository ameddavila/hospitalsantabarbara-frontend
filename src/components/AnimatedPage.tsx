import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AnimatedPage({ children }: { children: React.ReactNode }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timeout = setTimeout(() => {
      AOS.refreshHard(); // fuerza el reinicio de animaciones
      setKey((prev) => prev + 1); // fuerza remount
    }, 150);

    return () => clearTimeout(timeout);
  }, []);

  return <div key={key}>{children}</div>;
}
