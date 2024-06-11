import React from "react";
import classes from "./Admin.module.css";

const Admin = () => {
  return (
    <div id={classes.Admin}>
      <div id={classes.AdminLeft}>
        <div id={classes.AdminProfile}>
          <div className={classes.AdminProfileImage}>
            <a href="">
              <img src="" width="100" height="100" alt></img>
            </a>
          </div>
          <div className={classes.AdminName}>
            <div className={classes.AdminNameUser}>새벽감성개발자</div>
            <div className={classes.AdminNameEmail}>game@naver.com</div>
          </div>
        </div>
        <div id={classes.AdminList}>
          <div>
            <div>
              <div className={classes.AdminListHomeIcon}></div>
              <div className={classes.AdminListMyblog}>내 블로그</div>
            </div>
            <div>
              <div className={classes.AdminListUserIcon}></div>
              <div className={classes.AdminListMyUser}>내 계정</div>
              <ul>
                <li>프로필 레이어</li>
                <li>응원내역보기</li>
                <li>카카오계정 관리</li>
              </ul>
            </div>
            <div className={classes.AdminListIcon}></div>
            <div className={classes.AdminListLinkMenu}>외부 기능</div>
          </div>
        </div>
      </div>
      <div id={classes.AdminRight}>
        <div className={classes.AdminMyblog}>
          <h3 className={classes.AdminFont}>
            운영 중인 블로그
            <form className={classes.AdminBlock}>
              <div className={classes.AdminBlockImage}>
                <a href="">
                  <img src=""></img>
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
