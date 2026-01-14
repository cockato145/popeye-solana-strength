import Navbar from '@/components/Navbar';
import HeroLogo from '@/components/HeroLogo';
import CardGallery from '@/components/CardGallery';
import AboutBox from '@/components/AboutBox';
import PromptBox from '@/components/PromptBox';
import TokenInfo from '@/components/TokenInfo';
import FeatureCards from '@/components/FeatureCards';
import IconStrip from '@/components/IconStrip';
import FinalLogo from '@/components/FinalLogo';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroLogo />
      
      {/* Card Gallery - Scrolling Collectibles */}
      <CardGallery />
      
      {/* About Box */}
      <AboutBox />
      
      {/* Prompt Box */}
      <PromptBox />
      
      {/* Token Info */}
      <TokenInfo />
      
      {/* Feature Cards - Floating Angled Cards */}
      <FeatureCards />
      
      {/* Icon Strip - Scrolling Icons */}
      <IconStrip />
      
      {/* Final Logo Section */}
      <FinalLogo />
    </div>
  );
};

export default Index;
