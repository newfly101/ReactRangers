import React, { useEffect, useState } from "react";
import classes from "./StoryItemBox.module.css";
import { dummyCategory1 } from "./StoryDummyData";

import { dummyCategoryCurrent } from "./StoryDummyData";
const StoryItemBox = ({ useTag }) => {
  const [items, setItems] = useState(dummyCategory1);
  const itemChanger = (useTag) => {
    if (useTag === "life") {
      setItems(dummyCategory1);
    } else if (useTag === "it") {
      setItems(dummyCategoryCurrent);
    }
  };
  useEffect(() => {
    itemChanger(useTag);
  });

  return (
    <div>
      {items.data.list.map((item, index) => (
        <div key={index}>
          <section className={classes.itemBoxWrapper}>
            <div className={classes.bottomItemBox}>
              <div className={classes.ItemBoxStart}>
                <div className={classes.categoryName}>
                  {items.data.list[index].categoryName}
                  <hr className={classes.textHr} />
                </div>
                <div className={classes.publishedAgo}>
                  {items.data.list[index].publishedAgo}
                </div>
                <div>
                  공감{" "}
                  <label className={classes.likeCount}>
                    {items.data.list[index].likeCount}
                  </label>
                </div>
              </div>

              <div className={classes.ItemBoxMid}>
                <div className={classes.ItemBoxTitle}>
                  {items.data.list[index].title.substr(0, 35)}
                </div>
                <div className={classes.ItemBoxdesc}>
                  {items.data.list[index].summary.substr(0, 100) + "..."}
                </div>
                <div className={classes.ItemBoxAuthor}>
                  <img
                    className={classes.ItemBoxAuthorImg}
                    src={`${items.data.list[index].userImage}`}
                    alt="아이템박스 저자 이미지"
                  />
                  <div>{items.data.list[index].userName}</div>

                  <div className={classes.blogName}>
                    by {items.data.list[index].blogTitle}
                  </div>
                </div>
              </div>

              <div className={classes.ItemBoxEnd}>
                <img
                  className={classes.itemBoxImg}
                  src={`${items.data.list[index].thumbnail}`}
                  alt="아이템박스 이미지"
                />
              </div>
            </div>
          </section>
          <hr className={classes.mainBar} />
        </div>
      ))}
    </div>
  );
};

export default StoryItemBox;
