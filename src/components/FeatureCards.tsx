import popeyeClassic from '@/assets/popeye-classic.jpeg';
import popeyeCrypto from '@/assets/popeye-crypto.jpeg';

const FeatureCards = () => {
  return (
    <section className="py-8 md:py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
        {/* Left Card */}
        <div 
          className="relative md:absolute md:left-[5%] lg:left-[15%] animate-float"
          style={{ transform: 'rotate(-8deg)' }}
        >
          <div className="collectible-frame rounded-2xl overflow-hidden w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-[420px] relative">
            <img 
              src={popeyeClassic} 
              alt="Strength Form"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 text-center">
              <h3 className="font-display text-gold text-lg sm:text-xl md:text-2xl text-shadow-gold">STRENGTH FORM</h3>
            </div>
          </div>
        </div>
        
        {/* Right Card */}
        <div 
          className="relative md:absolute md:right-[5%] lg:right-[15%] animate-float-delayed"
          style={{ transform: 'rotate(8deg)', animationDelay: '2s' }}
        >
          <div className="collectible-frame rounded-2xl overflow-hidden w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-[420px] relative">
            <img 
              src={popeyeCrypto} 
              alt="Conviction Form"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 text-center">
              <h3 className="font-display text-gold text-lg sm:text-xl md:text-2xl text-shadow-gold">CONVICTION FORM</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
