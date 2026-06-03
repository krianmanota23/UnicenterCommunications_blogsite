import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { smoothScrollToSection } from "../../utils/smoothScrollTo";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "features", label: "Features" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
  bounce: 0.3,
};

function BurgerIcon({ isOpen }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between">
      {/* Top bar */}
      <motion.span
        className="block h-0.5 w-full bg-slate-700 rounded-full origin-center"
        animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
        transition={springTransition}
      />
      {/* Middle bar */}
      <motion.span
        className="block h-0.5 w-full bg-slate-700 rounded-full"
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={springTransition}
      />
      {/* Bottom bar */}
      <motion.span
        className="block h-0.5 w-full bg-slate-700 rounded-full origin-center"
        animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
        transition={springTransition}
      />
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const menuRef = useRef(null);

  useEffect(() => {
    const NAVBAR_HEIGHT = 72;

    const getActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportMid = scrollY + NAVBAR_HEIGHT + window.innerHeight * 0.15;

      let bestId = NAV_LINKS[0].id;
      let bestDiff = Infinity;

      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        const bottom = top + el.offsetHeight;

        if (top <= viewportMid && bottom > scrollY + NAVBAR_HEIGHT) {
          const diff = viewportMid - top;
          if (diff < bestDiff) {
            bestDiff = diff;
            bestId = id;
          }
        }
      }

      setActiveSection(bestId);
    };

    getActiveSection();
    window.addEventListener("scroll", getActiveSection, { passive: true });

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (NAV_LINKS.some((link) => link.id === hash)) {
        setActiveSection(hash);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("scroll", getActiveSection);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);
    setMenuOpen(false);
    smoothScrollToSection(sectionId);
  };

  const desktopLinkClass = (sectionId) =>
    [
      "text-sm pb-1 transition-all duration-200 border-b-2",
      activeSection === sectionId
        ? "text-[#1d4ed8] font-semibold border-[#1d4ed8]"
        : "text-[#374151] font-medium border-transparent hover:text-[#f59e0b] hover:border-[#f59e0b]",
    ].join(" ");

  const mobileLinkClass = (sectionId) =>
    [
      "block w-fit text-sm pb-1 transition-all duration-200 border-b-2",
      activeSection === sectionId
        ? "text-[#1d4ed8] font-semibold border-[#1d4ed8]"
        : "text-[#374151] font-medium border-transparent hover:text-[#f59e0b] hover:border-[#f59e0b]",
    ].join(" ");

  return (
    <header
      id="site-header"
      ref={menuRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-slate-200"
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(event) => handleNavClick(event, "hero")}
          className="flex items-center gap-2.5 shrink-0 min-w-0 max-w-[calc(100%-4rem)]"
        >
          <img src="/logo.png" alt="Unicenter logo" className="h-8 w-8 object-contain shrink-0" />
          <span className="text-base sm:text-xl font-bold tracking-tight text-slate-950 leading-tight">
            Unicenter{" "}
            <span className="text-[#f59e0b]">Communications</span>
          </span>
        </a>

        {/* Desktop Nav — right aligned */}
        <nav className="hidden items-center gap-6 lg:flex ml-auto">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => handleNavClick(event, id)}
              className={desktopLinkClass(id)}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Burger button — tablet + mobile only */}
        <button
          type="button"
          className="relative ml-4 flex items-center justify-center p-2 text-slate-700 focus:outline-none lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <BurgerIcon isOpen={menuOpen} />
        </button>
      </div>

      {/* Mobile dropdown — compact, right-aligned panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute right-4 top-[4.5rem] z-50 w-52 rounded-2xl border border-slate-200 bg-white shadow-xl lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map(({ id, label }, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={(event) => handleNavClick(event, id)}
                  className={mobileLinkClass(id)}
                  aria-current={activeSection === id ? "page" : undefined}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, type: "spring", stiffness: 300, damping: 25 }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
