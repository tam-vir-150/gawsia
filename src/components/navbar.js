import Image from "next/image";
import Dropdown from "./dropdown";
export default function Home() {
    const units = ["Circular Knitting Machine"]
    /**
     * make an array of Products
1. Single Jersey Machines
2. Double Jersey Machines
3. Electronic Jacquard Machines
     */
    const products = ["Single Jersey Machines", "Double Jersey Machines", "Electronic Jacquard Machines"]

  return (
    <nav className="w-screen p-4 flex justify-around items-center">
      <Image className="ml-0" src={"/logo.png"} width={120} height={120} />
      <ul className="flex gap-10 text-gray-600 mr-10 uppercase">
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-200">
          <a href="#" >Home</a>
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-200">
          <a href="#" >About Us</a>
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-200">
          <Dropdown title={"Business Unit"} items={units}/>
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-200">
        <Dropdown title={"Products"} items={products}/>
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-200">
          <a href="#" >Clients</a>
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-200">
          <a href="#" >Gallery</a>
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-200">
          <a href="#" >Contact Us</a>
        </li>
        
      </ul>

    </nav>
  );
}
