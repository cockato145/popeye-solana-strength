import { ExternalLink, Globe, Youtube, Send } from 'lucide-react';

const navLinks = [
  { name: 'WEBSITE', url: 'https://popeyesolana.fun', icon: Globe },
  { name: 'YOUTUBE', url: 'https://www.youtube.com/@Popeyesolana', icon: Youtube },
  { name: 'X', url: 'https://x.com/Popeye_solana', icon: ExternalLink },
  { name: 'TELEGRAM', url: 'https://t.me/Popeye_community', icon: Send },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full py-4 px-4 bg-primary/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold py-2 px-4 md:py-3 md:px-6 rounded-xl flex items-center gap-2 text-sm md:text-base hover:scale-105 transition-transform"
            >
              <link.icon className="w-4 h-4" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
