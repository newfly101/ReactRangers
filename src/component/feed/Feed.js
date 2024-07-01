import React from 'react';
import FeedTopText from "./FeedTopText";
import FeedMidBox from "./FeedMidBox";
import FeedBottomCard from "./FeedBottomCard";
import classes from "./Feed.module.css";
import FeedStore from "../../stores/FeedStore";
import {Observer, useLocalObservable} from "mobx-react";

const Feed = () => {
  const feedStore = useLocalObservable(() => new FeedStore());
  return (
    <div className={classes.Wrapper}>
      <Observer>
        {() => (
          <>
            <FeedTopText feedStore={feedStore}/>
            {feedStore.feedPage === 'Follower' || feedStore.feedPage === 'Following'
              ? <div className={classes.followText}>{feedStore.followMidText}</div> :
              <>
                <FeedMidBox/>
                <FeedBottomCard/>
              </>
            }
          </>
        )}
      </Observer>
    </div>
  );
};

export default Feed;