import React from 'react';
import FeedTopText from "./FeedTopText";
import FeedMidBox from "./FeedMidBox";
import FeedBottomCard from "./FeedBottomCard";
import classes from "./Feed.module.css";

const Feed = () => {

  return (
    <>
      <div className={classes.Wrapper}>
        <FeedTopText/>
        <FeedMidBox/>
        <FeedBottomCard/>
      </div>

    </>
  );
};

export default Feed;