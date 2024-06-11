import React, { useEffect, useState } from "react";
import classes from "./StoryBlog.module.css";
import { dummyCardLife } from "./DummyData/StoryDummyDataLife";
import { dummyCardCulture } from "./DummyData/StoryDummyDataCulture";
import { dummyCardIt } from "./DummyData/StoryDummyDataIt";
import { dummyCardCurrent } from "./DummyData/StoryDummyDataCurrent";
import { dummyCardSport } from "./DummyData/StoryDummyDataSport";
import { dummyCardTravel } from "./DummyData/StoryDummyDataTravel";

const StoryBlog = ({ useTag }) => {
  //story.js에서 props를 받아서 보여줄 정보를 carditems state에 업데이트
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
      {/*화면 전체에 a태그를 감싼다*/}
      {carditems.data.list.map((item, index) => (
        <a href={item.blogUrl} key={index}>
          <div className={classes.blogWrapper}>
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
                  {" "}
                  {item.reactionCount}{" "}
                </label>
                &nbsp; ·&nbsp; 응원{" "}
                <label className={classes.blogInfoNum}>
                  {item.commentCount}
                </label>
              </div>
              {/*카드 뉴스 최하단 저자와 블로그 제목*/}
              <div className={classes.blogTitle}>{item.entryTitle}</div>
              <div className={classes.blogFooter}>
                <div>
                  <div className={classes.blogDesc}>
                    {item.blogTitle.substr(0, 15)}
                  </div>
                  <div className={classes.blogAuthor}>by {item.authorName}</div>
                </div>

                <div className={classes.subscribeBtn}>구독하기</div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default StoryBlog;
