
export default function Home() {
    return (
      <div className="w-full h-2/3 bg-white grid grid-cols-2 gap-4 place-items-center">
        <div className="w-3/4 h-full p-4 flex flex-col justify-center">
            
            <h1 className="text-gray-800 text-6xl font-semibold text-center uppercase">
                Our Services
            </h1>
            <br />
            <p className=" text-gray-800 text-xl text-justify ">
            With the passage of time, as the world is moving forward, the demand for quality products is also increasing in the market. We at Gawsia International Trade have been working for more than 6 years to fulfill the needs of the customers for these quality products. Generally, we provide all kinds of knitting equipment (example: needle, sinker, marker, needle oil), lift, generator, and IT solution service.
            </p>
            <br />
            <br />
            <div className="grid place-content-center">
            <a href="#" className="text-lg text-white bg-gray-800 px-8 py-4 text-center hover:scale-90 hover:bg-gray-700 duration-200"> Learn More</a>
            </div>
        </div>
        <div className="w-full h-full  grid place-items-center">
            <div className="w-3/4 aspect-video bg-[url('/2.jpg')] bg-center bg-cover"></div>
        </div>
      </div>
    );
  }