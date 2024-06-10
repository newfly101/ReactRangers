import React from "react";
import classes from "./StoryBlog.module.css";
import { dummyCard } from "./StoryDummyData";

const StoryBlog = () => {
  return (
    <div className={classes.storyMidSection}>
      {dummyCard.data.list.map((item, index) => (
        <div className={classes.blogWrapper} key={index}>
          <img
            src={`${item.blogImage}`}
            alt="스토리블로그 이미지"
            className={classes.blogImg}
          />

          <div className={classes.blogTextWrapper}>
            <div className={classes.blogInfo}>
              {item.serviceCategoryName} &nbsp;·&nbsp; 공감
              <label className={classes.blogInfoNum}>
                {" "}
                {item.reactionCount}{" "}
              </label>
              &nbsp; ·&nbsp; 응원{" "}
              <label className={classes.blogInfoNum}>{item.commentCount}</label>
            </div>

            <div className={classes.blogTitle}>{item.entryTitle}</div>
            <div className={classes.blogDesc}>{item.blogTitle}</div>
            <div className={classes.blogAuthor}>by {item.authorName}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryBlog;
