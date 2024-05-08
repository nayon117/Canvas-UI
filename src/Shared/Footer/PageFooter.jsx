import { useState } from "react";
import PageLogo from "../PageLogo/PageLogo";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import useTheme from "../../Hooks/useThem";




const PageFooter = () => {
    const [email, setEmail] = useState("");
    const { mode } = useTheme(); 
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your subscription logic here
        console.log("Subscribed with email:", email);
        // Clear the email input after submission
        setEmail("");
    };

    return (
        <div className="w-10/12 mx-auto font-roboto">
            <div className="flex flex-col md:flex-row justify-between my-4">
                {/* lg: column 1  */}
                <div className="w-full md:w-4/12 my-8">
                    <PageLogo />
                    Keep up to date <br />
                    Join our newsletter for regular updates. No spam ever.
                    <div>
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <label htmlFor="email" className="mr-2 text-xs font-extralight mt-4 mb-2">
                                Your Email:
                            </label>
                            <div className="flex">
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleChange}
                                    // placeholder="Enter your email"
                                    className={` bg-transparent px-2 py-1 mr-2 focus:none ring-0 outline-0 ${mode === "dark" ? "border border-[#d9fe54]" : "border border-black "}`}
                                    required
                                />
                                <button type="submit" className="btn2">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-8/12 grid grid-cols-2 md:grid-cols-4 ml-12 my-12">
                    {/* lg: column 2  */}
                    <div>
                        <h1>Product</h1>
                        <h4>xui</h4>
                        <h4>yui</h4>
                        <h4>zui</h4>
                    </div>
                    {/* lg: column 3  */}
                    <div>
                        <h1>Product</h1>
                        <h4>xui</h4>
                        <h4>yui</h4>
                        <h4>zui</h4>
                    </div>
                    {/* lg: column 4  */}
                    <div>
                        <h1>Product</h1>
                        <h4>xui</h4>
                        <h4>yui</h4>
                        <h4>zui</h4>
                    </div>
                    {/* lg: column 5 */}
                    <div>
                        <h1>Product</h1>
                        <h4>xui</h4>
                        <h4>yui</h4>
                        <h4>zui</h4>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex flex-col items-center md:flex-row justify-between my-4">
                <p className="my-6 text-xs">Copyright © 2024 EliteX, trading as EX UI</p>
                <div className="mb-6">
                    <h1 className="text-center">Created by</h1>
                    <div className="flex gap-6">
                        <div className="flex justify-between items-center gap-4 text-xs">
                            <img className="w-10 h-12 rounded-2xl border border-black" src="https://i.ibb.co/j4YzDnj/profile.jpg" alt="" />
                            <a href="https://github.com/nayon117" target="_blank">Hassibul Hassan  <span className="ml-6">&&</span></a>
                        </div>

                        <div className="flex justify-between items-center gap-4 text-xs">
                            <img className="w-10 h-12 rounded-2xl border border-black" src="https://i.ibb.co/DwhXW2W/roksanaapu.jpg" alt="" />
                            <a href="https://github.com/ruksana03" target="_blank"> Ruksana</a>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <a href="https://github.com/nayon117/EliteX-UI" target="_blank"><FaGithub /></a>
                    <a href="https://twitter.com/Ruksana003" target="_blank"><FaXTwitter /></a>
                    <a href="https://twitter.com/Ruksana003" target="_blank"><FaLinkedinIn /></a>
                    <a href="https://twitter.com/Ruksana003" target="_blank"><FaDiscord /></a>
                </div>
            </div>
        </div>
    );
};

export default PageFooter;
