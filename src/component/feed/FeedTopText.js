import React from 'react';
import classes from "./FeedTopText.module.css";

const FeedTopText = () => {
  return (
    <div className={classes.topTextContainer}>
      <div className={classes.topTitle}>Feed</div>
      <div className={classes.subscribeInfo}>
        <div className={classes.topText}>내가 구독하는 글입니다.</div>
        <div className={classes.subscribeWrapper}>
          <span className={classes.subscribingNum}> 구독중
            <span className={classes.subscribeNum}>0</span>
          </span>
          <span className={classes.subscribingNum}> 구독자
            <span className={classes.subscribeNum}>0</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedTopText;