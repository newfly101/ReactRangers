import React from "react";
import classes from "./Navigation.module.css";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  console.log(location.pathname === "/forum/");

  return (
    <nav className={classes.navBar}>
      <div className={classes.navBarBox}>
        <div className={classes.pageTitle}>
          <a href="/">Tistory</a>
        </div>
        <div className={classes.pageLinkBox}>
          <a href="/feed">피드</a>
        </div>
        <div className={classes.pageLinkBox}>
          <a href="/">스토리</a>
        </div>
        <div className={classes.pageLinkBox}>
          <a href="/">스킨</a>
        </div>
        <div
          className={
            location.pathname !== "/forum/"
              ? classes.pageLinkBox
              : classes.pageLinkedBox
          }
        >
          <a href="/forum">포럼</a>
        </div>
      </div>
      <div
        className={`${
          location.pathname !== "/forum"
            ? classes.navBarLogin
            : classes.navBarLogin2
        }`}
      >
        <button>시작하기</button>
      </div>
    </nav>
  );
};

export default Navigation;
