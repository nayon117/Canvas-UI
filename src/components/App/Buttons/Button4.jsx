import CodeBox from "../../../Shared/CodeBox/CodeBox";
import { FaFaceGrinStars } from "react-icons/fa6";


const Button4 = () => {
    return (
        <CodeBox 
        text={`Icon at start`} 
        stringCode={`<button className="flex justify-center items-center gap-4 border px-2 py-1 hover:bg-black hover:text-white"><FaFaceGrinStars className="text-xl" /> Button</button>`}>
            <div className="flex justify-center">
                <button className="flex justify-center items-center gap-4 border px-2 py-1 hover:bg-black hover:text-white"><FaFaceGrinStars className="text-xl" /> Button</button>
            </div>
        </CodeBox>
    );
};

export default Button4;