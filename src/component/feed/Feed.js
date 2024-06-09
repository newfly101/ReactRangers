import React from "react";
import classes from "./Feed.module.css";

const subscriptionBtn = (event) => {
  console.log(event);
};

const subscribersBtn = (event) => {
  console.log(event);
};

const Feed = () => {
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.mainFeed}>
          <div className={classes.innerFeed}>
            <h2 className={classes.nameFeed}>Feed</h2>
            <div className={classes.pFont}>
              내가 구독하는 글입니다
              <div className={classes.btn}>
                <div onClick={subscriptionBtn} className={classes.subscription}>
                  구독중
                </div>
                <div onClick={subscribersBtn} className={classes.subscribers}>
                  구독자
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.feedBody}>
        <h3 className={classes.feedBodyMain}>구독중인 블로그가 없습니다.</h3>
        <p className={classes.feedBodyBlog}>
          스토리에서 인기글을 읽고, 마음에 드는 블로그를 구독해보세요.
          <br />
          구독하는 글을 피드에서 바로 확인하실 수 있습니다.
        </p>
        <div className={classes.feedStoryWrapBtn}>
          <a href="/story" className={classes.feedStoryBtn}>
            스토리 보러가기
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feed;
