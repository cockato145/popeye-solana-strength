import CollectibleCard from './CollectibleCard';
import popeyeClassic from '@/assets/popeye-classic.jpeg';
import popeyeModern from '@/assets/popeye-modern.jpeg';
import popeyeCrypto from '@/assets/popeye-crypto.jpeg';
import popeyeSamurai from '@/assets/popeye-samurai.jpeg';
import popeyeCyber from '@/assets/popeye-cyber.jpeg';

const cards = [
  { image: popeyeClassic, title: 'SPINACH SAILOR', subtitle: 'Classic Form' },
  { image: popeyeModern, title: 'IRON HOLD', subtitle: 'Modern Form' },
  { image: popeyeCrypto, title: 'SOLANA SAILOR', subtitle: 'Crypto Form' },
  { image: popeyeSamurai, title: 'DISCIPLINE FORM', subtitle: 'Samurai Form' },
  { image: popeyeCyber, title: 'CYBER CONVICTION', subtitle: 'Cyber Form' },
];

const CardGallery = () => {
  // Double the cards for seamless loop
  const allCards = [...cards, ...cards];

  return (
    <section className="relative py-8 overflow-hidden">
      {/* Top Row - Scrolling Left */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-left" style={{ width: 'max-content' }}>
          {allCards.map((card, index) => (
            <CollectibleCard
              key={`top-${index}`}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGallery;
