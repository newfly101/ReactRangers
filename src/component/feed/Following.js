import classes from "./Following.module.css";
import { feedCardDummyData } from "./FeedCardDummyData";
import React, { useState } from "react";

const Following = () => {
  const [isListBox1, setListBox1] = useState(true);
  const handleListBoxTypeBtn1 = () => {
    setListBox1(!isListBox1);
  };

  const data = feedCardDummyData.data[0];
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
          {/* <p className={classes.fBlog}>
            아직 구독하는 블로그가 없습니다. 피드에서 추천 블로그를 확인하세요
          </p> */}
          <ul className={classes.fListTistory}>
            <li>
              <div className={classes.fListTistoryBox}>
                <a href={data.defaultUrl} className={classes.wrapThumb}>
                  <span className={classes.innerThumb}>
                    <img
                      src={data.image}
                      className={classes.thumbProfile}
                      alt="dataImage"
                    />
                  </span>
                </a>
                <a href={data.defaultUrl} className={classes.wrapCont}>
                  <strong className={classes.descTit}>{data.title}</strong>
                  <p className={classes.descG}>{data.description}</p>
                </a>
                <div className={classes.infoContainer}>
                  <a href={data.defaultUrl} className={classes.infoG}>
                    <dl className={classes.listData}>
                      <dt>구독자</dt>
                      <dd>{data.followerCount}</dd>
                    </dl>
                    <dl>
                      <dl className={classes.listData}>
                        <dt>구독</dt>
                        <dd className={classes.listDataDd}>2024.06.11</dd>
                      </dl>
                    </dl>
                  </a>
                  <div className={classes.infoSubscribe}>
                    <button
                      type="button"
                      className={
                        isListBox1
                          ? classes.listBoxTypeBtn
                          : classes.listBoxTypeChange
                      }
                      onClick={handleListBoxTypeBtn1}
                    >
                      {isListBox1 ? "구독중" : "구독하기"}
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Following;
