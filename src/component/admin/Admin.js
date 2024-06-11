import React from "react";
import classes from "./Admin.module.css";

const Admin = () => {
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
              <div className={classes.AdminListHomeIcon}></div>
              <div className={classes.AdminListMyblog}>내 블로그</div>
            </div>
            <div className={classes.AdminListLine}>
              <div className={classes.AdminListUserIcon}></div>
              <div className={classes.AdminListUser}>내 계정</div>
              <div className={classes.AdminListMenu}>
                <div className={classes.AdminListMenuFont}>프로필 레이어</div>
                <div className={classes.AdminListMenuFont}>응원내역보기</div>
                <div className={classes.AdminListMenuFont}>카카오계정 관리</div>
              </div>
            </div>
            <div className={classes.AdminLisLinkMenuIcon}></div>
            <div className={classes.AdminListLinkMenu}>외부 기능</div>
          </div>
        </div>
      </div>
      <div id={classes.AdminRight}>
        <div className={classes.AdminBlog}>
          <h3 className={classes.AdminFont}>
            운영 중인 블로그
            <form className={classes.AdminBlock}>
              <div className={classes.AdminBlockImage}>
                <a href="">
                  <img
                    src="https://img1.daumcdn.net/thumb/S180x180/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fmanage%2Fimages%2Fr3%2Fdefault_S.png"
                    alt="프로필 이미지"
                  ></img>
                </a>
              </div>
              <div className={classes.AdminBlockName}>
                새벽의 이것저것
                <div className={classes.AdminBlockEmail}>game.tistory.com</div>
              </div>
              <div className={classes.AdminBlockButton}>
                <button>대표</button>
              </div>
            </form>
            <div className={classes.Admin}>
              대표 블로그는 방문한 블로그/팀블로그 활동시 사용됩니다.
            </div>
          </h3>
          <h3 className={classes.AdminFont}>
            운영∙개설 현황
            <div className={classes.AdminBlock}></div>
          </h3>
          <h3 className={classes.AdminFont}>
            이메일 알림
            <div className={classes.AdminBlock}></div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Admin;
