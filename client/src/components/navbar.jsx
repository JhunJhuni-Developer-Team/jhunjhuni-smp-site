import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faNewspaper,
  faCommentDots,
  faShoppingCart,
  faClockFour,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBarComp = (props) => {
  const active = props.activeClass;

  if (active === "home") {
    return (
      <div className="navbar">
        <div className="navbar-contents">
          <a href="/" className="active">
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
          <a href="/discord/?invLink=FcgQ6wv4XW&uuid=xDza9LsDxAd1%xiaXsHSsaOjs91ugX91j81kOsaBc8jLAdsE80KlAsDfgF72&error=false&success=true&redirect=discord.gg%20invite%20FcgQ6wv4XW">
            <FontAwesomeIcon icon={faCommentDots} />
            Discord
          </a>
          <a href="/votes">
            <FontAwesomeIcon icon={faNewspaper} /> Vote
          </a>
          <a href="/shop">
            <FontAwesomeIcon icon={faShoppingCart} />
            Shop
          </a>
        </div>
      </div>
    );
  } else if (active === "vote") {
    return (
      <div className="navbar">
        <div className="navbar-contents">
          <a href="/" className="active">
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
          <a href="/discord/?invLink=FcgQ6wv4XW&uuid=xDza9LsDxAd1%xiaXsHSsaOjs91ugX91j81kOsaBc8jLAdsE80KlAsDfgF72&error=false&success=true&redirect=discord.gg%20invite%20FcgQ6wv4XW">
            <FontAwesomeIcon icon={faCommentDots} />
            Discord
          </a>
          <a href="/votes" className="active">
            <FontAwesomeIcon icon={faNewspaper} /> Vote
          </a>
          <a href="/shop">
            <FontAwesomeIcon icon={faShoppingCart} />
            Shop
          </a>
        </div>
      </div>
    );
  } else if (active === "shop") {
    return (
      <div className="navbar">
        <div className="navbar-contents">
          <a href="/" className="active">
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
          <a href="/discord/?invLink=FcgQ6wv4XW&uuid=xDza9LsDxAd1%xiaXsHSsaOjs91ugX91j81kOsaBc8jLAdsE80KlAsDfgF72&error=false&success=true&redirect=discord.gg%20invite%20FcgQ6wv4XW">
            <FontAwesomeIcon icon={faCommentDots} />
            Discord
          </a>
          <a href="/votes">
            <FontAwesomeIcon icon={faNewspaper} /> Vote
          </a>
          <a href="/shop" className="active">
            <FontAwesomeIcon icon={faShoppingCart} />
            Shop
          </a>
        </div>
      </div>
    );
  } else if (active === "status") {
    return (
      <div className="navbar">
        <div className="navbar-contents">
          <a href="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
          <a href="/discord/?invLink=FcgQ6wv4XW&uuid=xDza9LsDxAd1%xiaXsHSsaOjs91ugX91j81kOsaBc8jLAdsE80KlAsDfgF72&error=false&success=true&redirect=discord.gg%20invite%20FcgQ6wv4XW">
            <FontAwesomeIcon icon={faCommentDots} />
            Discord
          </a>
          <a href="/votes">
            <FontAwesomeIcon icon={faNewspaper} /> Vote
          </a>
          <a href="/shop">
            <FontAwesomeIcon icon={faShoppingCart} />
            Shop
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <div className="navbar-contents">
          <a href="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
          <a href="/discord/?invLink=FcgQ6wv4XW">
            <FontAwesomeIcon icon={faCommentDots} />
            Discord
          </a>
          <a href="/votes">
            <FontAwesomeIcon icon={faNewspaper} /> Vote
          </a>
          <a href="/shop">
            <FontAwesomeIcon icon={faShoppingCart} />
            Shop
          </a>
        </div>
      </div>
    );
  }
};

export default NavBarComp;
