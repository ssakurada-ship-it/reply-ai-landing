const LOGOS = [
  "TechCorp",
  "FoodChain",
  "StartupX",
  "Legal.io",
  "ReviewPro",
  "SalesForce",
  "TechCorp",
  "FoodChain",
  "StartupX",
  "Legal.io",
  "ReviewPro",
  "SalesForce",
];

export default function LogoWall() {
  return (
    <section className="bg-slate-50 py-12 overflow-hidden" aria-label="導入企業">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 mb-8 tracking-wide uppercase">
          300社以上の企業が ReplyAI を活用
        </p>
      </div>

      {/* Infinite scroll container */}
      <div className="relative overflow-hidden" aria-hidden="true">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="logo-scroll-track">
          {LOGOS.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex items-center text-slate-900 font-bold text-lg opacity-20 tracking-tight select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
