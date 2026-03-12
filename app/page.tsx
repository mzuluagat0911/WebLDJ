import { HeroSection } from "./components/HeroSection";
import { MeatEventsSection } from "./components/MeatEventsSection";
import { SocialPressSection } from "./components/SocialPressSection";
import { SiteFooter } from "./components/SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans">
      <HeroSection />
      <MeatEventsSection />
      <SocialPressSection />
      <SiteFooter />
    </main>
  );
}
