import React from "react";
import classes from "./Story.module.css";
import StoryBlog from "./StoryBlog";
import StoryItemBox from "./StoryItemBox";

const Story = () => {
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
          <div>라이프</div>
          <div>여행.맛집</div>
          <div>문화.연예</div>
          <div>IT</div>
          <div>스포츠</div>
          <div>시사</div>
        </div>
      </section>
      <section className={classes.storyMidSection}>
        <StoryBlog className={classes.storyBlog} />
      </section>
      <div className={classes.storyWrapper}>
        <StoryItemBox />
      </div>
    </div>
  );
};

export default Story;
