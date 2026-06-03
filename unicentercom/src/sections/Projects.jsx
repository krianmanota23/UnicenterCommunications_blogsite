import { projectItems } from "../data/siteContent";
import ScrollReveal from "../components/ui/ScrollReveal";
import { galleryScrollHints } from "../notifications";
import ScrollHorizontalGallery from "../components/ui/ScrollHorizontalGallery";

function ProjectCard({ project, className = "", compact = false }) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 ${
        compact ? "" : "group hover:shadow-xl"
      } ${className}`}
    >
      <div
        className={`relative w-full shrink-0 overflow-hidden ${compact ? "h-40" : "h-60"}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={`h-full w-full object-cover transition-transform duration-500 ${
              compact ? "hover:scale-105" : "group-hover:scale-105"
            }`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm font-medium text-slate-500">
            Image coming soon
          </div>
        )}
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`inline-block rounded-full px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm ${project.categoryClass}`}
          >
            {project.categoryLabel}
          </span>
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "space-y-2 p-5" : "space-y-4 p-8"}`}>
        <h3
          className={`font-bold leading-tight text-slate-900 ${compact ? "text-lg" : "text-2xl"}`}
        >
          {project.title}
        </h3>
        <p
          className={`flex-1 leading-relaxed text-slate-600 text-justify ${compact ? "text-xs" : "text-[15px]"}`}
        >
          {project.description}
        </p>
        <div className="flex items-center gap-1.5 pt-1 text-sm font-medium text-slate-500">
          <svg
            className="h-4 w-4 shrink-0 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span className={compact ? "text-xs" : ""}>{project.location}</span>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" data-scroll-gallery-section className="py-12 md:py-24">
      {/* Desktop Header (Outside Sticky Viewport) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden md:block">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Installations &amp; Completed Projects
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <ScrollHorizontalGallery
        itemCount={projectItems.length}
        cardSnap
        scrollHintMessage={galleryScrollHints.projects}
        header={
          <ScrollReveal>
            <div className="text-center px-4">
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Featured Installations &amp; Completed Projects
              </h2>
            </div>
          </ScrollReveal>
        }
      >
        {(dims) =>
          projectItems.map((project) => (
            <div key={project.title} className="shrink-0" style={{ width: dims.cardWidth }}>
              <ProjectCard project={project} compact={dims.compact} />
            </div>
          ))
        }
      </ScrollHorizontalGallery>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mt-6 text-center text-sm font-medium text-slate-500">
          Scroll to explore featured projects
        </p>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <p className="text-sm italic text-slate-500">
              * Featured projects shown here are a curated selection. UniCenter has supported many more
              clients and engagements nationwide (and beyond) than can be listed on this page.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
