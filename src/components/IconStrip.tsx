import { Anchor, Dumbbell, Shield, Leaf, Coins } from 'lucide-react';

const icons = [
  { Icon: Leaf, label: 'Spinach' },
  { Icon: Anchor, label: 'Anchor' },
  { Icon: Shield, label: 'Badge' },
  { Icon: Dumbbell, label: 'Strength' },
  { Icon: Coins, label: 'Solana' },
];

const IconStrip = () => {
  // Triple for seamless loop
  const allIcons = [...icons, ...icons, ...icons];

  return (
    <section className="py-8 overflow-hidden">
      <div className="relative">
        <div 
          className="flex items-center gap-12 animate-scroll-left"
          style={{ width: 'max-content' }}
        >
          {allIcons.map((item, index) => (
            <div 
              key={index} 
              className="icon-strip-item flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/60 border-2 border-gold/40 flex items-center justify-center hover:border-spinach-glow transition-colors">
                <item.Icon className="w-8 h-8 text-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconStrip;
