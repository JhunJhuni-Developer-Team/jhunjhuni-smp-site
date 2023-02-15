import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import "./status.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBarComp from "../components/navbar";
const fetcher = async (...args) => {
  const res = await axios(...args);
  return res.data;
};
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

const StatusPage = () => {
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
  const { data, error } = useSWR(
    "https://api.minetools.eu/ping/mc.jhunjhunismp.xyz/25565",
    fetcher
  );

  if (error) {
    console.error(error);
    return <h1>Something went wrong.</h1>;
  }

  return (
    <div className="status" style={themeStyles}>
      <div>
        <div>
          <div>
            <div className="top">
              <ThemeSwitcher />
              <NavBarComp activeClass="status" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="jXshAij">JhunJhuni SMP Status</h1>
      <div className="xSxwD01sXS">
        <h1>Latency: {data?.latency}</h1>
        <h1>
          Online players: <h1 className="o-p-data">{data?.players.online}</h1>
        </h1>
        <h1 className="jhu-xU-V">
          Version, Name: <h1 className="v-name">{data?.version.name}</h1>
          <h1 className="pro">
            protocol: <h1 className="v-pro"> {data?.version.protocol}</h1>
          </h1>
        </h1>
      </div>
      <div className="extra-0000000000001">
        <p>No luck!</p>
      </div>
    </div>
  );
};

export default StatusPage;
