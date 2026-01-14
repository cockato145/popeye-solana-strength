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
    <section className="py-8 px-4">
      <div className="max-w-xl mx-auto">
        <div className="card-navy rounded-2xl p-6 space-y-4">
          {/* Token Name */}
          <div className="flex justify-between items-center border-b border-border/30 pb-3">
            <span className="font-heading text-muted-foreground">Token Name:</span>
            <span className="font-display text-gold text-xl">POPEYE SOLANA</span>
          </div>
          
          {/* Symbol */}
          <div className="flex justify-between items-center border-b border-border/30 pb-3">
            <span className="font-heading text-muted-foreground">Symbol:</span>
            <span className="font-display text-secondary text-xl">$POPEYE</span>
          </div>
          
          {/* Contract Address */}
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <span className="font-heading text-muted-foreground">Contract Address:</span>
            </div>
            <div className="bg-primary/50 rounded-lg p-3 break-all">
              <code className="text-foreground/90 text-sm font-mono">
                {contractAddress}
              </code>
            </div>
            
            <button
              onClick={handleCopy}
              className="btn-gold w-full py-3 px-6 rounded-xl flex items-center justify-center gap-3 text-lg"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>COPY CONTRACT ADDRESS</span>
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
