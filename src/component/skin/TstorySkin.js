import React from "react";
import classes from "./TstorySkin.module.css";
import mainImage from "./SkinPageImage.jpg";

const TstorySkin = () => {
  return (
    <>
      <div className={classes.imageContaner}>
        <img src={mainImage} className={classes.mainImage} />
        <div className={classes.mainImage_textBox}>
          <h1 className={classes.mainImage_textBox_title}>Skin</h1>
          <h2 className={classes.mainImage_textBox_text}>
            다양한 스킨으로 나만의 다른 공간을 만들어보세요.
          </h2>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.wrapUp}>
          <button>티스토리 스킨</button>
          <button>이용자 제작 스킨</button>
        </div>
      </div>
    </>
  );
};

export default TstorySkin;
