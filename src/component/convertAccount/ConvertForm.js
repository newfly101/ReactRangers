import React from "react";
import classes from "./ConvertForm.module.css";
import { Link } from "react-router-dom";

const ConvertForm = () => {
  return (
    <div className={classes.convertFormWrapper}>
      <h2 className={classes.formTitle}>티스토리에 로그인 하세요.</h2>
      <form>
        <div>
          <input
            className={classes.emailInput}
            type="email"
            placeholder="이메일"
          />
        </div>
        <div>
          <input
            className={classes.passwordInput}
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <div className={classes.convertBtn}>
          <button className={classes.loginBtn} type="submit">
            로그인
          </button>
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
