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
        <label>운영중인 블로그</label>
      </div>
    </div>
  );
};

export default Admin;
