import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BackgroundCanvas from "./components/layout/BackgroundCanvas";
import { AppToaster } from "./notifications";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Features from "./sections/Features";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Navbar from "./components/layout/Navbar";
import Partners from "./sections/Partners";
import Projects from "./sections/Projects";
import Services from "./sections/Services";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Always start at the top and clear any leftover hash from a previous visit
    window.scrollTo(0, 0);
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen w-full text-slate-900 relative">
      <AppToaster />
      <BackgroundCanvas />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-[4.5rem]">
          <Hero />
          <Services />
          <Features />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Partners />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
