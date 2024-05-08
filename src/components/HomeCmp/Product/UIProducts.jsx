/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import ProductNav from "./ProductNav";
import useTheme from "../../../Hooks/useThem";

const UIProducts = () => {
    const { mode } = useTheme();
    return (
        <div className="w-full md:w-8/12 mx-auto my-12">
            <div className="my-4">
                <h6 className={`text-sm font-light ${mode === "dark" ? "text-yellow-green" : "text-darkGreen font-medium"}`}>Products</h6>
                <h3 className="text-2xl">Every component you need is <span className={` font-extrabold ${mode === "dark" ? "text-yellow-green" : "text-darkGreen"}`}>ready for production</span></h3>
               <p className="text-sm font-light"> Build at an accelerated pace without sacrificing flexibility or control.</p>
            </div>
            <div className=" flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-1/2">
                    <ProductNav />
                </div>
                <div className={` w-full lg:w-1/2 shadow-lg rounded-md ${mode === "dark" ? "bg-darkNavy border border-darkNavy ":"border border-gray-400 bg-grayishBlue"}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default UIProducts;