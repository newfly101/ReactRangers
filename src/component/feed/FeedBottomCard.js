import React from 'react';
import {FeedDummyData} from "./FeedDummyData";
import classes from "./FeedBottomCard.module.css"
const FeedBottomCard = () => {
  return (
    <div className={classes.blogCardContainer}>
      <div className={classes.blogCardWrapper}>
        <div className={classes.blogCardText}>최근 활동이 많은 블로그입니다. 구독해 보세요.</div>
        {FeedDummyData.map((item, index) => (
          <div key={index} className={classes.blogCard}>
            <div className={classes.blogImageWrapper}><img className={classes.blogImage} src={item.image}/></div>
            <div className={classes.blogCardNickname}>{item.nickname}</div>
            <div className={classes.blogCardFollower}>구독자 {item.followerCount}</div>
            <div className={classes.blogCardDescription}>{item.description}</div>
            <button className={classes.blogCardButton}>구독하기</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBottomCard;