import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import "./rank-box.css";

function RankBox(props) {
  return (
    <div className="rank-box-main">
      <div className="rank-title">{props.rankTitle}</div>
      <div className="rank-box">
        <div className="`text-1">1 Week: {props.rankPrice1W}</div>
        <div className="`text-2">1 Month: {props.rankPrice1M}</div>
      </div>
    </div>
  );
}

export default RankBox;
