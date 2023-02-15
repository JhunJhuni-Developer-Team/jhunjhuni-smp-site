import React, { useState } from "react";
import "./App.css";
import NavBarComp from "./components/navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faMoon, faSun);

const lightTheme = {
  backgroundImage:
    "url(https://cdn.discordapp.com/attachments/1035924822842150994/1074281874718986261/image.png)",
  color: "black",
};

const darkTheme = {
  backgroundImage:
    "url(https://cdn.discordapp.com/attachments/1035924822842150994/1074281929995718706/image.png)",
  color: "white",
};

const textLightTheme = {
  color: "black",
};

const textDarkTheme = {
  color: "white",
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const themeStyles = theme === "light" ? lightTheme : darkTheme;

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const themeStyles = theme === "light" ? lightTheme : darkTheme;
  const textThemeStyles = theme === "light" ? textLightTheme : textDarkTheme;

  return (
    <div className="app" style={themeStyles}>
      <NavBarComp activeClass="home" />
      <ThemeSwitcher />
      <div className="middle-headers">
        <div className="CsxOI8bsc">
          <h1 className="Jhu-N-Jhu-Ni-Text1">JhunJhuni SMP</h1>
          <h1 className="Jhu-N-Jhu-Ni-Text2">Season 2</h1>
          <h2 className="Jhu-N-Jhu-Ni-Sub" style={textThemeStyles}>
            #1 BD Minecraft Server
          </h2>
        </div>
      </div>
      <div className="Website_coded_by_DeadRedDiamond42">
        This website was coded by DeadRedDiamond42
      </div>
      <div className="Sabaa-apur-jamai-just-me-vai-bolse-tai-add-disi-buccho-amr-mone-hoy-buccho">
        <p className="CxDYkSu891">Sorry but kisu nai ene -,-</p>
      </div>
    </div>
  );
}

export default App;
