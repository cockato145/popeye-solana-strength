import popeyeClassic from '@/assets/popeye-classic.jpeg';
import popeyeCrypto from '@/assets/popeye-crypto.jpeg';

const FeatureCards = () => {
  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative min-h-[500px] flex items-center justify-center">
        {/* Left Card */}
        <div 
          className="absolute left-[5%] md:left-[15%] animate-float"
          style={{ transform: 'rotate(-8deg)' }}
        >
          <div className="collectible-frame rounded-2xl overflow-hidden w-64 md:w-80 h-80 md:h-[420px] relative">
            <img 
              src={popeyeClassic} 
              alt="Strength Form"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h3 className="font-display text-gold text-2xl text-shadow-gold">STRENGTH FORM</h3>
            </div>
          </div>
        </div>
        
        {/* Right Card */}
        <div 
          className="absolute right-[5%] md:right-[15%] animate-float-delayed"
          style={{ transform: 'rotate(8deg)', animationDelay: '2s' }}
        >
          <div className="collectible-frame rounded-2xl overflow-hidden w-64 md:w-80 h-80 md:h-[420px] relative">
            <img 
              src={popeyeCrypto} 
              alt="Conviction Form"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h3 className="font-display text-gold text-2xl text-shadow-gold">CONVICTION FORM</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
