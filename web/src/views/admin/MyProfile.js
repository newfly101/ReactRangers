import React from "react";
import classes from "../../css/admin/MyProfile.module.css";
import { Link } from "react-router-dom";

const MyProfile = () => {
  return (
    <>
      <div className={classes.profile}>
        <div>
          <a href="/src/views/admin/Admin">
            <img
              src="https://img1.daumcdn.net/thumb/C100x100/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fmanage%2Fimages%2Fr3%2Fdefault_S.png"
              alt="프로필이미지"
              className={classes.profileImg}
            />
          </a>
          <div className={classes.user}>새벽감성개발자</div>
          <div className={classes.email}>game@naver.com</div>
        </div>
      </div>
      <div className={classes.profileList}>
        <div className={classes.myBlogBox}>
          <img
            src={"/admin/home.svg"}
            alt="home"
            className={classes.myBlogIcon}
          />
          <Link to={"/admin"} className={classes.link}>
            <div className={classes.myBlogTitle}>내 블로그</div>
          </Link>
        </div>
        <div className={classes.userNameBox}>
          <img
            src={"/admin/user.svg"}
            alt="user"
            className={classes.userNameIcon}
          />
          <div className={classes.userNameTitle}>내 계정</div>
          <Link to={"/profileLayer"} className={classes.link}>
            <div className={classes.userNameList}>프로필 레이어</div>
          </Link>
          <Link to={"/supportList"} className={classes.link}>
            <div className={classes.userNameList}>응원내역보기</div>
          </Link>
          <div className={classes.userNameList}>카카오계정 관리</div>
        </div>
        <div>
          <img
            src={"/admin/down.svg"}
            alt="down"
            className={classes.externalIcon}
          />
          <Link to={"/external"} className={classes.link}>
            <div className={classes.externalTitle}>외부 기능</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
