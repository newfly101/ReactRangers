import React, { useState } from "react";
import classes from "./Story.module.css";
import StoryBlog from "./StoryBlog";
import StoryItemBox from "./StoryItemBox";
import { dummyCardLife } from "./DummyData/StoryDummyDataLife";
import { dummyCardCulture } from "./DummyData/StoryDummyDataCulture";
import { dummyCardIt } from "./DummyData/StoryDummyDataIt";
import { dummyCardCurrent } from "./DummyData/StoryDummyDataCurrent";
import { dummyCardSport } from "./DummyData/StoryDummyDataSport";
import { dummyCardTravel } from "./DummyData/StoryDummyDataTravel";
import { dummyItemLife } from "./DummyData/StoryDummyDataLife";
import { dummyItemCulture } from "./DummyData/StoryDummyDataCulture";
import { dummyItemIt } from "./DummyData/StoryDummyDataIt";
import { dummyItemCurrent } from "./DummyData/StoryDummyDataCurrent";
import { dummyItemSport } from "./DummyData/StoryDummyDataSport";
import { dummyItemTravel } from "./DummyData/StoryDummyDataTravel";

const Story = () => {
  const [dummyData, setDummyData] = useState({
    dataName: "life",
    cardData: dummyCardLife,
    itemData: dummyItemLife,
  });

  const onClickLife = () => {
    setDummyData({
      dataName: "life",
      cardData: dummyCardLife,
      itemData: dummyItemLife,
    });
  };

  const onClickTravel = () => {
    setDummyData({
      dataName: "travel",
      cardData: dummyCardTravel,
      itemData: dummyItemTravel,
    });
  };
  const onClickCulture = () => {
    setDummyData({
      dataName: "culture",
      cardData: dummyCardCulture,
      itemData: dummyItemCulture,
    });
  };
  const onClickIt = () => {
    setDummyData({
      dataName: "it",
      cardData: dummyCardIt,
      itemData: dummyItemIt,
    });
  };
  const onClickSport = () => {
    setDummyData({
      dataName: "sport",
      cardData: dummyCardSport,
      itemData: dummyItemSport,
    });
  };
  const onClickCurrent = () => {
    setDummyData({
      dataName: "current",
      cardData: dummyCardCurrent,
      itemData: dummyItemCurrent,
    });
  };

  return (
    <div className={classes.storyMain}>
      <section className={`${classes.storyTopSection} ${classes.storyWrapper}`}>
        <div className={classes.storyTopSectionInnertext}>
          <h4 className={classes.topSectionTitle}>Story</h4>
          <p className={classes.topSectionMessage}>
            티스토리의 다양한 이야기들을 만나보세요
          </p>
        </div>
        <div className={`${classes.topSectionWrapTag}`}>
          <div className={classes.tags} onClick={() => onClickLife()}>
            <div
              className={`${classes.tagFocus} ${
                dummyData.dataName === "life" && classes.choiceTag
              }`}
            >
              라이프
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickTravel()}>
            <div
              className={`${classes.tagFocus} ${
                dummyData.dataName === "travel" && classes.choiceTag
              }`}
            >
              여행.맛집
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickCulture()}>
            <div
              className={`${classes.tagFocus} ${
                dummyData.dataName === "culture" && classes.choiceTag
              }`}
            >
              문화.연예
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickIt()}>
            <div
              className={`${classes.tagFocus} ${
                dummyData.dataName === "it" && classes.choiceTag
              }`}
            >
              It
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickSport()}>
            <div
              className={`${classes.tagFocus} ${
                dummyData.dataName === "sport" && classes.choiceTag
              }`}
            >
              스포츠
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickCurrent()}>
            <div
              className={`${classes.tagFocus} ${
                dummyData.dataName === "current" && classes.choiceTag
              }`}
            >
              시사
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={classes.blogBackGround}>
          <div className={classes.storyWrapper}>
            <StoryBlog dummyData={dummyData.cardData.data.list} />
          </div>
        </div>
      </section>

      <div className={classes.storyWrapper}>
        <StoryItemBox dummyData={dummyData.itemData.data.list} />
      </div>
    </div>
  );
};

export default Story;
