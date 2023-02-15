import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faNewspaper,
  faCommentDots,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBarCompBn = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-contents">
        <a href="/">
          <FontAwesomeIcon icon={faHome} /> হোম
        </a>
        <a href="/discord/?invLink=FcgQ6wv4XW">
          <FontAwesomeIcon icon={faCommentDots} />
          ডিসকর্ড
        </a>
        <a href="/news">
          <FontAwesomeIcon icon={faNewspaper} /> খবর
        </a>
        <a href="/shop">
          <FontAwesomeIcon icon={faShoppingCart} />
          দোকান
        </a>
      </div>
    </div>
  );
};

export default NavBarCompBn;
