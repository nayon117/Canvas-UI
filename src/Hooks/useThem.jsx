// useTheme.js
import { useEffect, useState } from "react";

const useTheme = () => {
    const [mode, setMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme || "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", mode);
        const body = document.body;
        body.classList.remove('light', 'dark');
        body.classList.add(mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
        window.location.reload();
    };

    return { mode, toggleTheme };
};

export default useTheme;

