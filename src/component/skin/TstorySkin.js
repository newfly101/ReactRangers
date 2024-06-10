import React from "react";
import classes from "./TstorySkin.module.css";
import cardImage from "./Odyssey.img/Odyssey0.jpg";
import TopImage from "./ComponentA/Main/Main";
import Category from "./ComponentA/Category/Category";
import { ReactComponent as LinkIcon } from "./link.svg";

const TstorySkin = () => {
  return (
    <>
      <TopImage />
      <Category />
      <div className={classes.card0}>
        <div className={`${classes.allContainer} ${classes.cardWhite}`}>
          <div className={classes.cardWrap}>
            <div className={`${classes.allButton} ${classes.cardTitle}`}>
              <button>
                <h1>Odyssey</h1>
              </button>
            </div>
            <div className={` ${classes.cardInnerText}`}>
              <div>글과 사진, 그리고 영상을 담아</div>
              <div>당신의 블로그 여행에 함께합니다.</div>
            </div>
            <div className={classes.cardButton}>
              <div
                className={`${classes.allButton} ${classes.hoverLine} ${classes.cardTagButton} `}
              >
                <button>#반응형</button>
                <button>#블로그형</button>
                <button>#커버 지원</button>
              </div>
              <div className={`${classes.roundButton}`}>
                <button>자세히 보기</button>
                <button className={classes.buttonLinkIcon}>
                  적용 예시 보기
                  <span>
                    <LinkIcon className={classes.icon} />
                  </span>
                </button>
              </div>
            </div>
            <div className={classes.cardImageContaner}>
              <div className={classes.cardImage}>
                <img src={cardImage} alt="" />
              </div>
              <div className={classes.cardImage}>
                <img src={cardImage} alt="" />
              </div>
              <div className={classes.cardImage}>
                <img src={cardImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.card1}>
        <div className={`${classes.allContainer} ${classes.cardGray}`}>
          <div className={classes.cardWrap}>
            <div className={`${classes.allButton} ${classes.cardTitle}`}>
              <button>
                <h1>Odyssey</h1>
              </button>
            </div>
            <div className={` ${classes.cardInnerText}`}>
              <div>글과 사진, 그리고 영상을 담아</div>
              <div>당신의 블로그 여행에 함께합니다.</div>
            </div>
            <div className={classes.cardButton}>
              <div
                className={`${classes.allButton} ${classes.hoverLine} ${classes.cardTagButton} `}
              >
                <button>#반응형</button>
                <button>#블로그형</button>
                <button>#커버 지원</button>
              </div>
              <div className={`${classes.roundButton}`}>
                <button>자세히 보기</button>
                <button className={classes.buttonLinkIcon}>
                  적용 예시 보기
                  <span>
                    <LinkIcon className={classes.icon} />
                  </span>
                </button>
              </div>
            </div>
            <div className={classes.cardImageContaner}>
              <div className={classes.cardImage}>
                <img src={cardImage} alt="" />
              </div>
              <div className={classes.cardImage}>
                <img src={cardImage} alt="" />
              </div>
              <div className={classes.cardImage}>
                <img src={cardImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TstorySkin;
