import { ExternalLink, Globe, Youtube, Send } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const navLinks = [
  { name: 'WEBSITE', url: 'https://popeyesolana.fun', icon: Globe },
  { name: 'YOUTUBE', url: 'https://www.youtube.com/@Popeyesolana', icon: Youtube },
  { name: 'X', url: 'https://x.com/Popeye_solana', icon: ExternalLink },
  { name: 'TELEGRAM', url: 'https://t.me/Popeye_community', icon: Send },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full py-3 px-4 bg-primary/90 backdrop-blur-md border-b border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <img 
              src={logo} 
              alt="POPEYE SOLANA" 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gold shadow-lg object-cover"
            />
            <span className="font-display text-gold text-xl md:text-2xl text-shadow-gold hidden sm:block">
              POPEYE
            </span>
          </a>
          
          {/* Nav Links */}
          <div className="flex flex-wrap justify-end gap-2 md:gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold py-2 px-3 md:py-2 md:px-5 rounded-xl flex items-center gap-2 text-xs md:text-sm hover:scale-105 transition-transform"
              >
                <link.icon className="w-4 h-4" />
                <span className="hidden md:inline">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
