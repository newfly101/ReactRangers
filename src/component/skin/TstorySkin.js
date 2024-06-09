import React from "react";
import classes from "./TstorySkin.module.css";
import mainImage from "./SkinPageImage.jpg";
import { ReactComponent as LinkIcon } from "./link.svg";

const TstorySkin = () => {
  return (
    <>
      <div className={classes.imageContaner}>
        <img src={mainImage} className={classes.mainImage} alt="" />
        <div className={classes.mainImage_textBox}>
          <h1 className={classes.mainImage_textBox_title}>Skin</h1>
          <h2 className={classes.mainImage_textBox_text}>
            다양한 스킨으로 나만의 다른 공간을 만들어보세요.
          </h2>
        </div>
      </div>
      <div className={`${classes.allContainer} ${classes.buttonContainer}`}>
        <div className={classes.ButtonWrapUp}>
          <div className={`${classes.allButton} ${classes.buttonTitle}`}>
            <button>티스토리 스킨</button>
            <button>이용자 제작 스킨</button>
          </div>
          <div
            className={`${classes.allButton} ${classes.hoverLine} ${classes.tagButtonContainer}`}
          >
            <button>#매거진</button>
            <button>#미니멀</button>
            <button>#반응형</button>
            <button>#블로그형</button>
            <button>#사이트</button>
            <button>#초보</button>
            <button>#커버 지원</button>
          </div>
        </div>
      </div>
      <div className={`${classes.allContainer} ${classes.card_white}`}>
        <div className={classes.card_wrap}>
          <div className={`${classes.allButton} ${classes.card_title}`}>
            <button>
              <h1>Odyssey</h1>
            </button>
          </div>
          <div className={` ${classes.card_text}`}>
            <p>글과 사진, 그리고 영상을 담아</p>
            <p>당신의 블로그 여행에 함께합니다.</p>
          </div>
          <div className={classes.card_button}>
            <div className={`${classes.allButton} ${classes.hoverLine}`}>
              <button>#반응형</button>
              <button>#블로그형</button>
              <button>#커버 지원</button>
            </div>
            <div className={`${classes.roundButton}`}>
              <button>자세히 보기</button>
              <button>
                적용 예시 보기
                <span className={classes.button_link_Icon}>
                  <LinkIcon className={classes.icon} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TstorySkin;
