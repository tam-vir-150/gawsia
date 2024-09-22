import { useEffect, useRef, useState } from 'react';

export default function Home({ title, description, bg, delay }) {
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
      className={`w-11/12 h-full bg-white rounded-2xl shdw p-6 flex flex-col items-center 
      transition-all duration-500 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } duration-200`}
      style={{ transitionDelay: `${delay}s` }} 
    >
      <div className="w-2/3 aspect-square rounded-xl">
        <div className="w-full h-full overflow-hidden">
          <img src={bg} className="w-full h-full hover:scale-110 duration-200" />
        </div>
      </div>
      <div className="w-full h-full p-4">
        <h1 className="text-gray-700 text-xl font-black uppercase">{title}</h1>
        <br />
        <p className="text-gray-700 text-xl text-justify">{description}</p>
      </div>
      <div className="w-full h-1/5 flex justify-end items-center">
        <a
          href="#"
          className="text-lg text-white bg-gray-800 px-8 py-3 text-center hover:scale-90 hover:bg-gray-700 duration-200 rounded"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
