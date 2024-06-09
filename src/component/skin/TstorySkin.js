import React from "react";
import classes from "./TstorySkin.module.css";
import mainImage from "./SkinPageImage.jpg";

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
      <div className={classes.buttonContainer}>
        <div className={classes.ButtonwrapUp}>
          <div className={`${classes.allbutton} ${classes.buttontitle}`}>
            <button>티스토리 스킨</button>
            <button>이용자 제작 스킨</button>
          </div>
          <div
            className={`${classes.allbutton} ${classes.hoverline} ${classes.tagButtonContainer}`}
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
      <div className={classes.card_white}>
        <div className={classes.allbutton}>
          <button>
            <h1>Odyssey</h1>
          </button>
        </div>
        <p>글과 사진, 그리고 영상을 담아</p>
        <p>당신의 블로그 여행에 함께합니다.</p>
        <div className={`${classes.allbutton} ${classes.hoverline}`}>
          <button>#반응형</button>
          <button>#블로그형</button>
          <button>#커버 지원</button>
        </div>
      </div>
    </>
  );
};

export default TstorySkin;
