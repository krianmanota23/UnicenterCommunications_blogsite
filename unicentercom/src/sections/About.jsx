import ScrollReveal from "../components/ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-14 snap-start">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">About Unicenter</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  One of Mindanao&apos;s Largest System Integrators
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg text-justify">
                  UniCenter Communications is one of the largest System Integrators in Mindanao, offering a wide spectrum of services including ICT Solutions Design and Build, Managed Services, Software Development, ICT Support and Consultancy, Supply and Delivery of Electronics Networking, and ICT Peripherals. We believe that computerization and communication is important to any business, and our core principle is customer first — with a vision to be the preferred ICT Solution partner of Private Businesses and Local Government Units.
                </p>
              </div>
              <div>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <div className="rounded-3xl bg-white p-6 text-center shadow-sm border border-slate-200 flex-1">
                    <p className="text-3xl font-black text-[#1d4ed8]">13+</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500 font-bold">Expert Engineers</p>
                  </div>
                  <div className="rounded-3xl bg-white p-6 text-center shadow-sm border border-slate-200 flex-1">
                    <p className="text-3xl font-black text-[#1d4ed8]">15+</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500 font-bold">Certifications</p>
                  </div>
                  <div className="rounded-3xl bg-white p-6 text-center shadow-sm border border-slate-200 flex-1">
                    <p className="text-3xl font-black text-[#1d4ed8]">24/7</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500 font-bold">Support</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
                  <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">Trusted Since 1999</span>
                  <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">500+ Enterprise Clients</span>
                </div>
              </div>
            </div>

            <div className="grid gap-5 auto-rows-fr">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f59e0b]">Mission</p>
                <p className="mt-3 text-base leading-7 text-slate-700 text-justify">
                  To provide innovative and reliable ICT solutions that empower businesses to achieve operational excellence and sustainable growth. We are dedicated to delivering customized, secure, and future-ready technology services that meet the evolving demands of our clients.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f59e0b]">Vision</p>
                <p className="mt-3 text-base leading-7 text-slate-700 text-justify">
                  To be the preferred ICT solutions partner for private businesses and local government units, recognized globally for driving digital transformation, fostering innovation, and delivering exceptional value to organizations worldwide.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f59e0b]">Goals</p>
                <p className="mt-3 text-base leading-7 text-slate-700 text-justify">
                  To be the trusted partner in providing comprehensive ICT solutions that enhance productivity, efficiency, and growth for our customers. We aim to deliver high-quality, cost-effective, and future-ready technology solutions tailored to meet the unique needs of each client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
