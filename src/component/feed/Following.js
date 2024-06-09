import classes from "./Follwing.module.css";

import React from "react";

const Following = () => {
  return (
    <div className={classes.Fmain}>
      <div className={classes.fMainFeed}>
        <div className={classes.fInnerFeed}>
          <h2 className={classes.fNameFeed}>Following</h2>
          <div className={classes.followingFont}>
            0개의 블로그를 구독중입니다
            <div className={classes.fBtn}>
              <button type="button" className="btnFollow">
                최신 구독순
              </button>
              <button type="button" className="btnFollow">
                블로그 이름순
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Following;
