import { useEffect, useRef, useState } from "react";

export default function Home({ title, description, bg, reversed }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full h-2/3 bg-gray-100 grid grid-cols-2 gap-8 place-items-center p-8 transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {reversed ? (
        <>
          <div className="w-full h-full grid place-items-center">
            <div
              className={`w-3/4 aspect-video bg-center bg-cover rounded-lg shadow-lg`}
              style={{ backgroundImage: `url('${bg}')` }}
            ></div>
          </div>
          <div className="w-3/4 h-full p-8 flex flex-col justify-center  bg-white rounded-lg shadow-md">
            <h1 className="text-gray-800 text-5xl font-bold leading-tight text-center uppercase tracking-wider">
              {title}
            </h1>
            <p className="text-gray-600 text-lg text-justify mt-6">
              {description}
            </p>
            <div className="grid place-content-center mt-8">
              <a
                href="#"
                className="text-lg text-white bg-gradient-to-r from-gray-800 to-gray-600 px-8 py-4 text-center rounded-md shadow-md transform transition duration-300 hover:scale-95 hover:from-gray-700 hover:to-gray-500"
              >
                Learn More
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-3/4 h-full p-8 flex flex-col justify-center bg-white rounded-lg shadow-md">
            <h1 className="text-gray-800 text-5xl font-bold leading-tight text-center uppercase tracking-wider">
              {title}
            </h1>
            <p className="text-gray-600 text-lg text-justify mt-6">
              {description}
            </p>
            <div className="grid place-content-center mt-8">
              <a
                href="#"
                className="text-lg text-white bg-gradient-to-r from-gray-800 to-gray-600 px-8 py-4 text-center rounded-md shadow-md transform transition duration-300 hover:scale-95 hover:from-gray-700 hover:to-gray-500"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full h-full grid place-items-center">
            <div
              className={`w-3/4 aspect-video bg-center bg-cover rounded-lg shadow-lg`}
              style={{ backgroundImage: `url('${bg}')` }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
}
