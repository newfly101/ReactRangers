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
        <div className={classes.externalTitle}>
          애플리케이션 목록
          <span>내 아이디와 연동된 외부 서비스입니다.</span>
        </div>
        <div className={classes.serviceBox}>
          <span>등록일</span>
          <span>서비스</span>
          <span>형태</span>
          <span>권한</span>
          <span>해제</span>
        </div>

        <div className={classes.serviceList}>표시할 서비스가 없습니다</div>
      </div>
    </div>
  );
};

export default External;
