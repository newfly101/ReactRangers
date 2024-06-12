import React, { useState } from "react";
import classes from "./Admin.module.css";
import home from "./assets/home.svg";
import user from "./assets/user.svg";
import down from "./assets/down.svg";
import AdminFilter from "./AdminFilter";

const Admin = () => {
  const [filteredReceive, setFilteredReceive] = useState();

  const changeFilterHandler = (selectedValue) => {
    setFilteredReceive(
      selectedValue === "수신합니다." ? "수신합니다." : "수신하지 않습니다."
    );
  };

  return (
    <div id={classes.Admin}>
      <div id={classes.AdminLeft}>
        <div>
          <div className={classes.AdminProfile}>
            <div className={classes.AdminProfileImage}>
              <a href="/admin">
                <img
                  src="https://img1.daumcdn.net/thumb/C100x100/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fmanage%2Fimages%2Fr3%2Fdefault_S.png"
                  alt="프로필이미지"
                ></img>
              </a>
              <div className={classes.AdminNameUser}>새벽감성개발자</div>
              <div className={classes.AdminNameEmail}>game@naver.com</div>
            </div>
          </div>
        </div>
        <div id={classes.AdminList}>
          <div>
            <div className={classes.AdminMyblog}>
              <div className={classes.AdminListHomeIcon}>
                <img src={home} alt="home"></img>
              </div>
              <div className={classes.AdminListMyblog}>내 블로그</div>
            </div>
            <div className={classes.AdminListLine}>
              <div className={classes.AdminListUserIcon}>
                <img src={user} alt="user"></img>
              </div>
              <div className={classes.AdminListUser}>내 계정</div>
              <div className={classes.AdminListMenu}>
                <div className={classes.AdminListMenuFont}>프로필 레이어</div>
                <div className={classes.AdminListMenuFont}>응원내역보기</div>
                <div className={classes.AdminListMenuFont}>카카오계정 관리</div>
              </div>
            </div>
            <div className={classes.AdminLisLinkMenuIcon}>
              <img src={down} alt="down"></img>
            </div>
            <div className={classes.AdminListLinkMenu}>외부 기능</div>
          </div>
        </div>
      </div>
      <div id={classes.AdminRight}>
        <div className={classes.AdminBlog}>
          <div className={classes.AdminFont}> 운영 중인 블로그</div>
          <form className={classes.AdminBlock}>
            <div className={classes.AdminBlockImage}>
              <a href="">
                <img
                  src="https://img1.daumcdn.net/thumb/S180x180/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fmanage%2Fimages%2Fr3%2Fdefault_S.png"
                  alt="프로필 이미지"
                ></img>
              </a>
            </div>
            <div className={classes.AdminBlockMenu}>
              <div className={classes.AdminBlockName}>새벽의 이것저것</div>
              <div className={classes.AdminBlockEmail}>game.tistory.com</div>
            </div>
            <div>
              <button className={classes.AdminBlockButton}>대표</button>
            </div>
          </form>
          <div className={classes.AdminBlockGuide}>
            대표 블로그는 방문한 블로그/팀블로그 활동 시 사용됩니다.
          </div>
        </div>
        <div>
          <div className={classes.AdminFont}>운영∙개설 현황</div>
          <div>
            <div className={classes.AdminSituation1}>
              <div className={classes.AdminBlock2}>
                4개의 블로그를 더 운영할 수 있습니다.
              </div>
              <div className={classes.AdminBlock3}>운영 중인 블로그 1개</div>
            </div>
            <div className={classes.AdminSituation2}>
              <div className={classes.AdminBlock4}>
                블로그 개설 가능 횟수가 8회 남았습니다.
              </div>
              <div className={classes.AdminBlock5}>과거 개설 횟수 2회</div>
            </div>
            <div className={classes.AdminBlockBtn}>
              <button className={classes.AdminBlockBtnWindow}>
                새 블로그 만들기
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.AdminFont}>이메일 알림</div>
          <div>
            <div className={classes.AdminBlock7}>
              <AdminFilter
                selected={filteredReceive}
                onChangeFilter={changeFilterHandler}
              />
            </div>
            <div className={classes.AdminBlock8}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
