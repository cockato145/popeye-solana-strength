const HeroLogo = () => {
  return (
    <section className="pt-8 pb-4 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Logo Text */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-gold text-shadow-strong tracking-wider leading-none">
          POPEYE
        </h1>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground text-shadow-strong tracking-wider -mt-2">
          SOLANA
        </h2>
        
        {/* Tagline */}
        <p className="font-heading text-secondary text-xl md:text-2xl mt-6 animate-pulse-glow inline-block px-6 py-2 rounded-full bg-primary/40">
          🥬 Eat Spinach. Hold Strong. 💪
        </p>
      </div>
    </section>
  );
};

export default HeroLogo;
