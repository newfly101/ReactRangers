import React, { useEffect, useState } from "react";
import classes from "./StoryItemBox.module.css";

import { dummyItemLife } from "./DummyData/StoryDummyDataLife";
import { dummyItemCulture } from "./DummyData/StoryDummyDataCulture";
import { dummyItemIt } from "./DummyData/StoryDummyDataIt";
import { dummyItemCurrent } from "./DummyData/StoryDummyDataCurrent";
import { dummyItemSport } from "./DummyData/StoryDummyDataSport";
import { dummyItemTravel } from "./DummyData/StoryDummyDataTravel";

const StoryItemBox = ({ useTag }) => {
  const [items, setItems] = useState(dummyItemLife);
  const itemChanger = (useTag) => {
    if (useTag === "life") {
      setItems(dummyItemLife);
    } else if (useTag === "it") {
      setItems(dummyItemIt);
    } else if (useTag === "culture") {
      setItems(dummyItemCulture);
    } else if (useTag === "current") {
      setItems(dummyItemCurrent);
    } else if (useTag === "sport") {
      setItems(dummyItemSport);
    } else if (useTag === "travel") {
      setItems(dummyItemTravel);
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
