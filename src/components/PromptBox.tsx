import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const promptText = `Inspired by classic strength.
Powered by Solana.

Strength doesn't show instantly.
It appears when conviction is tested.

No fake promises.
No complex utility.

Just memes, community,
and strong holders.

Eat Spinach. Hold Strong.`;

const PromptBox = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="card-navy rounded-2xl p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`
            }} />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <pre className="font-heading text-foreground text-center whitespace-pre-wrap text-lg leading-relaxed mb-8">
              {promptText}
            </pre>
            
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
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-spinach-glow/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default PromptBox;
