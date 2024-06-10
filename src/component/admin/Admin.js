import React from "react";
import classes from "./Admin.module.css";

const Admin = () => {
  return (
    <div className={classes.Admin}>
      <div className={classes.AdminLeft}>
        <div className={classes.AdminProfile}>
          <div className={classes.AdminProfileImage}>
            <a href="">
              <img src=""></img>
            </a>
          </div>
          <div className={classes.Adminfont}>
            <div className={classes.AdminUserName}>새벽감성개발자</div>
            <div className={classes.AdminUserEmail}>game@naver.com</div>
          </div>
        </div>
        <div className={classes.AdminMyblog}>내 블로그</div>
      </div>

      <div className={classes.AdminBlog}>오른쪽</div>
    </div>
  );
};
export default Admin;
