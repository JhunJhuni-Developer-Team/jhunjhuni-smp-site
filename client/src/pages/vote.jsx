import "./vote.css";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./shop.css";
import NavBarComp from "../components/navbar";
library.add(faMoon, faSun);

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const lightTheme = {
    backgroundColor: "#d1e3f0",
    color: "black",
  };

  const darkTheme = {
    backgroundColor: "#040e14",
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

const VotePage = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
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

  const themeStyles = theme === "light" ? lightTheme : darkTheme;
  const textThemeStyles = theme === "light" ? textLightTheme : textDarkTheme;
  return (
    <div className="vote" style={themeStyles}>
      <div className="contents">
        <div className="page">
          <div className="x9aLnoA rTlz_U drd42">
            <div className="top-area">
              <ThemeSwitcher />
              <NavBarComp activeClass="vote" />
            </div>
            <h1 className="ttX" style={textThemeStyles}>
              All the vote links
            </h1>
            <div className="hX-0B8T9NxS">
              <a
                className="DLbTn80"
                href="https://topminecraftservers.org/server/23025"
              >
                <button className="txSMlaS9">Top Minecraft Servers</button>
              </a>
              <a
                className="DLbTn80"
                href="https://minecraft-server.net/details/JhunJhuniSMP/"
              >
                <button className="txSMlaS10">Minecraft Server Net</button>
              </a>
              <a
                className="DLbTn80"
                href="https://best-minecraft-servers.co/server-jhunjhuni-smp.4950"
              >
                <button className="txSMlaS11">Best Minecraft Servers</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="extra-0000000000001">
        <p>No luck!</p>
      </div>
    </div>
  );
};

export default VotePage;
