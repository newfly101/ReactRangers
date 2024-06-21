import React from 'react';
import FeedTopText from "./FeedTopText";
import FeedMidBox from "./FeedMidBox";
import FeedBottomCard from "./FeedBottomCard";
import classes from "./Feed.module.css";
import FeedStore from "../../stores/FeedStore";
import {Observer} from "mobx-react";

const Feed = () => {
const feedStore = new FeedStore();
  return (
    <Observer>
      {()=>(
        <>
          <div className={classes.Wrapper}>
            <FeedTopText feedStore={feedStore}/>
            {feedStore.feedPage === 'Follower' || feedStore.feedPage === 'Following'
              ? <div className={classes.followText}>{feedStore.followMidText}</div> :
              <>
                <FeedMidBox/>
                <FeedBottomCard/>
              </>
            }
          </div>
        </>
      )}
    </Observer>
  );
};

export default Feed;