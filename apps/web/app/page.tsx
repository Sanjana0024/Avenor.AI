import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import DashboardPreview from "@/components/landing/DashboardPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <DashboardPreview />
    </main>
  );
}