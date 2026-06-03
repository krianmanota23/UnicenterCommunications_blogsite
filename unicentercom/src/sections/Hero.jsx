import ScrollReveal from "../components/ui/ScrollReveal";
import { handleSectionLinkClick } from "../utils/smoothScrollTo";
import { motion, useScroll, useTransform } from "motion/react";

const heroBgStyle = `
  #hero-bg { background-image: url('/Unicenter_DavaoMainOfficecp.png'); }
  @media (min-width: 640px) {
    #hero-bg { background-image: url('/Unicenter_DavaoMainOffice.png'); }
  }
`;

export default function Hero() {
  const { scrollY } = useScroll();

  // Scales from 1 to 1.5, fades out, and blurs as you scroll down
  const scale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const blur = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(8px)"]);

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-slate-950 snap-start" style={{ minHeight: "120vh" }}>
      <style>{heroBgStyle}</style>
      {/* Zooming Background */}
      <motion.div
        id="hero-bg"
        className="absolute inset-0 bg-cover bg-center origin-center"
        style={{
          scale,
          opacity,
          filter: blur,
        }}
      />
      {/* Overlay to ensure text readability */}
      <motion.div
        className="absolute inset-0 bg-white/80"
        style={{ opacity }}
      />

      {/* Hero Content - Sticky so it stays in view while background zooms */}
      <div className="sticky top-[4.5rem] flex min-h-[calc(100vh-4.5rem)] w-full flex-col justify-center overflow-hidden pb-20 lg:pb-32 border-b border-[rgba(29,78,216,0.01)]">
        <ScrollReveal className="w-full">
          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 items-center w-full z-10 pt-6 lg:pt-0">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#10121a]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Enterprise-Grade Telecom Solutions</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem] leading-[1.12]">
                  Smart <span className="text-[#f59e0b]">Telecom</span> & <span className="text-[#1d4ed8]">IT Infrastructure</span> Solutions
                </h1>
                <p className="max-w-xl text-sm md:text-[15px] leading-relaxed text-slate-600 text-justify">
                  We design, install, and maintain reliable communication systems for modern businesses — from fiber optic networks to intelligent CCTV and VoIP platforms.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 mb-4">
                <a
                  href="#contact"
                  onClick={(event) => handleSectionLinkClick(event, "contact")}
                  className="inline-flex items-center justify-center rounded-full bg-[#1d4ed8] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#1d4ed8]/10 transition-all duration-300 hover:bg-[#1d4ed8]/95 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3.09a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.91 11.09a16 16 0 0 0 6 6l1.45-1.45a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Get a Quote
                </a>
                <a
                  href="#services"
                  onClick={(event) => handleSectionLinkClick(event, "services")}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5"
                >
                  Our Services
                </a>
              </div>

              <div className="grid grid-cols-3 gap-2 w-full px-3 max-w-lg pt-0.5">
                {[
                  { value: "500+", label: "Projects Completed" },
                  { value: "20+", label: "Years Experience" },
                  { value: "98%", label: "Satisfaction" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 text-center min-w-0 overflow-hidden shadow-sm"
                  >
                    <p className="text-xl sm:text-2xl font-bold text-blue-700">
                      {item.value.includes("+") ? (
                        <>
                          {item.value.replace("+", "")}
                          <span className="text-[#f59e0b] font-black">+</span>
                        </>
                      ) : (
                        <>
                          {item.value.replace("%", "")}
                          <span className="text-[#f59e0b] font-black">%</span>
                        </>
                      )}
                    </p>
                    <p className="text-[9px] sm:text-xs font-semibold tracking-widest text-slate-500 mt-1 leading-tight break-words whitespace-normal uppercase">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center w-full min-h-[360px] md:min-h-[440px]">
              {/* Radiating Blue Glowing Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-blue-400/25 blur-2xl animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-[#1d4ed8]/18 blur-[55px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-300/12 blur-[70px]" />

              {/* Single Floating Logo */}
              <div className="relative z-10 animate-orb flex items-center justify-center">
                <img src="/logo.png" alt="Unicenter logo" className="h-44 w-44 md:h-56 md:w-56 object-contain drop-shadow-[0_5px_20px_rgba(25,74,214,0.4)]" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
