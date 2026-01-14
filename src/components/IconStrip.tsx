import popeyeClassic from '@/assets/popeye-classic.jpeg';
import popeyeCrypto from '@/assets/popeye-crypto.jpeg';
import popeyeCyber from '@/assets/popeye-cyber.jpeg';
import popeyeModern from '@/assets/popeye-modern.jpeg';
import popeyeSamurai from '@/assets/popeye-samurai.jpeg';
import logo from '@/assets/logo.jpeg';

const images = [
  { src: popeyeClassic, alt: 'Popeye Classic' },
  { src: popeyeCrypto, alt: 'Popeye Crypto' },
  { src: popeyeCyber, alt: 'Popeye Cyber' },
  { src: popeyeModern, alt: 'Popeye Modern' },
  { src: popeyeSamurai, alt: 'Popeye Samurai' },
  { src: logo, alt: 'Popeye Logo' },
];

const IconStrip = () => {
  // Triple for seamless loop
  const allImages = [...images, ...images, ...images];

  return (
    <section className="py-8 overflow-hidden">
      <div className="relative">
        <div 
          className="flex items-center gap-12 animate-scroll-left"
          style={{ width: 'max-content' }}
        >
          {allImages.map((item, index) => (
            <div 
              key={index} 
              className="icon-strip-item flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl border-2 border-gold/40 flex items-center justify-center hover:border-spinach-glow transition-all duration-300 overflow-hidden group">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-125"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconStrip;
