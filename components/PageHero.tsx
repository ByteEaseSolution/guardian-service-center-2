export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-brand-black pb-24 pt-40 text-white md:pb-32 md:pt-56">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(245,197,24,0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(245,197,24,0.15), transparent 50%)",
        }}
      />
      <div className="gsc-container relative">
        <div className="yellow-line mb-6" />
        <p className="gsc-eyebrow text-brand-yellow">{eyebrow}</p>
        <h1 className="gsc-h1 mt-8 max-w-4xl text-white">{title}</h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-white/70">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
