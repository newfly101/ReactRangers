import React, { useState } from "react";
import classes from "../../css/admin/Admin.module.css";
import AdminFilter from "./AdminFilter";
import { Link } from "react-router-dom";
import MyProfile from "./MyProfile";
import { PathUrl } from "../../stores/CommonStore";

const Admin = () => {
  const [filteredReceive, setFilteredReceive] = useState();

  const changeFilterHandler = (selectedValue) => {
    setFilteredReceive(
      selectedValue === "수신합니다." ? "수신합니다." : "수신하지 않습니다."
    );
  };

  return (
    <div className={classes.admin}>
      <div className={classes.adminLeft}>
        <MyProfile />
      </div>
      <div className={classes.adminRight}>
        <div className={classes.adminBlog}>
          <div className={classes.adminFont}> 운영 중인 블로그</div>
          <form className={classes.adminBlock}>
            <div className={classes.adminBlockImage}>
              <a href="https://github.com/newfly101/ReactRangers">
                <img
                  src="https://img1.daumcdn.net/thumb/S180x180/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fmanage%2Fimages%2Fr3%2Fdefault_S.png"
                  alt="프로필 이미지"
                ></img>
              </a>
            </div>
            <div className={classes.adminBlockMenu}>
              <label>새벽의 이것저것</label>
              <div className={classes.adminBlockEmail}>game.tistory.com</div>
            </div>
            <div>
              <button className={classes.adminBlockButton}>대표</button>
            </div>
          </form>
          <div className={classes.adminBlockGuide}>
            대표 블로그는 방문한 블로그/팀블로그 활동 시 사용됩니다.
          </div>
        </div>
        <div>
          <div className={classes.adminFont}>운영∙개설 현황</div>
          <div>
            <div className={classes.adminSituation1}>
              <div className={classes.adminBlock2}>
                4개의 블로그를 더 운영할 수 있습니다.
              </div>
              <div className={classes.adminBlock3}>운영 중인 블로그 1개</div>
            </div>
            <div className={classes.adminSituation2}>
              <div className={classes.adminBlock4}>
                블로그 개설 가능 횟수가 8회 남았습니다.
              </div>
              <div className={classes.adminBlock5}>과거 개설 횟수 2회</div>
            </div>
            <div className={classes.adminBlockBtn}>
              <Link to={PathUrl.NEW_BLOG}>
                <button className={classes.adminBlockBtnWindow}>
                  새 블로그 만들기
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.adminFont}>이메일 알림</div>
          <div>
            <div className={classes.adminBlock7}>
              <AdminFilter
                selected={filteredReceive}
                onChangeFilter={changeFilterHandler}
              />
            </div>
            <div className={classes.adminBlock8}>
              <button className={classes.button}>변경사항 저장</button>
            </div>
          </div>
        </div>
        <div className={classes.adminWithdraw}>탈퇴하기</div>
      </div>
    </div>
  );
};

export default Admin;
