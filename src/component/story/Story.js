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
  //현재 보여주고 있는 페이지를 결정하는 부분

  const [dummyData, setDummyData] = useState([
    "life",
    dummyCardLife,
    dummyItemLife,
  ]);
  //tag클릭에 맞춰 state를 변경하는 함수
  const onClickLife = () => {
    setDummyData(["life", dummyCardLife, dummyItemLife]);
  };
  const onClickTravel = () => {
    setDummyData(["travel", dummyCardTravel, dummyItemTravel]);
  };
  const onClickCulture = () => {
    setDummyData(["culture", dummyCardCulture, dummyItemCulture]);
  };
  const onClickIt = () => {
    setDummyData(["it", dummyCardIt, dummyItemIt]);
  };
  const onClickSport = () => {
    setDummyData(["sport", dummyCardSport, dummyItemSport]);
  };
  const onClickCurrent = () => {
    setDummyData(["current", dummyCardCurrent, dummyItemCurrent]);
  };

  return (
    <div className={classes.storyMain}>
      <section className={`${classes.storyTopSection} ${classes.storyWrapper}`}>
        {/*상단 글자*/}
        <div className={classes.storyTopSectionInnertext}>
          <h4 className={classes.topSectionTitle}>Story</h4>
          <p className={classes.topSectionMessage}>
            티스토리의 다양한 이야기들을 만나보세요
          </p>
        </div>

        {/*태그*/}
        <div className={classes.topSectionWrapTag}>
          <div className={classes.tags} onClick={() => onClickLife()}>
            <div
              className={`${classes.tagFocus} ${
                dummyData[0] === "life" ? classes.textBold : ""
              }`}
            >
              라이프
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickTravel()}>
            <div
              className={`${classes.tagFocus} ${
                dummyData[0] === "travel" ? classes.textBold : ""
              }`}
            >
              여행.맛집
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickCulture()}>
            <div
              className={`${classes.tagFocus} ${
                dummyData[0] === "culture" ? classes.textBold : ""
              }`}
            >
              문화.연예
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickIt()}>
            <div
              className={`${classes.tagFocus} ${
                dummyData[0] === "it" ? classes.textBold : ""
              }`}
            >
              It
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickSport()}>
            <div
              className={`${classes.tagFocus} ${
                dummyData[0] === "sport" ? classes.textBold : ""
              }`}
            >
              스포츠
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickCurrent()}>
            <div
              className={`${classes.tagFocus} ${
                dummyData[0] === "current" ? classes.textBold : ""
              }`}
            >
              시사
            </div>
          </div>
        </div>
        {/*하단 카드 형태 블로그 노출*/}
      </section>
      <section className={classes.storyMidSection}>
        <StoryBlog className={classes.storyBlog} dummyData={dummyData} />
      </section>
      {/*하단 리스트 형태 블로그 노출*/}
      <div className={classes.storyWrapper}>
        <StoryItemBox dummyData={dummyData} />
      </div>
    </div>
  );
};

export default Story;
