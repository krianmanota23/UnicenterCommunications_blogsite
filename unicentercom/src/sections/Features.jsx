import { features } from "../data/siteContent";

export default function Features() {
  return (
    <section id="features" className="py-14 snap-start">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for Reliability. Designed to Scale.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between items-start transition hover:-translate-y-1 hover:shadow-md duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 leading-tight">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
