
import AboutSection from "@/components/custom/about-section";
import FooterSection from "@/components/custom/footer-1";

import HeroHeader from "@/components/custom/header"

export default function AboutUs() {
  return (<div className="dark:bg-background">
    <HeroHeader />
    <AboutSection></AboutSection>
    <FooterSection></FooterSection>
  </div>
  );
}
