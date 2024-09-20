import { useState, useEffect } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  const urls = ["/1.jpeg", "/3.jpg"];  // Ensure these are in the /public folder

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % urls.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [urls.length]);

  return (
    <div className="duration-1000"
      style={{
        backgroundImage: `url(${urls[index]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="bg-[rgba(0,0,0,0.6)] w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-bold text-center uppercase">
          Welcome to
        </h1>
        <p className="text-white text-7xl font-bold text-center uppercase">
          Gawsia International Trade
        </p>
      </div>
    </div>
  );
}
