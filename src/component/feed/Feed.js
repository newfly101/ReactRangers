import React, { useState } from "react";
import classes from "./Feed.module.css";
import { feedCardDummyData } from "./FeedCardDummyData";

const Feed = () => {
  const [isListBox1, setListBox1] = useState(true);
  const handleListBoxTypeBtn1 = () => {
    setListBox1(!isListBox1);
  };

  const [isListBox2, setListBox2] = useState(true);
  const handleListBoxTypeBtn2 = () => {
    setListBox2(!isListBox2);
  };

  const [isListBox3, setListBox3] = useState(true);
  const handleListBoxTypeBtn3 = () => {
    setListBox3(!isListBox3);
  };

  const [isListBox4, setListBox4] = useState(true);
  const handleListBoxTypeBtn4 = () => {
    setListBox4(!isListBox4);
  };

  const [isListBox5, setListBox5] = useState(true);
  const handleListBoxTypeBtn5 = () => {
    setListBox5(!isListBox5);
  };

  const [isListBox6, setListBox6] = useState(true);
  const handleListBoxTypeBtn6 = () => {
    setListBox6(!isListBox6);
  };

  const subscriptionBtn = () => {
    console.log(subscriptionBtn);
  };

  const subscribersBtn = () => {
    console.log(subscribersBtn);
  };

  const data1 = feedCardDummyData.data[0];
  const data2 = feedCardDummyData.data[1];
  const data3 = feedCardDummyData.data[2];
  const data4 = feedCardDummyData.data[3];
  const data5 = feedCardDummyData.data[4];
  const data6 = feedCardDummyData.data[5];

  return (
    <div>
      <div className={classes.main}>
        <div className={classes.mainFeed}>
          <div className={classes.innerFeed}>
            <h2 className={classes.nameFeed}>Feed</h2>
            <div className={classes.pFont}>
              내가 구독하는 글입니다
              <div className={classes.btn}>
                <a
                  href="/following"
                  onClick={subscriptionBtn}
                  className={classes.subscription}
                >
                  구독중
                </a>
                <a
                  href="/follower"
                  onClick={subscribersBtn}
                  className={classes.subscribers}
                >
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
          <li>
            <a href={data1.defaultUrl} className={classes.listBoxType1}>
              <span className={classes.wrapListBox}>
                <img
                  src={data1.image}
                  className={classes.wrapListBoxProfile}
                  alt={data1.nickname}
                />
              </span>
              <strong className={classes.blogSubName}>{data1.title}</strong>
              <dl className={classes.listData}>
                <dt>구독자</dt>
                <dd>{data1.subscribers}</dd>
              </dl>
              <p className={classes.blogInfoDesc}>{data1.description}</p>
            </a>
            <div className={classes.infoSubscribe}>
              <button
                type="button"
                className={
                  isListBox1
                    ? classes.listBoxTypeBtn
                    : classes.listBoxTypeChange
                }
                onClick={handleListBoxTypeBtn1}
              >
                {isListBox1 ? "구독하기" : "구독중"}
              </button>
            </div>
          </li>
          <li>
            <a href={data2.defaultUrl} className={classes.listBoxType}>
              <span className={classes.wrapListBox}>
                <img
                  src={data2.image}
                  className={classes.wrapListBoxProfile}
                  alt={data2.nickname}
                />
              </span>
              <strong className={classes.blogSubName}>{data2.title}</strong>
              <dl className={classes.listData}>
                <dt>구독자</dt>
                <dd>{data2.subscribers}</dd>
              </dl>
              <p className={classes.blogInfoDesc}>{data2.description}</p>
            </a>
            <div className={classes.infoSubscribe}>
              <button
                type="button"
                className={
                  isListBox2
                    ? classes.listBoxTypeBtn
                    : classes.listBoxTypeChange
                }
                onClick={handleListBoxTypeBtn2}
              >
                {isListBox2 ? "구독하기" : "구독중"}
              </button>
            </div>
          </li>
          <li>
            <a href={data3.defaultUrl} className={classes.listBoxType}>
              <span className={classes.wrapListBox}>
                <img
                  src={data3.image}
                  className={classes.wrapListBoxProfile}
                  alt={data3.nickname}
                />
              </span>
              <strong className={classes.blogSubName}>{data3.title}</strong>
              <dl className={classes.listData}>
                <dt>구독자</dt>
                <dd>{data3.subscribers}</dd>
              </dl>
              <p className={classes.blogInfoDesc}>{data3.description}</p>
            </a>
            <div className={classes.infoSubscribe}>
              <button
                type="button"
                className={
                  isListBox3
                    ? classes.listBoxTypeBtn
                    : classes.listBoxTypeChange
                }
                onClick={handleListBoxTypeBtn3}
              >
                {isListBox3 ? "구독하기" : "구독중"}
              </button>
            </div>
          </li>
          <li>
            <a href={data4.defaultUrl} className={classes.listBoxType}>
              <span className={classes.wrapListBox}>
                <img
                  src={data4.image}
                  className={classes.wrapListBoxProfile}
                  alt={data4.nickname}
                />
              </span>
              <strong className={classes.blogSubName}>{data4.title}</strong>
              <dl className={classes.listData}>
                <dt>구독자</dt>
                <dd>{data4.subscribers}</dd>
              </dl>
              <p className={classes.blogInfoDesc}>{data4.description}</p>
            </a>
            <div className={classes.infoSubscribe}>
              <button
                type="button"
                className={
                  isListBox4
                    ? classes.listBoxTypeBtn
                    : classes.listBoxTypeChange
                }
                onClick={handleListBoxTypeBtn4}
              >
                {isListBox4 ? "구독하기" : "구독중"}
              </button>
            </div>
          </li>
          <li>
            <a href={data5.defaultUrl} className={classes.listBoxType}>
              <span className={classes.wrapListBox}>
                <img
                  src={data5.image}
                  className={classes.wrapListBoxProfile}
                  alt={data5.nickname}
                />
              </span>
              <strong className={classes.blogSubName}>{data5.title}</strong>
              <dl className={classes.listData}>
                <dt>구독자</dt>
                <dd>{data5.subscribers}</dd>
              </dl>
              <p className={classes.blogInfoDesc}>{data5.description}</p>
            </a>
            <div className={classes.infoSubscribe}>
              <button
                type="button"
                className={
                  isListBox5
                    ? classes.listBoxTypeBtn
                    : classes.listBoxTypeChange
                }
                onClick={handleListBoxTypeBtn5}
              >
                {isListBox5 ? "구독하기" : "구독중"}
              </button>
            </div>
          </li>
          <li>
            <a href={data6.defaultUrl} className={classes.listBoxType}>
              <span className={classes.wrapListBox}>
                <img
                  src={data6.image}
                  className={classes.wrapListBoxProfile}
                  alt={data6.nickname}
                />
              </span>
              <strong className={classes.blogSubName}>{data6.title}</strong>
              <dl className={classes.listData}>
                <dt>구독자</dt>
                <dd>{data6.subscribers}</dd>
              </dl>
              <p className={classes.blogInfoDesc}>{data6.description}</p>
            </a>
            <div className={classes.infoSubscribe}>
              <button
                type="button"
                className={
                  isListBox6
                    ? classes.listBoxTypeBtn
                    : classes.listBoxTypeChange
                }
                onClick={handleListBoxTypeBtn6}
              >
                {isListBox6 ? "구독하기" : "구독중"}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Feed;
