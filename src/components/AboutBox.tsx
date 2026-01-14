import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const aboutText = `Inspired by Popeye's strength. Powered by Solana.

Built on the idea that strength comes from conviction.

Like Popeye, power doesn't show instantly — it appears when the time is right.

No fake promises. No complex utility. Just memes, community, and strong holders on Solana.

Eat spinach. Hold strong.`;

const AboutBox = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(aboutText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-8 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="font-display text-gold text-3xl sm:text-4xl md:text-5xl text-center text-shadow-gold mb-4 md:mb-6">
          ABOUT
        </h2>
        
        <div className="card-navy rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`
            }} />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <pre className="font-heading text-foreground text-center whitespace-pre-wrap text-sm sm:text-base md:text-lg leading-relaxed">
              {aboutText}
            </pre>
          </div>
          
          {/* Corner Glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-spinach-glow/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
