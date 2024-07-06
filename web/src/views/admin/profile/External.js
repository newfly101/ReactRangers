import React from "react";
import MyProfile from "../MyProfile";
import classes from "../../../css/admin/profile/External.module.css";

const External = () => {
  return (
    <div className={classes.external}>
      <div className={classes.externalLeft}>
        <MyProfile />
      </div>
      <div className={classes.externalRight}>
        <div className={classes.externalTitle}>애플리케이션 목록</div>
        <div className={classes.serviceBox}>등록일</div>

        <div className={classes.serviceList}>표시할 서비스가 없습니다</div>
      </div>
    </div>
  );
};

export default External;
