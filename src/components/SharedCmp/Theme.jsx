
// import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";
import useTheme from "../../Hooks/useThem";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";




const Theme = () => {
    const { mode, toggleTheme } = useTheme();

    return (
        <div className={`flex items-center justify-center`}>
            <button onClick={toggleTheme}>
                {mode === "dark" ? (
                    <BsFillMoonStarsFill className="text-lg text-white" />
                ) : (
                    <MdOutlineWbSunny className="text-2xl text-black" />
                )}
            </button>
        </div>
    );
};

export default Theme;
