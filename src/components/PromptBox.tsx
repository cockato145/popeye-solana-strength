import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const promptTemplate = `3D cartoon character inspired by Popeye-style strength, featuring {character type / theme}, exaggerated muscular arms, confident heroic pose, holding {object or item}, wearing {outfit style}, expressive face with bold cartoon features, smooth high-quality 3D render, soft lighting, vibrant color palette, clean background, playful meme-style, cinematic, ultra detailed`;

const PromptBox = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(promptTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-6 md:py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="font-display text-gold text-3xl sm:text-4xl md:text-5xl text-center text-shadow-gold mb-4 md:mb-6">
          PROMPT
        </h2>
        
        {/* Instruction Text */}
        <p className="text-center font-heading text-foreground/90 text-sm sm:text-base md:text-lg mb-4">
          Change the name, object, and upload a reference image—choose whatever you like.
        </p>
        
        <div className="card-navy rounded-2xl p-4 sm:p-6 relative overflow-hidden">
          {/* Prompt Text */}
          <div className="relative z-10">
            <div className="bg-primary/50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="font-heading text-foreground/90 text-xs sm:text-sm md:text-base leading-relaxed">
                {promptTemplate}
              </p>
            </div>
            
            <button
              onClick={handleCopy}
              className="btn-gold w-full py-3 sm:py-4 px-4 sm:px-8 rounded-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>COPY $POPEYE PROMPT</span>
                </>
              )}
            </button>
          </div>
          
          {/* Corner Glow */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default PromptBox;
