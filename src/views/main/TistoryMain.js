import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "../../css/main/TistoryMain.module.css";
import MainHeader from "./MainHeader";
import MainContent from "./MainContent";
import MainBanner from "./MainBanner";

const TistoryMain = () => {
  return (
    <div className={classes.App}>
      <MainHeader />
      <MainContent />
      <MainBanner />
    </div>
  );
};

export default TistoryMain;
