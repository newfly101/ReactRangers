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
                  <span className={classes.checkImg}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </span>
                </button>
                <button type="button" className={classes.btnFollow}>
                  블로그 이름순
                  <span className={classes.checkImg}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </span>
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
