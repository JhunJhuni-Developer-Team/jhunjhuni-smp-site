import NavBarComp from "../components/navbar";
import RankBox from "../components/rank-box";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./shop.css";
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
    <div className="_sAz6l">
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

const ShopPage = (props) => {
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
    <div className="shop" style={themeStyles}>
      <div className="top">
        <div className="extra-0000000000002">No luck!</div>
        <NavBarComp activeClass="shop" />
        <ThemeSwitcher />
      </div>
      <div className="content">
        <div className="credit">
          <div className="Website_coded_by_DeadRedDiamond42"></div>
        </div>
        <div className="main">
          <div className="ranks">
            <h1 className="a-rank" style={textThemeStyles}>
              Available Ranks
            </h1>
            <RankBox
              rankTitle="Monarchical"
              rankPrice1W="120৳"
              rankPrice1M="240৳"
            />
            <RankBox
              rankTitle="Imperial"
              rankPrice1W="150৳"
              rankPrice1M="300৳"
            />
            <RankBox rankTitle="Regal" rankPrice1W="199৳" rankPrice1M="399৳" />
            <RankBox
              rankTitle="Formidable"
              rankPrice1W="220৳"
              rankPrice1M="420৳"
            />
            <RankBox
              rankTitle="Prodigious"
              rankPrice1W="280৳"
              rankPrice1M="500৳"
            />
            <IonIcon name="logo-discord" className="i" />
          </div>
          <h1 className="_aSnjL2">
            Join our{" "}
            <a className="_aS7xK lPxD" href="/discord" target="_blank">
              Discord
            </a>{" "}
            to buy the ranks
          </h1>
        </div>
      </div>
      <div className="extra-0000000000001">
        <p>No luck!</p>
      </div>
    </div>
  );
};

export default ShopPage;
