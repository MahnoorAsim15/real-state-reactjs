import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { FaSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      console.log("dark ");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("light");
    }
  };

  return (
    <>
      <button
        className="fixed z-100 w-16 h-16 top-52 right-6 bg-orange-500 rounded-full p-4"
        onClick={toggleTheme}
      >
        {isDarkMode ? <IoMoon size={30}/> : <FaSun size={30}/>}
      </button>
      <HomePage theme={isDarkMode}/>
    </>
  );
}

export default App;
