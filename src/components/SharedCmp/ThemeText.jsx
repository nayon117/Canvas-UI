import { useEffect, useState } from "react";
import useTheme from "../../Hooks/useThem";


const ThemeText = ({ children }) => {
    const { mode } = useTheme();
    const [textColor, setTextColor] = useState("");

    useEffect(() => {
        setTextColor(mode === "dark" ? "text-white" : "text-black");
    }, [mode]);

    return (
        <span className={`theme-text ${textColor}`}>
            {children}
        </span>
    );
};

export default ThemeText;
