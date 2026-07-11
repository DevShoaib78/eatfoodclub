import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Why from "@/components/Why";
import PerfectFor from "@/components/PerfectFor";
import Faq from "@/components/Faq";
import Order from "@/components/Order";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Menu />
        <Why />
        <PerfectFor />
        <Faq />
        <Order />
      </main>
      <Footer />
    </>
  );
}
