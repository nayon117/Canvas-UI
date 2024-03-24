import { FaFaceGrinStars } from "react-icons/fa6";
import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Button5 = () => {
    return (
        <CodeBox
        text={`Icon at end`}
        stringCode={`<button className="flex justify-center items-center gap-4 border px-2 py-1 hover:bg-black hover:text-white"> Button <FaFaceGrinStars className="text-xl"/></button>
        `}>
         <div className="flex justify-center">
         <button className="flex justify-center items-center gap-4 border px-2 py-1 hover:bg-black hover:text-white"> Button <FaFaceGrinStars className="text-xl"/></button>
         </div>
    </CodeBox>
    );
};

export default Button5;