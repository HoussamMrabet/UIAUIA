import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Crazy from "@/components/Crazy";
import Hero from "@/components/Hero";
import Please from "@/components/Please";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Crazy /> */}
      <About />
      <Please />
      <Footer />
    </>
  );
}
