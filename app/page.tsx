import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrackRecord from "@/components/TrackRecord";
import Partnerships from "@/components/Partnerships";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import StrategicSkill from "@/components/StrategicSkill";
import CATFramework from "@/components/CATFramework";
import DeliverResults from "@/components/DeliverResults";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <TrackRecord />
      <Partnerships />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <StrategicSkill />
      <CATFramework />
      <DeliverResults />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
