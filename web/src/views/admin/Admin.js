import React, { useState } from "react";
import classes from "../../css/admin/Admin.module.css";
import AdminFilter from "./AdminFilter";
import { Link } from "react-router-dom";
import MyProfile from "./MyProfile";
import { PathUrl } from "../../stores/CommonStore";

const Admin = () => {
  return (
    <div className={classes.admin}>
      <div className={classes.adminLeft}>
        <MyProfile />
      </div>
      <div className={classes.adminRight}>
        <label className={classes.blogBoxTitle}> 운영 중인 블로그</label>
        <div className={classes.blogBox}>
          <img
            src="https://img1.daumcdn.net/thumb/S180x180/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fmanage%2Fimages%2Fr3%2Fdefault_S.png"
            alt="profileImg"
            className={classes.profileImg}
          />
          <div>
            <label>새벽의 이것저것</label>
            <div className={classes.profileEmail}>game.tistory.com</div>
          </div>
          <button className={classes.blogBoxButton}>대표</button>
        </div>
        <div className={classes.blogBoxExplanation}>
          대표 블로그는 방문한 블로그/팀블로그 활동 시 사용됩니다.
        </div>

        <div className={classes.adminTitle}>운영∙개설 현황</div>
        <div>
          <div className={classes.currentSituationBox}>
            <div>4개의 블로그를 더 운영할 수 있습니다.</div>
            <div className={classes.currentSituationBoxText}>
              운영 중인 블로그 1개
            </div>
          </div>
          <div className={classes.currentSituationBox}>
            <div>블로그 개설 가능 횟수가 8회 남았습니다.</div>
            <div className={classes.currentSituationBoxText}>
              과거 개설 횟수 1회
            </div>
          </div>
          <div className={classes.newBlogButtonBox}>
            <button className={classes.newBlogButton}>새 블로그 만들기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
