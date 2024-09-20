"use client"
import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";
import Section1 from "@/components/card1";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <Carousel />
      <Section1 />
      <Footer />
    </div>
  );
}
