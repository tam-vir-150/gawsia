import Image from "next/image";
import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";
import Section1 from "@/components/card1";
export default function Home() {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <Carousel />
      <Section1 />
    </div>
  );
}
