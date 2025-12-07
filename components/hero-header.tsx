// Hero.jsx
export default function HeroHeader({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden px-4 pt-10 sm:pt   -20 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(100, 50, 255, 0.1) 0%, transparent 50%)",
        }}
      ></div>

      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
