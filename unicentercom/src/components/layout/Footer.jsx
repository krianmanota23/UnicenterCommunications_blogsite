import { services, contactInfo } from "../../data/siteContent";
import { handleSectionLinkClick } from "../../utils/smoothScrollTo";
import { toast } from "sonner";
import { assetUrl } from "../../utils/assetUrl";

const socialIcons = {
  facebook: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

const socialLabels = {
  facebook: "Facebook",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  youtube: "YouTube",
};

export default function Footer() {
  const mapsQuery =
    "Unicenter Communications, 2/F Unicenter Bldg. Maharlika Village, Ma-a, Davao City 8000";
  const mapsEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2575422830646!2d125.57497797475877!3d7.096118792907102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d27c563f0a1%3A0x554b1c7ccf73db25!2sUnicenter%20Communications!5e0!3m2!1sen!2sph!4v1779957011722!5m2!1sen!2sph";
  const mapsLink = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}`;

  return (
    <footer className="w-full shrink-0 mt-auto">
      <div className="w-full bg-slate-900 text-white">
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr_1.2fr] lg:items-start">
            <div className="space-y-5">
              <div className="flex flex-col space-y-3">
                <a
                  href="#hero"
                  onClick={(event) => handleSectionLinkClick(event, "hero")}
                  className="inline-flex items-center space-x-3 self-start transition-opacity hover:opacity-90"
                >
                  <img src={assetUrl('/logo.png')} alt="Unicenter logo" className="h-8 w-8 object-contain" />
                  <span className="text-xl font-bold tracking-tight text-white">
                    Unicenter <span className="text-[#f59e0b]">Communications</span>
                  </span>
                </a>
                <p className="text-sm leading-6 text-slate-400">
                  Delivering telecom and IT infrastructure solutions, managed services, and digital support across Mindanao.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Follow us</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {Object.entries(contactInfo.socials).map(([key, href]) => (
                    key === "facebook" ? (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={socialLabels[key]}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-200 transition hover:bg-slate-700 hover:text-white"
                      >
                        {socialIcons[key]}
                      </a>
                    ) : (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toast.warning("Not available right now, You can contact us through our Email or Facebook.")}
                        aria-label={socialLabels[key]}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-200 transition hover:bg-slate-700 hover:text-white"
                      >
                        {socialIcons[key]}
                      </button>
                    )
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Services</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {services.map((service) => (
                    <li key={service.title}>
                      <a
                        href="#services"
                        onClick={(event) => handleSectionLinkClick(event, "services")}
                        className="transition hover:text-white"
                      >
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Contact</p>
              <div className="mt-4 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Phone</p>
                  {contactInfo.phones.map((phone) => (
                    <p key={phone} className="text-white font-semibold">
                      {phone}
                    </p>
                  ))}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Email</p>
                  {(Array.isArray(contactInfo.email) ? contactInfo.email : [contactInfo.email]).map((email) => (
                    <p key={email} className="text-white font-semibold break-all">
                      {email}
                    </p>
                  ))}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Address</p>
                  <p className="text-white font-semibold leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Hours</p>
                  <p className="text-white font-semibold">{contactInfo.hours}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40">
                <iframe
                  title="UniCenter Communications Map"
                  src={mapsEmbedSrc}
                  className="h-[260px] w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label="Open UniCenter location in Google Maps"
                />
              </div>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-sm font-semibold text-slate-200 underline decoration-slate-600 underline-offset-4 hover:text-white"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 - 2026 Unicenter Communications. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#privacy" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#terms" className="transition hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        {/* Same height as Partners bar (h-8) so copyright clears the marquee */}
        <div className="h-8 bg-slate-950" aria-hidden="true" />
      </div>
    </footer>
  );
}
