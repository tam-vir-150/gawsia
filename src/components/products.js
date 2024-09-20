import ProductCard from "@/components/productcard";
export default function Home() {
  const descriptions = {
    product1: "The high speed leggings knitting machine possesses 2 tracks for the dial and 4 tracks for the cylinder. The arrangement of cams and needles can be changed to knit a variety of double jersey seamless fabrics,…"
  }
  return (
    <div className="w-full h-[110%] p-6 bg-white flex flex-col items-center">
        <h1 className="text-gray-900 text-6xl font-black text-center">Products</h1>
        <hr className="w-1/2 hbar"/>
        <div className="w-full h-full bg-white grid grid-cols-3">
      <div className="w-full h-full p-6 flex flex-col items-center justify-start">
        <ProductCard title={"Double Jersey Machines"} description={descriptions.product1} bg={"/p1.jpg"}/>
      </div>
      <div className="w-full h-full p-6 flex flex-col items-center justify-center">
      <ProductCard title={"Electronic Jacquard Machines"} description={descriptions.product1} bg={"/p2.jpg"}/>
      </div>
      <div className="w-full h-full p-6 flex flex-col items-center justify-end">
      <ProductCard title={"Single Jersey Machines"} description={descriptions.product1} bg={"/p3.jpg"}/>
      </div>
    </div>
    
    </div>
  );
}
