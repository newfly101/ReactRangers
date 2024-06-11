import React, { useState } from "react";
import classes from "./Story.module.css";
import StoryBlog from "./StoryBlog";
import StoryItemBox from "./StoryItemBox";

const Story = () => {
  const [tagUp0, setTagUp0] = useState(false);
  const [tagUp1, setTagUp1] = useState(false);
  const [tagUp2, setTagUp2] = useState(false);
  const [tagUp3, setTagUp3] = useState(false);
  const [tagUp4, setTagUp4] = useState(false);
  const [tagUp5, setTagUp5] = useState(false);

  const [tagView0, setTagView0] = useState(true);
  const [tagView1, setTagView1] = useState(false);
  const [tagView2, setTagView2] = useState(false);
  const [tagView3, setTagView3] = useState(false);
  const [tagView4, setTagView4] = useState(false);
  const [tagView5, setTagView5] = useState(false);

  const [useTag, setUseTag] = useState("life");

  const onHoverHandler = (num) => {
    if (num === 0) {
      setTagUp0(true);
    } else if (num === 1) {
      setTagUp1(true);
    } else if (num === 2) {
      setTagUp2(true);
    } else if (num === 3) {
      setTagUp3(true);
    } else if (num === 4) {
      setTagUp4(true);
    } else if (num === 5) {
      setTagUp5(true);
    }
  };

  const onHoverOutHandler = (num) => {
    if (num === 0) {
      setTagUp0(false);
    } else if (num === 1) {
      setTagUp1(false);
    } else if (num === 2) {
      setTagUp2(false);
    } else if (num === 3) {
      setTagUp3(false);
    } else if (num === 4) {
      setTagUp4(false);
    } else if (num === 5) {
      setTagUp5(false);
    }
  };

  const onClickHandler = (num) => {
    if (num === 0) {
      setTagView0(true);
      setTagView1(false);
      setTagView2(false);
      setTagView3(false);
      setTagView4(false);
      setTagView5(false);

      setUseTag("life");
    } else if (num === 1) {
      setTagView0(false);
      setTagView1(true);
      setTagView2(false);
      setTagView3(false);
      setTagView4(false);
      setTagView5(false);
      setUseTag("travel");
    } else if (num === 2) {
      setTagView0(false);
      setTagView1(false);
      setTagView2(true);
      setTagView3(false);
      setTagView4(false);
      setTagView5(false);
      setUseTag("culture");
    } else if (num === 3) {
      setTagView0(false);
      setTagView1(false);
      setTagView2(false);
      setTagView3(true);
      setTagView4(false);
      setTagView5(false);
      setUseTag("it");
    } else if (num === 4) {
      setTagView0(false);
      setTagView1(false);
      setTagView2(false);
      setTagView3(false);
      setTagView4(true);
      setTagView5(false);
      setUseTag("sport");
    } else if (num === 5) {
      setTagView0(false);
      setTagView1(false);
      setTagView2(false);
      setTagView3(false);
      setTagView4(false);
      setTagView5(true);
      setUseTag("current");
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

        <div className={classes.topSectionWrapTag}>
          <div
            className={classes.tags}
            onMouseOver={() => onHoverHandler(0)}
            onMouseOut={() => onHoverOutHandler(0)}
            onClick={() => onClickHandler(0)}
          >
            라이프
            {tagUp0 && <div className={classes.tagHr0} />}
            {tagView0 && <div className={classes.tagHrView0} />}
          </div>
          <div
            className={classes.tags}
            onMouseOver={() => onHoverHandler(1)}
            onMouseOut={() => onHoverOutHandler(1)}
            onClick={() => onClickHandler(1)}
          >
            여행.맛집 {tagUp1 && <div className={classes.tagHr1} />}
            {tagView1 && <div className={classes.tagHrView1} />}
          </div>
          <div
            className={classes.tags}
            onMouseOver={() => onHoverHandler(2)}
            onMouseOut={() => onHoverOutHandler(2)}
            onClick={() => onClickHandler(2)}
          >
            문화.연예 {tagUp2 && <div className={classes.tagHr2} />}
            {tagView2 && <div className={classes.tagHrView2} />}
          </div>
          <div
            className={classes.tags}
            onMouseOver={() => onHoverHandler(3)}
            onMouseOut={() => onHoverOutHandler(3)}
            onClick={() => onClickHandler(3)}
          >
            IT {tagUp3 && <div className={classes.tagHr3} />}
            {tagView3 && <div className={classes.tagHrView3} />}
          </div>
          <div
            className={classes.tags}
            onMouseOver={() => onHoverHandler(4)}
            onMouseOut={() => onHoverOutHandler(4)}
            onClick={() => onClickHandler(4)}
          >
            스포츠 {tagUp4 && <div className={classes.tagHr4} />}
            {tagView4 && <div className={classes.tagHrView4} />}
          </div>
          <div
            className={classes.tags}
            onMouseOver={() => onHoverHandler(5)}
            onMouseOut={() => onHoverOutHandler(5)}
            onClick={() => onClickHandler(5)}
          >
            시사 {tagUp5 && <div className={classes.tagHr5} />}
            {tagView5 && <div className={classes.tagHrView5} />}
          </div>
        </div>
      </section>
      <section className={classes.storyMidSection}>
        <StoryBlog className={classes.storyBlog} useTag={useTag} />
      </section>
      <div className={classes.storyWrapper}>
        <StoryItemBox useTag={useTag} />
      </div>
    </div>
  );
};

export default Story;
