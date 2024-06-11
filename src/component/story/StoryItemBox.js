import React, { useEffect, useState } from "react";
import classes from "./StoryItemBox.module.css";

import { dummyItemLife } from "./DummyData/StoryDummyDataLife";
import { dummyItemCulture } from "./DummyData/StoryDummyDataCulture";
import { dummyItemIt } from "./DummyData/StoryDummyDataIt";
import { dummyItemCurrent } from "./DummyData/StoryDummyDataCurrent";
import { dummyItemSport } from "./DummyData/StoryDummyDataSport";
import { dummyItemTravel } from "./DummyData/StoryDummyDataTravel";

const StoryItemBox = ({ useTag }) => {
  //Story.js에서 useTag props를 받아서 보여줄 정보를 items state에 업데이트
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
          <a href={item.link}>
            {/*각 아이템 박스 전체를 섹션으로 감싼다*/}
            <section className={classes.itemBoxWrapper}>
              <div className={classes.bottomItemBox}>
                {/*아이템 박스 앞부분*/}
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
                {/*아이템 박스 중간 부분*/}
                <div className={classes.ItemBoxMid}>
                  <div className={classes.ItemBoxTitle}>
                    {items.data.list[index].title.substr(0, 35)}
                  </div>
                  <div className={classes.ItemBoxdesc}>
                    {items.data.list[index].summary.substr(0, 100) + "..."}
                  </div>
                  <div className={classes.ItemBoxAuthor}>
                    <div className={classes.ItemBoxAuthorDetali}>
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
                    <div className={classes.subscribeBtn}>구독하기</div>
                  </div>
                </div>
                {/*아이템 박스 오른쪽 끝 이미지 부분*/}
                <div className={classes.ItemBoxEnd}>
                  <img
                    className={classes.itemBoxImg}
                    src={`${items.data.list[index].thumbnail}`}
                    alt="아이템박스 이미지"
                  />
                </div>
              </div>
            </section>
          </a>
          {/*각 아이템 박스를 구분하는 선*/}
          <hr className={classes.mainBar} />
        </div>
      ))}
    </div>
  );
};

export default StoryItemBox;
