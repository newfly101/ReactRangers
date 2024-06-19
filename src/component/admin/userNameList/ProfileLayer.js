import React from "react";
import classes from "./ProfileLayer.module.css";
import MyProfile from "../MyProfile";

const ProfileLayer = () => {
  return (
    <div id={classes.profileLayer}>
      <div id={classes.AdminLeft}>
        <MyProfile />
      </div>
      <div id={classes.AdminRight}>
        <div>
          <div className={classes.AdminFont}>이메일 알림</div>
          <div>
            <div className={classes.AdminBlock7}>
              여기다가 필터링사용
              {/* <AdminFilter
                selected={filteredReceive}
                onChangeFilter={changeFilterHandler}
              /> */}
            </div>
          </div>
        </div>
        <div className={classes.AdminBlock8}>
          <button className={classes.button}>변경사항 저장</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayer;
