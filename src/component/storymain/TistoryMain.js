import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./TistoryMain.module.css";
import StoryMainHeader from "./StoryMainHeader";
import StoryMainContent from "./StoryMainContent";
import StoryMainBanner from "./StoryMainBanner";

const TistoryMain = () => {
  return (
    <div className={classes.App}>
      <div>
        <StoryMainHeader />
        <div>
          <img
            src="https://t1.daumcdn.net/tistory_admin/static/top/pc/img_light.png"
            alt="TistoryLight"
            className={classes.tistoryLight}
          />
        </div>
      </div>
      <div>
        <StoryMainContent />
        <StoryMainBanner />
      </div>
    </div>
  );
};

export default TistoryMain;
