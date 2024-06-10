import classes from "./Follwing.module.css";

import React from "react";

const Following = () => {
  return (
    <div>
      <div className={classes.fMain}>
        <div className={classes.fMainFeed}>
          <div className={classes.fInnerFeed}>
            <strong className={classes.fNameFeed}>Following</strong>
            <div className={classes.followingFont}>
              0개의 블로그를 구독중입니다
              <div className={classes.fBtn}>
                <button type="button" className={classes.btnFollow}>
                  최신 구독순
                </button>
                <button type="button" className={classes.btnFollow}>
                  블로그 이름순
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.fBody}>
        <div className={classes.fList}>
          <p className={classes.fBlog}>
            아직 구독하는 블로그가 없습니다. 피드에서 추천 블로그를 확인하세요
          </p>
        </div>
      </div>
    </div>
  );
};

export default Following;
