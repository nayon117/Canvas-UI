import { useState } from "react";


const useTheme = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode((prevDarkMode) => !prevDarkMode);
    };
  
    return (
      <div className={darkMode ? 'dark' : ''}>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        {/* Your components and content */}
      </div>
    );
  }
export default useTheme;