import React from "react";
import classes from "../Main/Main.module.css";
import mainImage from "../Main/Main.jpg";

const Main = () => {
  return (
    <>
      <div className={classes.contaner}>
        <img src={mainImage} className={classes.mainImage} alt="" />
        <div className={classes.textBox}>
          <h1 className={classes.title}>Skin</h1>
          <h2 className={classes.text}>
            다양한 스킨으로 나만의 다른 공간을 만들어보세요.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Main;
