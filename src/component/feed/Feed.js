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
  );
};

export default Feed;
