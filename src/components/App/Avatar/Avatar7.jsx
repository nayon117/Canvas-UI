import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Avatar7 = () => {
    return (
        <CodeBox text={`Profile avatar with social account`} stringCode={` <div className="bg-[#904C31] border border-[#904C31] m-2 flex flex-col justify-between items-center w-32 p-2 relative">
        <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="text text-center">
            <span className="block text-white font-semibold text-sm">Marco</span>
            <p className="text-white text-xs">CEO</p>
            <div className="country flex items-center">
                <span className="text-xs text-white">Italy</span>
            </div>
        </div>
        <ul className="flex space-x-2">
            <li><a href="#" className="li-soc"><FaLinkedin className="w-6 h-6 text-white" /></a></li>
            <li><a href="#" className="li-soc"><FaTwitter className="w-6 h-6 text-white" /></a></li>
            <li><a href="#" className="li-soc"><FaFacebook className="w-6 h-6 text-white" /></a></li>
        </ul>
    </div>`}>
            <div className='flex justify-evenly'>
                <div className="bg-[#904C31] border border-[#904C31] m-2 flex flex-col justify-between items-center w-32 p-2 relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="text text-center">
                        <span className="block text-white font-semibold text-sm">Marco</span>
                        <p className="text-white text-xs">CEO</p>
                        <div className="country flex items-center">
                            <span className="text-xs text-white">Italy</span>
                        </div>
                    </div>
                    <ul className="flex space-x-2">
                        <li><a href="#" className="li-soc"><FaLinkedin className="w-6 h-6 text-white" /></a></li>
                        <li><a href="#" className="li-soc"><FaTwitter className="w-6 h-6 text-white" /></a></li>
                        <li><a href="#" className="li-soc"><FaFacebook className="w-6 h-6 text-white" /></a></li>
                    </ul>
                </div>
            </div>
        </CodeBox>
    );
};

export default Avatar7;
