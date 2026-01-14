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
    <section className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Instruction Text */}
        <p className="text-center font-heading text-foreground/90 text-lg mb-4">
          Change the name, object, and upload a reference image—choose whatever you like.
        </p>
        
        <div className="card-navy rounded-2xl p-6 relative overflow-hidden">
          {/* Prompt Text */}
          <div className="relative z-10">
            <div className="bg-primary/50 rounded-xl p-4 mb-6">
              <p className="font-heading text-foreground/90 text-base leading-relaxed">
                {promptTemplate}
              </p>
            </div>
            
            <button
              onClick={handleCopy}
              className="btn-gold w-full py-4 px-8 rounded-xl flex items-center justify-center gap-3"
            >
              {copied ? (
                <>
                  <Check className="w-6 h-6" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-6 h-6" />
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
