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
        <div className={classes.mainTitle}>응원내역</div>
        <div className={classes.supportBlock1}>검색기능</div>

        <div className={classes.supportBlock2}>댓글목록</div>
      </div>
    </div>
  );
};

export default SupportList;
