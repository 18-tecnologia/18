import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";
import Cultura from "@/components/Culture";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Cultura />
      <Services />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
