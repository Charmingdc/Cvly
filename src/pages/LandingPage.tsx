import HeroSection from "@/components/landing-page/HeroSection";
import HowItWorks from "@/components/landing-page/HowItWorks";
import FeatureHighlights from "@/components/landing-page/FeatureHighlights";
import CredibilitySection from "@/components/landing-page/CredibilitySection";
import TestimonialSection from "@/components/landing-page/TestimonialSection";
import CallOut from "@/components/landing-page/CallOut";


const LandingPage = () => {
  return (
    <div className='w-screen flex flex-col items-center gap-20 p-3'>
      <HeroSection />
      <HowItWorks />
      <FeatureHighlights />
      <CredibilitySection />
      <TestimonialSection />
      <CallOut />
    </div>
  );
};

export default LandingPage;
