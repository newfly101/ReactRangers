import React from "react";
import classes from "./ConvertForm.module.css";
import { Link } from "react-router-dom";

const ConvertForm = () => {
  return (
    <div className={classes.convertFormWrapper}>
      <h2 className={classes.formTitle}>티스토리에 로그인 하세요.</h2>
      <form>
        <div>
          <input type="email" placeholder="이메일" />
        </div>
        <div>
          <input type="password" placeholder="비밀번호" />
        </div>
        <div className={classes.convertBtn}>
          <button type="submit">로그인</button>
        </div>
      </form>
      <span className={classes.mainATags}>
        <Link to="/AccountRecovery">계정 /</Link>
        <Link to="/AccountRecovery">비밀번호 찾기</Link>
      </span>
    </div>
  );
};

export default ConvertForm;
