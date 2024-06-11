import React, { useState } from "react";
import classes from "./Story.module.css";
import StoryBlog from "./StoryBlog";
import StoryItemBox from "./StoryItemBox";

const Story = () => {
  //현재 보여주고 있는 페이지를 결정하는 부분
  const [useTag, setUseTag] = useState("life");

  //tag클릭에 맞춰 state를 변경하는 함수
  const onClickHandler = (num) => {
    if (num === 0) {
      setUseTag("life");
    } else if (num === 1) {
      setUseTag("travel");
    } else if (num === 2) {
      setUseTag("culture");
    } else if (num === 3) {
      setUseTag("it");
    } else if (num === 4) {
      setUseTag("sport");
    } else if (num === 5) {
      setUseTag("current");
    }
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
          <div className={classes.tags} onClick={() => onClickHandler(0)}>
            <div
              className={`${classes.tagFocus} , ${
                useTag === "life" ? classes.textBold : ""
              }`}
            >
              라이프
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickHandler(1)}>
            <div
              className={`${classes.tagFocus} , ${
                useTag === "travel" ? classes.textBold : ""
              }`}
            >
              여행.맛집
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickHandler(2)}>
            <div
              className={`${classes.tagFocus} , ${
                useTag === "culture" ? classes.textBold : ""
              }`}
            >
              문화.연예
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickHandler(3)}>
            <div
              className={`${classes.tagFocus} , ${
                useTag === "it" ? classes.textBold : ""
              }`}
            >
              It
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickHandler(4)}>
            <div
              className={`${classes.tagFocus} , ${
                useTag === "sport" ? classes.textBold : ""
              }`}
            >
              스포츠
            </div>
          </div>
          <div className={classes.tags} onClick={() => onClickHandler(5)}>
            <div
              className={`${classes.tagFocus} , ${
                useTag === "current" ? classes.textBold : ""
              }`}
            >
              시사
            </div>{" "}
          </div>
        </div>
        {/*하단 카드 형태 블로그 노출*/}
      </section>
      <section className={classes.storyMidSection}>
        <StoryBlog className={classes.storyBlog} useTag={useTag} />
      </section>
      {/*하단 리스트 형태 블로그 노출*/}
      <div className={classes.storyWrapper}>
        <StoryItemBox useTag={useTag} />
      </div>
    </div>
  );
};

export default Story;
