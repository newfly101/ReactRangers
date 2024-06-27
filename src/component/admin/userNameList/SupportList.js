import React from "react";
import classes from "./SupportList.module.css";
import MyProfile from "../MyProfile";

const SupportList = () => {
  return (
    <div id={classes.supportList}>
      <div id={classes.supportListLeft}>
        <MyProfile />
      </div>
      <div id={classes.supportListRight}>
        <div className={classes.supportBlock1}>안녕</div>

        <div className={classes.supportBlock2}>안녕</div>
      </div>
    </div>
  );
};

export default SupportList;
