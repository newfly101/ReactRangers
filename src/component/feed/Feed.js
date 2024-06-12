import React, { useState } from "react";
import classes from "./Feed.module.css";
import { feedCardDummyData } from "./FeedCardDummyData";

const Feed = () => {
  const [isListBox, setListBox] = useState(
    feedCardDummyData.data.map(() => true)
  );

  const handleListBoxTypeBtn = (index) => {
    const isListBoxIndex = { ...isListBox };
    isListBoxIndex[index] = !isListBoxIndex[index];
    setListBox(isListBoxIndex);
  };

  return (
    <div>
      <div className={classes.main}>
        <div className={classes.mainFeed}>
          <div className={classes.innerFeed}>
            <h2 className={classes.nameFeed}>Feed</h2>
            <div className={classes.pFont}>
              내가 구독하는 글입니다
              <div className={classes.btn}>
                <a href="/following" className={classes.subscription}>
                  구독중
                </a>
                <a href="/follower" className={classes.subscribers}>
                  구독자
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.feedBody}>
        <h3 className={classes.feedBodyMain}>구독중인 블로그가 없습니다.</h3>
        <p className={classes.feedBodyBlog}>
          스토리에서 인기글을 읽고, 마음에 드는 블로그를 구독해보세요.
          <br />
          구독하는 글을 피드에서 바로 확인하실 수 있습니다.
        </p>
        <div className={classes.feedStoryWrapBtn}>
          <a href="/story" className={classes.feedStoryBtn}>
            스토리 보러가기
          </a>
        </div>
      </div>
      <div className={classes.sectionSubscribe}>
        <div className={classes.infoBlogList}>
          <p className={classes.blogInfoDesc}>
            최근 활동이 많은 블로그입니다. 구독해보세요.
          </p>
        </div>
        <ul className={classes.listTistory}>
          {feedCardDummyData.data.map((item, index) => (
            <li key={index}>
              <a href={item.defaultUrl} className={classes.listBoxType}>
                <span className={classes.wrapListBox}>
                  <img
                    src={item.image}
                    className={classes.wrapListBoxProfile}
                    alt={item.nickname}
                  />
                </span>
                <strong className={classes.blogSubName}>{item.title}</strong>
                <dl className={classes.listData}>
                  <dt>구독자</dt>
                  <dd>{item.subscribers}</dd>
                </dl>
                <p className={classes.blogInfoDesc}>{item.description}</p>
              </a>
              <div className={classes.infoSubscribe}>
                <button
                  type="button"
                  className={
                    isListBox[index]
                      ? classes.listBoxTypeBtn
                      : classes.listBoxTypeChange
                  }
                  onClick={() => handleListBoxTypeBtn(index)}
                >
                  {isListBox[index] ? "구독하기" : "구독중"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feed;
