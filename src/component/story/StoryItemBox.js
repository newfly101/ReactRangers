import React from "react";
import classes from "./StoryItemBox.module.css";
import { dummyCategory1 } from "./StoryDummyData";
const storyItemBox = () => {
  return (
    <div>
      {dummyCategory1.data.list.map((item, index) => (
        <div key={index}>
          <section className={classes.storyWrapper}>
            <div className={classes.bottomItemBox}>
              <div className={classes.ItemBoxStart}>
                <div>{dummyCategory1.data.list[index].categoryName}</div>
                <div>{dummyCategory1.data.list[index].publishedAgo}</div>
                <div>
                  공감{" "}
                  <label>{dummyCategory1.data.list[index].likeCount}</label>
                </div>
              </div>

              <div className={classes.ItemBoxMid}>
                <div className={classes.ItemBoxTitle}>
                  {dummyCategory1.data.list[index].title}
                </div>
                <div className={classes.ItemBoxdesc}>
                  {dummyCategory1.data.list[index].summary}
                </div>
                <div className={classes.ItemBoxAuthor}>
                  <img
                    className={classes.ItemBoxAuthorImg}
                    src={`${dummyCategory1.data.list[index].userImage}`}
                    alt="아이템박스 저자 이미지"
                  />
                  <div>{dummyCategory1.data.list[index].userName}</div>
                  <div>by {dummyCategory1.data.list[index].blogTitle}</div>
                </div>
              </div>

              <div>
                <img
                  className={classes.itemBoxImg}
                  src={`${dummyCategory1.data.list[index].thumbnail}`}
                  alt="아이템박스 이미지"
                />
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default storyItemBox;
