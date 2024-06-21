import React from 'react';
import classes from "./FeedMidBox.module.css"
const FeedMidBox = () => {
  return (
    <div className={classes.midWrapper}>
      <div className={classes.midTitle}>
        구독중인 블로그가 없습니다.
      </div>
      <div className={classes.midText}>
        스토리에서 인기글을 읽고, 마음에 드는 블로그를 구독해보세요.<br/>구독하는 글을 피드에서 바로 확인하실 수 있습니다.
      </div>
      <button className={classes.midButton}>스토리 보러가기</button>
    </div>
  );
};

export default FeedMidBox;