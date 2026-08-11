import HeroSection from "@/components/ui/landing-page/hero-section";
import NavBar from "@/components/ui/navbar/navbar";
import Featured from "@/components/ui/featured-section/featured";
import RecentlyLaunched from "@/components/ui/recently-launched/recently-launched";
export default function Home() {
  return (
    <main>
      <NavBar/>
      <HeroSection />
      <RecentlyLaunched/>
    </main>
  );
}
