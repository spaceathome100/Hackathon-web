import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProblemStatementsSection from "@/components/ProblemStatementsSection";
import ScheduleSection from "@/components/ScheduleSection";
import PrizesSection from "@/components/PrizesSection";
import FAQSection from "@/components/FAQSection";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProblemStatementsSection />
      <ScheduleSection />
      <PrizesSection />
      <RegisterSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
