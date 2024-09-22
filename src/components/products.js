import ProductCard from "@/components/productcard";

export default function Home() {
  const descriptions = {
    product1: "Installing closed tracks cams including knit, tuck and miss cams, the Single Jersey Machine is designed with a central stitch control system to adjust different levels of fabric density easily and conveniently...",
    product2: "Installing closed 2 tracks cam in dial and 4 tracks cams in cylinder, the double jersey machine can knit many kinds of fabric...",
    product3: "Various of jacquard patterns can be input to the machine by USB device, electronic jacquard machine aims to keep up with current fashion trends..."
  };

  return (
    <div className="w-full h-auto p-6 bg-white flex flex-col items-center">
      <h1 className="text-gray-900 text-6xl font-black text-center uppercase">Products</h1>
      <hr className="w-1/2 hbar" />
      <div className="w-full h-full grid grid-cols-3 gap-8">
        <div className="p-6 flex justify-center">
          <ProductCard 
            title="Single Jersey Machines" 
            description={descriptions.product1} 
            bg="/p3.jpg" 
            delay={0.1} // Delay for the first card
          />
        </div>
        <div className="p-6 flex justify-center">
          <ProductCard 
            title="Double Jersey Machines" 
            description={descriptions.product2} 
            bg="/p1.jpg" 
            delay={0.2} // Delay for the second card
          />
        </div>
        <div className="p-6 flex justify-center">
          <ProductCard 
            title="Electronic Jacquard Machines" 
            description={descriptions.product3} 
            bg="/p2.jpg" 
            delay={0.3} // Delay for the third card
          />
        </div>
      </div>
    </div>
  );
}
