import { useEffect, useRef } from "react";

const PARTNERS = [
  "Cisco",
  "Snom",
  "TP-Link",
  "Axis Communications",
  "Panduit",
  "FatPipe Networks",
  "Maipu",
  "Hikvision",
  "QAX",
  "Schneider Electric",
  "Grandstream",
  "Senstar",
];

// Speed in pixels per second — adjust to taste
const SPEED = 50;

export default function Partners() {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tick = (ts) => {
      if (!pausedRef.current) {
        if (lastTsRef.current !== null) {
          const delta = ts - lastTsRef.current;
          posRef.current += (SPEED * delta) / 1000;

          // Seamless reset: the track contains 2 identical copies.
          // Once we've scrolled exactly one copy's width, silently wrap back.
          const half = track.scrollWidth / 2;
          if (posRef.current >= half) {
            posRef.current -= half;
          }

          track.style.transform = `translateX(-${posRef.current}px)`;
        }
        lastTsRef.current = ts;
      } else {
        // While paused, keep lastTs in sync so we don't get a jump on resume
        lastTsRef.current = ts;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      id="partners-bar"
      className="fixed bottom-0 left-0 z-50 h-8 w-full border-t border-gray-300/80"
      style={{ background: "linear-gradient(90deg, #748499 0%, #93a4ba 100%)" }}
    >
      <div className="flex h-full items-center gap-3 w-full pl-0 pr-3">
        {/* Left: label */}
        <div className="flex h-full w-24 shrink-0 items-center pl-2">
          <div className="text-[10px] font-semibold uppercase leading-none tracking-[0.28em] text-black">
            Partners
          </div>
        </div>

        {/* Marquee track — two identical copies for a seamless rAF loop */}
        <div className="h-full min-w-0 flex-1 overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-full items-center flex-nowrap whitespace-nowrap will-change-transform"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            {/* First copy */}
            {PARTNERS.map((p) => (
              <div key={`a-${p}`} className="inline-flex flex-shrink-0 items-center px-6">
                <span
                  className="text-xs font-bold leading-none text-slate-700 opacity-90 hover:opacity-100 transition-opacity duration-200"
                  style={{ fontFamily: "Plus Jakarta Sans, system-ui, sans-serif" }}
                >
                  {p}
                </span>
              </div>
            ))}

            {/* Second copy — must be pixel-identical to first for seamless wrap */}
            {PARTNERS.map((p) => (
              <div key={`b-${p}`} className="inline-flex flex-shrink-0 items-center px-6">
                <span
                  className="text-xs font-bold leading-none text-slate-700 opacity-90 hover:opacity-100 transition-opacity duration-200"
                  style={{ fontFamily: "Plus Jakarta Sans, system-ui, sans-serif" }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
