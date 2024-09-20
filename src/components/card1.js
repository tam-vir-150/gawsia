
export default function Home({title, description, bg, reversed}) {
    if(!reversed){
      return (
        <div className="w-full h-2/3 bg-white grid grid-cols-2 gap-4 place-items-center">
          <div className="w-3/4 h-full p-4 flex flex-col justify-center">
              
              <h1 className="text-gray-800 text-6xl font-semibold text-center uppercase">
                  {title}
              </h1>
              <br />
              <p className=" text-gray-800 text-xl text-justify ">
              {description}
              </p>
              <br />
              <br />
              <div className="grid place-content-center">
              <a href="#" className="text-lg text-white bg-gray-800 px-8 py-4 text-center hover:scale-90 hover:bg-gray-700 duration-200"> Learn More</a>
              </div>
          </div>
          <div className="w-full h-full  grid place-items-center ">
              <div className={`w-3/4 aspect-video bg-center bg-cover`} style={{backgroundImage: `url('${bg}')`}}></div>
          </div>
        </div>
      );
    }
    else{
      return (
        <div className="w-full h-2/3 bg-white grid grid-cols-2 gap-4 place-items-center">
          <div className="w-full h-full  grid place-items-center ">
              <div className={`w-3/4 aspect-video bg-center bg-cover`} style={{backgroundImage: `url('${bg}')`}}></div>
          </div>
          <div className="w-3/4 h-full p-4 flex flex-col justify-center">
              
              <h1 className="text-gray-800 text-6xl font-semibold text-center uppercase">
                  {title}
              </h1>
              <br />
              <p className=" text-gray-800 text-xl text-justify ">
              {description}
              </p>
              <br />
              <br />
              <div className="grid place-content-center">
              <a href="#" className="text-lg text-white bg-gray-800 px-8 py-4 text-center hover:scale-90 hover:bg-gray-700 duration-200"> Learn More</a>
              </div>
          </div>
          
        </div>
      );
    }
    
  }