/* eslint-disable react/no-unescaped-entities */

import useTheme from "../../Hooks/useThem";
import { FaHandHoldingDroplet } from "react-icons/fa6";
import { SiInstructables } from "react-icons/si";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { PiUserFocusBold } from "react-icons/pi";






const WhyUs = () => {
    const { mode } = useTheme();
    return (
        <div>
            <div className="w-8/12 mx-auto my-12">
                <h6 className={`text-sm font-light ${mode === "dark"?"text-yellow-green":"text-darkGreen font-medium"}`}>Why build with EX-UI?</h6>
                <h3 className="text-2xl">A <span className={` font-extrabold ${mode === "dark" ? "text-yellow-green" : "text-darkGreen"}`}>delightful experience</span> <br />for you and your users</h3>

                <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* reason-1  */}
                    <div className={`rounded-lg p-4 
                    ${mode === "dark" ?
                            "bg-bluish-green  border-bluish-green "
                            :
                            "bg-paleAqua border border-paleAqua"}`}>
                        <h1
                            className={`p-4 rounded-lg w-1/4 shadow-lg mb-6
                       ${mode === "dark" ?
                                    "border-darkNavy bg-darkNavy"
                                    :
                                    "border-paleAqua bg-grayishBlue"}`}>
                            <FaHandHoldingDroplet
                                className="text-4xl " />
                        </h1>
                        <h1
                            className="text-lg font-bold">
                            Timeless aesthetics
                        </h1>
                        <p
                            className="text-sm font-light my-2">
                            Build beautiful UIs with ease. Start with Google's Material Design, or create your own sophisticated theme.
                        </p>
                    </div>

                    {/* reason-2  */}

                    <div className={`rounded-lg p-4 
                    ${mode === "dark" ?
                            "bg-bluish-green  border-bluish-green "
                            :
                            "bg-paleAqua border border-paleAqua"}`}>
                        <h1
                            className={`p-4 rounded-lg w-1/4 shadow-lg mb-6 
                        ${mode === "dark" ?
                                    "border-darkNavy bg-darkNavy"
                                    :
                                    "border-paleAqua bg-grayishBlue"}`}>
                            <SiInstructables
                                className="text-4xl " />
                        </h1>
                        <h1
                            className="text-lg font-bold">
                            Intuitive customization
                        </h1>
                        <p
                            className="text-sm font-light my-2">
                            Our components are as flexible as they are powerful. You always have full control over how they look and behave.
                        </p>
                    </div>

                    {/* Reason-3  */}
                    <div className={`rounded-lg p-4 
                    ${mode === "dark" ?
                            "bg-bluish-green  border-bluish-green "
                            :
                            "bg-paleAqua border border-paleAqua"}`}>
                        <h1
                            className={`p-4 rounded-lg w-1/4 shadow-lg mb-6 
                        ${mode === "dark" ?
                                    "border-darkNavy bg-darkNavy"
                                    :
                                    "border-paleAqua bg-grayishBlue"}`}>
                            <MdOutlineDocumentScanner
                                className="text-4xl " />
                        </h1>
                        <h1
                            className="text-lg font-bold">
                            Unrivaled documentation
                        </h1>
                        <p
                            className="text-sm font-light my-2">
                            The answer to your problem can be found in our documentation. How can we be so sure? Because our docs boast over 2,000 contributors.
                        </p>
                    </div>

                    {/* Reason-4  */}

                    <div className={`rounded-lg p-4 
                    ${mode === "dark" ?
                            "bg-bluish-green  border-bluish-green "
                            :
                            "bg-paleAqua border border-paleAqua"}`}>
                        <h1
                            className={`p-4 rounded-lg w-1/4 shadow-lg mb-6 
                         ${mode === "dark" ?
                                    "border-darkNavy bg-darkNavy"
                                    :
                                    "border-paleAqua bg-grayishBlue"}`}>
                            <PiUserFocusBold
                                className="text-4xl " />
                        </h1>
                        <h1
                            className="text-lg font-bold">
                            Dedicated to accessibility
                        </h1>
                        <p
                            className="text-sm font-light my-2">
                            We believe in building for everyone. That's why accessibility is one of our highest priorities with every new feature we ship.
                        </p>
                    </div>
                </div>
            </div>

             <hr className="border-[0.5px] border-gray-700 w-1/2"/>
        </div>
    );
};

export default WhyUs;