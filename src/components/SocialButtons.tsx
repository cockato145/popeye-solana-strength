import { ExternalLink } from 'lucide-react';

const socials = [
  { name: 'DEXSCREENER', url: 'https://popeyesolana.fun' },
  { name: 'X (TWITTER)', url: 'https://x.com/Popeye_solana' },
  { name: 'COMMUNITY', url: 'https://www.youtube.com/@Popeyesolana' },
];

const SocialButtons = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="card-navy rounded-2xl p-4 flex flex-wrap justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold py-3 px-6 rounded-xl flex items-center gap-2 text-base hover:scale-105 transition-transform"
            >
              <span>{social.name}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialButtons;
