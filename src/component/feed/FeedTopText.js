import React from 'react';
import classes from "./FeedTopText.module.css";
import {Observer} from "mobx-react";

const FeedTopText = ({feedStore}) => {

  return (<Observer>
      {() => (<div className={classes.topTextContainer}>
          <div className={classes.topTitle}>{feedStore.feedPage}</div>
          <div className={classes.subscribeInfo}>
            <div className={classes.topText}>{feedStore.feedPageText}</div>
            <div className={classes.subscribeWrapper}>
              {feedStore.feedPage === 'Follower' || feedStore.feedPage === 'Following' ?
                <><span className={classes.subscribingNum}>최신 구독순</span><span className={classes.subscribingNum}>블로그 이름순</span></> :
                <><span className={classes.subscribingNum} onClick={feedStore.clickSubscribeing}> 구독중 <span className={classes.subscribeNum}>0</span>
          </span>
                <span className={classes.subscribingNum} onClick={feedStore.clickSubscribed}> 구독자 <span className={classes.subscribeNum}>0</span>
                </span></>
              }

            </div>
          </div>
        </div>)}
    </Observer>);
};

export default FeedTopText;