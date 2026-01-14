import Navbar from '@/components/Navbar';
import HeroLogo from '@/components/HeroLogo';
import CardGallery from '@/components/CardGallery';
import AboutBox from '@/components/AboutBox';
import PromptBox from '@/components/PromptBox';
import TokenInfo from '@/components/TokenInfo';
import FeatureCards from '@/components/FeatureCards';
import IconStrip from '@/components/IconStrip';
import FinalLogo from '@/components/FinalLogo';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden animate-page-load">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <ScrollReveal direction="scale">
        <HeroLogo />
      </ScrollReveal>
      
      {/* Card Gallery - Scrolling Collectibles */}
      <ScrollReveal direction="up" delay={100}>
        <CardGallery />
      </ScrollReveal>
      
      {/* About Box */}
      <ScrollReveal direction="left" delay={150}>
        <AboutBox />
      </ScrollReveal>
      
      {/* Prompt Box */}
      <ScrollReveal direction="right" delay={150}>
        <PromptBox />
      </ScrollReveal>
      
      {/* Token Info */}
      <ScrollReveal direction="up" delay={100}>
        <TokenInfo />
      </ScrollReveal>
      
      {/* Feature Cards - Floating Angled Cards */}
      <ScrollReveal direction="scale" delay={150}>
        <FeatureCards />
      </ScrollReveal>
      
      {/* Icon Strip - Scrolling Icons */}
      <ScrollReveal direction="up" delay={100}>
        <IconStrip />
      </ScrollReveal>
      
      {/* Final Logo Section */}
      <ScrollReveal direction="scale" delay={200}>
        <FinalLogo />
      </ScrollReveal>
    </div>
  );
};

export default Index;
