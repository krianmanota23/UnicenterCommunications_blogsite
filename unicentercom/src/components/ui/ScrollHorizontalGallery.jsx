import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  endDwellPx,
  GALLERY_DIMS,
  getGalleryDims,
  stickyViewportHeight,
} from "../../motion/scrollGallery/constants";
import { showToast } from "../../notifications";

/** Snap horizontal position to the nearest card index while scrolling. */
function snappedX(progress, travelPx, scrollTrackPx, endDwell, itemCount, cardSnap) {
  if (travelPx <= 0) return 0;

  const horizontalEnd = scrollTrackPx / (scrollTrackPx + endDwell);
  if (progress >= horizontalEnd) return -travelPx;

  const cardSteps = Math.max(1, itemCount - 1);
  const normalized = Math.min(Math.max(progress / horizontalEnd, 0), 1);

  if (!cardSnap) {
    return -normalized * travelPx;
  }

  const snappedStep = Math.round(normalized * cardSteps);
  return -(snappedStep / cardSteps) * travelPx;
}

export default function ScrollHorizontalGallery({
  itemCount,
  children,
  header,
  className = "",
  scrollHintMessage = "Scroll up or down to browse the cards.",
  cardSnap = true,
}) {
  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const lastHintAtRef = useRef(0);
  const [dims, setDims] = useState(GALLERY_DIMS.desktop);
  const [travelPx, setTravelPx] = useState(0);
  const [scrollTrackPx, setScrollTrackPx] = useState(0);
  const [scrollHeightPx, setScrollHeightPx] = useState(0);
  const [endDwell, setEndDwell] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReduced = () => setReducedMotion(mq.matches);
    updateReduced();
    mq.addEventListener("change", updateReduced);
    return () => mq.removeEventListener("change", updateReduced);
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      const d = getGalleryDims();
      setDims(d);

      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      const vw = viewport.clientWidth;
      if (vw <= 0) return;

      const galleryW = track.scrollWidth;
      const travel = Math.max(0, galleryW - vw);

      const dwell = endDwellPx();
      const stickyH = stickyViewportHeight();
      const cardSteps = Math.max(1, itemCount - 1);
      const scrollPerCard = Math.round(stickyH * 0.42);
      const trackPx = cardSnap
        ? Math.max(travel, cardSteps * scrollPerCard)
        : travel;

      setTravelPx(travel);
      setScrollTrackPx(trackPx);
      setEndDwell(dwell);
      setScrollHeightPx(trackPx + stickyH + dwell);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [itemCount, cardSnap]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const targetX = useTransform(scrollYProgress, (progress) =>
    snappedX(progress, travelPx, scrollTrackPx, endDwell, itemCount, cardSnap)
  );

  const x = useSpring(targetX, {
    stiffness: reducedMotion ? 900 : cardSnap ? 340 : 400,
    damping: reducedMotion ? 55 : cardSnap ? 32 : 40,
    mass: cardSnap ? 0.5 : 0.55,
  });

  const handleTouchStart = useCallback((event) => {
    if (window.innerWidth >= 768 || reducedMotion) return;
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, [reducedMotion]);

  const handleTouchMove = useCallback(
    (event) => {
      if (window.innerWidth >= 768 || reducedMotion) return;

      const touch = event.touches[0];
      const dx = touch.clientX - touchStartRef.current.x;
      const dy = touch.clientY - touchStartRef.current.y;

      if (Math.abs(dx) < 28) return;
      if (Math.abs(dx) < Math.abs(dy) * 1.2) return;

      const now = Date.now();
      if (now - lastHintAtRef.current < 180) return;
      lastHintAtRef.current = now;

      showToast(scrollHintMessage, "info");
    },
    [reducedMotion, scrollHintMessage]
  );

  if (reducedMotion) {
    return (
      <div
        className={`mx-auto flex max-w-7xl gap-4 overflow-x-auto scroll-smooth px-4 pb-4 snap-x snap-mandatory sm:gap-6 sm:px-6 lg:px-8 ${className}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children(dims)}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      data-scroll-gallery
      data-card-snap={cardSnap ? "true" : "false"}
      className={`relative w-full ${className}`}
      style={{ height: scrollHeightPx > 0 ? scrollHeightPx : "100vh" }}
    >
      <div
        className="sticky z-10 flex w-full flex-col justify-center py-4 md:py-6"
        style={{
          top: "var(--header-height)",
          height: "calc(100vh - var(--header-height) - var(--partners-height))",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center h-full gap-4 md:gap-8">
          {header && dims.compact && <div className="shrink-0">{header}</div>}
          <div ref={viewportRef} className="overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex w-max will-change-transform"
              style={{ x, gap: dims.gap }}
            >
              {children(dims)}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { GALLERY_DIMS };
