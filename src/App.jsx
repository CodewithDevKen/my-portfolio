import { useEffect, useRef } from "react";
import "./styles/globals.css";
import "./styles/themes.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Stack from "./sections/Stack/Stack";
import Certifications from "./sections/Certifications/Certifications";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function FadeIn({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="animate-up">
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <FadeIn><Hero /></FadeIn>
        <FadeIn><About /></FadeIn>
        <FadeIn><Experience /></FadeIn>
        <FadeIn><Stack /></FadeIn>
        <FadeIn><Certifications /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;
