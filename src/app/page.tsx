import Navbar from "@/components/Navbar";
import HeroA from "@/components/HeroA";
import HeroB from "@/components/HeroB";
import LogoWall from "@/components/LogoWall";
import ProblemSection from "@/components/ProblemSection";
import ServiceTabs from "@/components/ServiceTabs";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

// In Next.js 16, searchParams is a Promise — must await it.
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const variant = params.variant;
  const isVariantB = variant === "b";

  return (
    <main className="flex flex-col flex-1">
      <Navbar />

      {/* A/B Hero: ?variant=b shows HeroB (result-focused), default is HeroA (problem-aware) */}
      {isVariantB ? <HeroB /> : <HeroA />}

      <LogoWall />
      <ProblemSection />
      <ServiceTabs />
      <SocialProof />
      <Testimonials />
      <Features />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
