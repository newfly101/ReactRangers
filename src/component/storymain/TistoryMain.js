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
      <StoryMainHeader />
      <StoryMainContent />
      <StoryMainBanner />
    </div>
  );
};

export default TistoryMain;
