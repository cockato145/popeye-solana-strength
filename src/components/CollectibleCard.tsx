import { useState, useRef } from 'react';

interface CollectibleCardProps {
  image: string;
  title: string;
  subtitle: string;
}

const CollectibleCard = ({ image, title, subtitle }: CollectibleCardProps) => {
  const [transform, setTransform] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      className="relative w-72 h-96 cursor-pointer flex-shrink-0 mx-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: 'transform 0.15s ease-out' }}
    >
      {/* Card Frame */}
      <div className="absolute inset-0 collectible-frame rounded-2xl overflow-hidden">
        {/* Inner Glow */}
        <div className="absolute inset-2 bg-gradient-to-b from-navy-light/20 to-transparent rounded-xl" />
        
        {/* Character Image */}
        <div className="absolute inset-4 rounded-xl overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
        </div>
        
        {/* Title Area */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <h3 className="font-display text-gold text-2xl text-shadow-gold tracking-wider">
            {title}
          </h3>
          <p className="font-heading text-foreground/80 text-sm mt-1">
            {subtitle}
          </p>
        </div>
        
        {/* Corner Accents */}
        <div className="absolute top-2 left-2 w-6 h-6 border-l-4 border-t-4 border-gold/60 rounded-tl-lg" />
        <div className="absolute top-2 right-2 w-6 h-6 border-r-4 border-t-4 border-gold/60 rounded-tr-lg" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-l-4 border-b-4 border-gold/60 rounded-bl-lg" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-r-4 border-b-4 border-gold/60 rounded-br-lg" />
      </div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-spinach-glow/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </div>
  );
};

export default CollectibleCard;
