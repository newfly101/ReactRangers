import React from "react";
import classes from "./Feed.module.css";

const Feed = () => {
  return (
    <div className={classes.main}>
      <div className={classes.mainFeed}>
        <div className={classes.innerFeed}>
          <h2 className={classes.nameFeed}>Feed</h2>
          <p className={classes.pFont}>내가 구독하는 글입니다</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
