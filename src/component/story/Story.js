import React, { useState } from "react";
import classes from "./Story.module.css";
import StoryBlog from "./StoryBlog";
import StoryItemBox from "./StoryItemBox";
import { dummyCardLife } from "./dummyData/StoryDummyDataLife";
import { dummyCardCulture } from "./dummyData/StoryDummyDataCulture";
import { dummyCardIt } from "./dummyData/StoryDummyDataIt";
import { dummyCardCurrent } from "./dummyData/StoryDummyDataCurrent";
import { dummyCardSport } from "./dummyData/StoryDummyDataSport";
import { dummyCardTravel } from "./dummyData/StoryDummyDataTravel";
import { dummyItemLife } from "./dummyData/StoryDummyDataLife";
import { dummyItemCulture } from "./dummyData/StoryDummyDataCulture";
import { dummyItemIt } from "./dummyData/StoryDummyDataIt";
import { dummyItemCurrent } from "./dummyData/StoryDummyDataCurrent";
import { dummyItemSport } from "./dummyData/StoryDummyDataSport";
import { dummyItemTravel } from "./dummyData/StoryDummyDataTravel";

const Story = () => {
  const tagsName = [
    { tagName: "라이프", dataName: "life" },
    { tagName: "여행.맛집", dataName: "travel" },
    { tagName: "문화.연예", dataName: "culture" },
    { tagName: "IT", dataName: "it" },
    { tagName: "스포츠", dataName: "sport" },
    { tagName: "시사", dataName: "current" },
  ];

  const [dummyData, setDummyData] = useState({
    dataName: "life",
    cardData: dummyCardLife,
    itemData: dummyItemLife,
  });

  const onClickTag = (dataName) => {
    switch (dataName) {
      case "life":
        setDummyData({
          dataName: "life",
          cardData: dummyCardLife,
          itemData: dummyItemLife,
        });
        break;
      case "travel":
        setDummyData({
          dataName: "travel",
          cardData: dummyCardTravel,
          itemData: dummyItemTravel,
        });
        break;
      case "culture":
        setDummyData({
          dataName: "culture",
          cardData: dummyCardCulture,
          itemData: dummyItemCulture,
        });
        break;
      case "it":
        setDummyData({
          dataName: "it",
          cardData: dummyCardIt,
          itemData: dummyItemIt,
        });
        break;
      case "sport":
        setDummyData({
          dataName: "sport",
          cardData: dummyCardSport,
          itemData: dummyItemSport,
        });
        break;
      case "current":
        setDummyData({
          dataName: "current",
          cardData: dummyCardCurrent,
          itemData: dummyItemCurrent,
        });
        break;
      default:
        setDummyData({
          dataName: "current",
          cardData: dummyCardCurrent,
          itemData: dummyItemCurrent,
        });
    }
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
          {tagsName.map((item) => (
            <div
              className={classes.tags}
              onClick={() => onClickTag(item.dataName)}
            >
              <div
                className={`${classes.tagFocus} ${
                  dummyData.dataName === item.dataName && classes.choiceTag
                }`}
              >
                {item.tagName}
              </div>
            </div>
          ))}
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
