import React from "react";
import classes from "./Story.module.css";
import StoryBlog from "./StoryBlog";

const Story = () => {
  return (
    <div>
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
        <StoryBlog className={classes.storyBlog} />
        <StoryBlog className={classes.storyBlog} />
      </section>
      <section className={classes.storyBottomSection}>바텀영역입니다</section>
    </div>
  );
};

export default Story;
