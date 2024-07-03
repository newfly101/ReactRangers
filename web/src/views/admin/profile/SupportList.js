import React from "react";
import classes from "../../../css/admin/profile/SupportList.module.css";
import MyProfile from "../MyProfile";

const SupportList = () => {
  return (
    <div className={classes.supportList}>
      <div className={classes.supportListLeft}>
        <MyProfile />
      </div>
      <div className={classes.supportListRight}>
        <div className={classes.mainTitle}>응원내역</div>
        <div className={classes.supportBlock1}>검색기능</div>

        <div className={classes.supportBlock2}>댓글목록</div>
      </div>
    </div>
  );
};

export default SupportList;
