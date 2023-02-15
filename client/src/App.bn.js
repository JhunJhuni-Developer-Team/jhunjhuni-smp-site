import React, { useState } from "react";
import "./App.bn.css";
import NavBarComp from "./components/navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBarCompBn from "./components/navbar.bn";

library.add(faMoon, faSun);

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const lightTheme = {
    backgroundImage:
      "url(https://cdn.discordapp.com/attachments/1035924822842150994/1069636078006440046/image.png)",
    color: "black",
  };

  const darkTheme = {
    backgroundImage:
      "url(https://cdn.discordapp.com/attachments/1035924822842150994/1069636078253912164/image.png)",
    color: "white",
  };
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

function AppBn() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const lightTheme = {
    backgroundImage:
      "url(https://cdn.discordapp.com/attachments/1035924822842150994/1069636078006440046/image.png)",
    color: "black",
  };

  const darkTheme = {
    backgroundImage:
      "url(https://cdn.discordapp.com/attachments/1035924822842150994/1069636078253912164/image.png)",
    color: "white",
  };

  const textLightTheme = {
    color: "black",
  };

  const textDarkTheme = {
    color: "white",
  };

  const themeStyles = theme === "light" ? lightTheme : darkTheme;
  const textThemeStyles = theme === "light" ? textLightTheme : textDarkTheme;

  return (
    <div className="app" style={themeStyles}>
      <NavBarCompBn />
      <ThemeSwitcher />
      <div className="middle-headers-bangla">
        <div className="CsxOI8bsc">
          <h1 className="Jhu-N-Jhu-Ni-TextBn1">ঝুনঝুনি এসএমপি</h1>
          <h1 className="Jhu-N-Jhu-Ni-TextBn2">দ্বিতীয় সিজন</h1>
          <h2 className="Jhu-N-Jhu-Ni-SubBn" style={textThemeStyles}>
            বাংলাদেশের সেরা মাইনক্রাফ্ট সারভার
          </h2>
        </div>
      </div>
      <div className="Website_coded_by_DeadRedDiamond42">
        এই website-টি DeadRedDiamond42 বানিয়েছেন
      </div>
      <div className="Sabaa-apur-jamai-just-me-vai-bolse-tai-add-disi-buccho-amr-mone-hoy-buccho">
        <p className="CxDYkSu891">Sorry but কিছু নেই এখানে</p>
      </div>
    </div>
  );
}

export default AppBn;
