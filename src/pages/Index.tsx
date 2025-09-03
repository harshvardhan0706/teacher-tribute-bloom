import Hero from "@/components/Hero";
import About from "@/components/About";
import Wishes from "@/components/Wishes";
import Surprise from "@/components/Surprise";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Wishes />
      <Surprise />
      <Footer />
    </main>
  );
};

export default Index;
