import React from "react";
import classes from "./Follwing.module.css";

const Follower = () => {
  return (
    <div>
      <div className={classes.fMain}>
        <div className={classes.fMainFeed}>
          <div className={classes.fInnerFeed}>
            <strong className={classes.fNameFeed}>Follower</strong>
            <div className={classes.followingFont}>
              0명이 내 블로그를 구독합니다
              <div className={classes.fBtn}>
                <button type="button" className={classes.btnFollow}>
                  최신 구독순
                </button>
                <button type="button" className={classes.btnFollow}>
                  닉네임순
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.fBody}>
        <div className={classes.fList}>
          <p className={classes.fBlog}>
            아직 내 블로그를 구독하는 사람이 없습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Follower;
