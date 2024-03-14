import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="max-w-xxl mx-auto relative  ">
        <div
          aria-hidden="true"
          className="absolute inset-0 top-32 h-max w-full m-auto grid grid-cols-2 gap-20 md:gap-60 opacity-40"
        >
          <div className="blur-[100px] h-56 bg-gradient-to-br from-cyan-600 to-cyan-900"></div>
          <div className="blur-[100px] h-56 bg-gradient-to-r from-purple-600 to-purple-900"></div>
        </div>
        <div className="text-center">
          <div className="max-w-[60rem] mx-auto mt-44 relative space-y-7 z-10">
            <h1 className="lg:text-5xl md:text-3xl text-xl font-bold logo-text leading-relaxed">
              Discover the Power of Design <br /> with
              <span className=""> EliteX UI</span> For Seamless Creation
            </h1>
            <p className="lg:text-lg md:text-base text-sm">
              Welcome to <span className="logo-text"> EliteX UI,</span> where creativity knows no bounds. Dive into our meticulously designed components crafted to ignite your imagination. Revolutionize your UI design experience with Loom UI, every element crafted with precision.
            </p>
            <div className="flex items-center justify-center gap-x-3">
              <Link to={"/components/avatar"}>
                <button  color="amber" className="btn" size="lg">
                  Explore Components
                </button>
              </Link>
              <Link to={"/documention"}>
                <Button className="capitalize" size="lg">
                  Dive into Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
