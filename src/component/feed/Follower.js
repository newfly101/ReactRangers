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
                  닉네임순
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
            아직 내 블로그를 구독하는 사람이 없습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Follower;
