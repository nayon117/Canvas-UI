/* eslint-disable no-unused-vars */
// import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useTheme from "../../Hooks/useThem";


const HomeBanner = () => {
    const { mode } = useTheme();

    return (
        <div className={`${mode === "dark" ? "text-white" : ""}`}>
            {/* <div className={`min-h-screen mx-auto text-center max-w-[60rem] mt-44 space-y-7 z-10 `}> */}
            <div className="mx-auto text-center max-w-[60rem]  mt-44 space-y-7 z-10 mb-24">
                <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">
                    Discover the Power of Design <br /> with
                    <span className=""> EliteX UI</span> For Seamless Creation
                </h1>


                <p className="lg:text-lg md:text-base text-sm">
                    Welcome to <span className=""> EliteX UI,</span> where creativity knows no bounds. Dive into our meticulously designed components crafted to ignite your imagination. Revolutionize your UI design experience with Loom UI, every element crafted with precision.
                </p>
                <div className="flex items-center justify-center gap-x-3">
                    <Link to={"/components/avatar"}>
                        <button className={`btn1`} size="lg">
                            Explore Components
                        </button>
                    </Link>
                    <Link to={"/documentation"}>
                        <button className={`btn2`} size="lg">
                            Dive into Documentation
                        </button>
                    </Link>
                </div>
            </div>
            <hr className="border-[0.5px] border-gray-700 w-1/2"/>
        </div>
    );
};

export default HomeBanner;
