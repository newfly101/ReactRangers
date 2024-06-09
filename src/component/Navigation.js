import React from "react";
import classes from "./Navigation.module.css";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  console.log(location.pathname === "/forum/");

  const onClickAdminPage = () => {
    console.log(location.pathname);
  };

  return (
    <nav className={classes.navBar}>
      <div className={classes.navBarBox}>
        <div className={classes.pageTitle}>
          <Link to="/">Tistory</Link>
        </div>
        <div className={classes.pageLinkBox}>
          <Link to="/feed">피드</Link>
        </div>
        <div className={classes.pageLinkBox}>
          <Link to="/story">스토리</Link>
        </div>
        <div className={classes.pageLinkBox}>
          <Link to="/skin">스킨</Link>
        </div>
        <div
          className={
            location.pathname !== "/forum/"
              ? classes.pageLinkBox
              : classes.pageLinkedBox
          }
        >
          <Link to="/forum">포럼</Link>
        </div>
      </div>
      <div
        className={`${
          location.pathname !== "/forum"
            ? classes.navBarLogin
            : classes.navBarLogin2
        }`}
      >
        <button onClick={onClickAdminPage}>
          <Link to="/admin">시작하기</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
