
import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Nav2 = () => {
    return (
        <>
            <CodeBox text={"Navbar Without Responsive"} stringCode={`<div className="bg-black text-white flex justify-between items-center p-4">
                    <div className="flex items-center">
                        <img src="/logo.svg" alt="Logo" className="h-8 mr-4" />
                        <ul className="flex space-x-4">
                            <li className="hover:text-gray-400">Products</li>
                            <li className="hover:text-gray-400">Solutions</li>
                            <li className="hover:text-gray-400">Platforms</li>
                            <li className="hover:text-gray-400">Pricing</li>
                            <li className="hover:text-gray-400">Blog</li>
                        </ul>
                    </div>
                    <div>
                        <button className="text-gray-400 hover:text-white mr-4">Log In</button>
                        <button className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded">Get Started</button>
                    </div>
                </div>`}>
                <div className="bg-black text-white flex justify-between items-center p-4">
                    <div className="flex items-center">
                        <img src="/logo.svg" alt="Logo" className="h-8 mr-4" />
                        <ul className="flex space-x-4">
                            <li className="hover:text-gray-400">Products</li>
                            <li className="hover:text-gray-400">Solutions</li>
                            <li className="hover:text-gray-400">Platforms</li>
                            <li className="hover:text-gray-400">Pricing</li>
                            <li className="hover:text-gray-400">Blog</li>
                        </ul>
                    </div>
                    <div>
                        <button className="text-gray-400 hover:text-white mr-4">Log In</button>
                        <button className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded">Get Started</button>
                    </div>
                </div>
            </CodeBox>
        </>
    );
};

export default Nav2;