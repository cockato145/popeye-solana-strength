import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const contractAddress = '4JyEDuBwhuREs7gUgCw4sm8ZuZaAhEQszCimE7wqpump';

const TokenInfo = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-6 md:py-8 px-4">
      <div className="max-w-xl mx-auto">
        <div className="card-navy rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
          {/* Token Name */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 border-b border-border/30 pb-3">
            <span className="font-heading text-muted-foreground text-sm sm:text-base">Token Name:</span>
            <span className="font-display text-gold text-lg sm:text-xl">POPEYE SOLANA</span>
          </div>
          
          {/* Symbol */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 border-b border-border/30 pb-3">
            <span className="font-heading text-muted-foreground text-sm sm:text-base">Symbol:</span>
            <span className="font-display text-secondary text-lg sm:text-xl">$POPEYE</span>
          </div>
          
          {/* Contract Address */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between items-start">
              <span className="font-heading text-muted-foreground text-sm sm:text-base">Contract Address:</span>
            </div>
            <div className="bg-primary/50 rounded-lg p-2 sm:p-3 break-all">
              <code className="text-foreground/90 text-xs sm:text-sm font-mono">
                {contractAddress}
              </code>
            </div>
            
            <button
              onClick={handleCopy}
              className="btn-gold w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-base">COPY CONTRACT ADDRESS</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
