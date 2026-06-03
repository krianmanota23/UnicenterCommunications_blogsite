import { services } from "../data/siteContent";
import { handleSectionLinkClick } from "../utils/smoothScrollTo";
import ScrollReveal from "../components/ui/ScrollReveal";
import { galleryScrollHints } from "../notifications";
import ScrollHorizontalGallery from "../components/ui/ScrollHorizontalGallery";
import { assetUrl } from "../utils/assetUrl";

function ServiceCard({ service, className = "", compact = false }) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 ${
        compact ? "" : "group hover:shadow-xl"
      } ${className}`}
    >
      <div
        className={`relative w-full shrink-0 overflow-hidden ${compact ? "h-40" : "h-60"}`}
      >
        <img
          src={assetUrl(service.image)}
          alt={service.title}
          className={`h-full w-full object-cover transition-transform duration-500 ${
            compact ? "hover:scale-105" : "group-hover:scale-105"
          }`}
        />
        <div className="absolute top-3 right-3 z-10">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm">
            {service.icon}
          </div>
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "space-y-2 p-5" : "space-y-4 p-8"}`}>
        <h3
          className={`font-bold leading-tight text-slate-900 ${compact ? "text-lg" : "text-2xl"}`}
        >
          {service.title}
        </h3>
        <p
          className={`flex-1 leading-relaxed text-slate-600 text-justify ${compact ? "text-xs" : "text-[15px]"}`}
        >
          {service.description}
        </p>
        <a
          href="#contact"
          onClick={(event) => handleSectionLinkClick(event, "contact")}
          className={`inline-flex items-center pt-1 font-medium text-[#2563eb] transition hover:text-blue-600 ${compact ? "text-xs" : "text-sm"}`}
        >
          Learn more
          <svg
            viewBox="0 0 24 24"
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" data-scroll-gallery-section className="py-12 md:py-24">
      {/* Desktop Header (Outside Sticky Viewport) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden md:block">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">What We Do</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              From infrastructure builds to software solutions — we handle every layer of your ICT needs.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollHorizontalGallery
        itemCount={services.length}
        cardSnap
        scrollHintMessage={galleryScrollHints.services}
        header={
          <ScrollReveal>
            <div className="text-center px-4">
              <h2 className="mt-0 text-2xl font-bold tracking-tight text-slate-900">
                Our Services
              </h2>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-600 max-w-2xl mx-auto">
                From infrastructure builds to software solutions — we handle every layer of your ICT needs.
              </p>
            </div>
          </ScrollReveal>
        }
      >
        {(dims) =>
          services.map((service) => (
            <div key={service.title} className="shrink-0" style={{ width: dims.cardWidth }}>
              <ServiceCard service={service} compact={dims.compact} />
            </div>
          ))
        }
      </ScrollHorizontalGallery>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mt-6 text-center text-sm font-medium text-slate-500">
          Scroll to explore our services
        </p>
      </div>
    </section>
  );
}
