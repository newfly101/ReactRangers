import React, { useEffect, useState } from "react";
import classes from "./StoryBlog.module.css";
import { dummyCardLife } from "./DummyData/StoryDummyDataLife";
import { dummyCardCulture } from "./DummyData/StoryDummyDataCulture";
import { dummyCardIt } from "./DummyData/StoryDummyDataIt";
import { dummyCardCurrent } from "./DummyData/StoryDummyDataCurrent";
import { dummyCardSport } from "./DummyData/StoryDummyDataSport";
import { dummyCardTravel } from "./DummyData/StoryDummyDataTravel";

const StoryBlog = ({ useTag }) => {
  const [carditems, setCardItems] = useState(dummyCardLife);
  const itemChanger = (useTag) => {
    if (useTag === "life") {
      setCardItems(dummyCardLife);
    } else if (useTag === "it") {
      setCardItems(dummyCardIt);
    } else if (useTag === "culture") {
      setCardItems(dummyCardCulture);
    } else if (useTag === "current") {
      setCardItems(dummyCardCurrent);
    } else if (useTag === "sport") {
      setCardItems(dummyCardSport);
    } else if (useTag === "travel") {
      setCardItems(dummyCardTravel);
    }
  };
  useEffect(() => {
    itemChanger(useTag);
  });

  return (
    <div className={classes.storyMidSection}>
      {carditems.data.list.map((item, index) => (
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
