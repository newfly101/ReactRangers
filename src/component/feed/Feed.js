import React, { useState } from "react";
import classes from "./Feed.module.css";

const Feed = () => {
  const [isListBox, setListBox] = useState(false);
  const handleListBoxTypeBtn = () => {
    setListBox(!isListBox);
    console.log("isListBox", isListBox);
  };

  const subscriptionBtn = () => {
    console.log(subscriptionBtn);
  };

  const subscribersBtn = () => {
    console.log(subscribersBtn);
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
                <div onClick={subscriptionBtn} className={classes.subscription}>
                  구독중
                </div>
                <div onClick={subscribersBtn} className={classes.subscribers}>
                  구독자
                </div>
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
            <div className={classes.listBoxType1}>
              팀장님
              <span className={classes.wrapListBox}>
                <img
                  src="https://cdn.dribbble.com/users/928524/screenshots/18187707/media/3434d86e6cb39ee60c07bf530ab4f6bc.jpg"
                  className={classes.wrapListBoxProfile}
                  alt=""
                />
              </span>
              <strong className={classes.blogSubName}>친절한 강사님</strong>
              <dl className={classes.listData}>
                <dt>구독자</dt>
                <dd>999+</dd>
              </dl>
              <p className={classes.blogInfoDesc}>팀장님의 블로그입니다.</p>
            </div>
            <div className={classes.infoSubscribe}>
              <button
                type="button"
                className={
                  isListBox ? classes.listBoxTypeBtn : classes.listBoxTypeChange
                }
                onClick={handleListBoxTypeBtn}
              >
                {isListBox ? "구독하기" : "구독중"}
              </button>
            </div>
          </li>
          <li>
            <div className={classes.listBoxType}>
              팀원
              <span className={classes.wrapListBox}>
                <img
                  src="https://cdn.dribbble.com/users/3511234/screenshots/17460635/media/cbc5167f919d7c06970f88e701168d88.png?resize=1600x1200&vertical=center"
                  className={classes.wrapListBoxProfile}
                  alt=""
                />
              </span>
              <strong className={classes.blogSubName}>팀원1</strong>
              <dl className={classes.listData}>
                <dt>구독자</dt>
                <dd>1</dd>
              </dl>
              <p className={classes.blogInfoDesc}>팀원의 블로그</p>
            </div>
            <div className={classes.infoSubscribe}>
              <button type="button" className={classes.listBoxTypeBtn}>
                구독하기
              </button>
            </div>
          </li>
          <li>
            <div className={classes.listBoxType}>
              팀원
              <span className={classes.wrapListBox}>
                <img
                  src="https://cdn.dribbble.com/userupload/12743553/file/original-2fda5aa6c8f679783b0dd0229db75c17.jpg?resize=1024x576"
                  className={classes.wrapListBoxProfile}
                  alt=""
                />
              </span>
              <strong className={classes.blogSubName}>팀원2</strong>
              <dl className={classes.listData}>
                <dt>구독자</dt>
                <dd>1</dd>
              </dl>
              <p className={classes.blogInfoDesc}>팀원의 블로그</p>
            </div>
            <div className={classes.infoSubscribe}>
              <button type="button" className={classes.listBoxTypeBtn}>
                구독하기
              </button>
            </div>
          </li>
          <li>
            <div className={classes.listBoxType}>
              팀원
              <span className={classes.wrapListBox}>
                <img
                  src="https://cdn.dribbble.com/userupload/13883479/file/original-e43c5a7c87c7fd915e448fe09c67448e.png?resize=1024x1024"
                  className={classes.wrapListBoxProfile}
                  alt=""
                />
              </span>
              <strong className={classes.blogSubName}>팀원3</strong>
              <dl className={classes.listData}>
                <dt>구독자</dt>
                <dd>1</dd>
              </dl>
              <p className={classes.blogInfoDesc}>팀원의 블로그</p>
            </div>
            <div className={classes.infoSubscribe}>
              <button type="button" className={classes.listBoxTypeBtn}>
                구독하기
              </button>
            </div>
          </li>
          <li>
            <div className={classes.listBoxType}>
              팀원
              <span className={classes.wrapListBox}>
                <img
                  src="https://cdn.dribbble.com/userupload/9605271/file/original-e312a23e7092797dde6ca8a66b0a5e85.png?resize=1024x768"
                  className={classes.wrapListBoxProfile}
                  alt=""
                />
              </span>
              <strong className={classes.blogSubName}>팀원4</strong>
              <dl className={classes.listData}>
                <dt>구독자</dt>
                <dd>1</dd>
              </dl>
              <p className={classes.blogInfoDesc}>팀원의 블로그</p>
            </div>
            <div className={classes.infoSubscribe}>
              <button type="button" className={classes.listBoxTypeBtn}>
                구독하기
              </button>
            </div>
          </li>
          <li>
            <div className={classes.listBoxType}>
              팀원
              <span className={classes.wrapListBox}>
                <img
                  src="https://cdn.dribbble.com/userupload/13972326/file/original-348fea02bcdb53fe7d6347f517f1ca31.png?resize=752x564"
                  className={classes.wrapListBoxProfile}
                  alt=""
                />
              </span>
              <strong className={classes.blogSubName}>팀원5</strong>
              <dl className={classes.listData}>
                <dt>구독자</dt>
                <dd>1</dd>
              </dl>
              <p className={classes.blogInfoDesc}>팀원의 블로그</p>
            </div>
            <div className={classes.infoSubscribe}>
              <button type="button" className={classes.listBoxTypeBtn}>
                구독하기
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Feed;
