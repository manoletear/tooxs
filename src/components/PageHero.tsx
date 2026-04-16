interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-[45vh] md:h-[50vh] lg:h-[55vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-navy/75" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-navy-foreground/80 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
