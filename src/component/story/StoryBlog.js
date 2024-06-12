import React from "react";
import classes from "./StoryBlog.module.css";

const StoryBlog = ({ dummyData }) => {
  return (
    <div className={classes.storyMidSection}>
      {/*화면 전체에 a태그를 감싼다*/}
      {dummyData.map((item, index) => (
        <a href={item.blogUrl} key={index} className={classes.blogWrapper}>
          <img
            src={`${item.blogImage}`}
            alt="스토리블로그 이미지"
            className={classes.blogImg}
          />
          {/*화면 하단 Info를 구성*/}
          <div className={classes.blogTextWrapper}>
            <div className={classes.blogInfo}>
              {item.serviceCategoryName} &nbsp;·&nbsp; 공감
              <label className={classes.blogInfoNum}>
                {item.reactionCount}
              </label>
              &nbsp; ·&nbsp; 응원
              <label className={classes.blogInfoNum}>{item.commentCount}</label>
            </div>
            {/*카드 뉴스 최하단 저자와 블로그 제목*/}
            <div className={classes.blogTitle}>
              {item.entryTitle.substring(0, 14)}
              <br />
              {item.entryTitle.substring(14, 26)}
            </div>
            <div className={classes.blogFooter}>
              <div>
                <div className={classes.blogDesc}>
                  {item.blogTitle.substring(0, 15)}
                </div>
                <div className={classes.blogAuthor}>by {item.authorName}</div>
              </div>

              <div className={classes.subscribeBtn}>구독하기</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default StoryBlog;
