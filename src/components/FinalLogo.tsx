const FinalLogo = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Large Logo */}
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-gold text-shadow-strong tracking-wider">
          POPEYE SOLANA
        </h2>
        
        {/* Tagline */}
        <p className="font-heading text-foreground text-xl md:text-2xl mt-6">
          Eat Spinach. Hold Strong.
        </p>
        
        {/* Decorative Line */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent to-gold rounded-full" />
          <div className="w-4 h-4 bg-spinach rounded-full animate-pulse-glow" />
          <div className="h-1 w-16 bg-gradient-to-l from-transparent to-gold rounded-full" />
        </div>
        
        {/* Copyright */}
        <p className="font-heading text-muted-foreground text-sm mt-8">
          © 2025 POPEYE SOLANA. Meme token for entertainment purposes only.
        </p>
      </div>
    </section>
  );
};

export default FinalLogo;
