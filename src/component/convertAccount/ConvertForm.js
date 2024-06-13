import React, { useState } from "react";
import classes from "./ConvertForm.module.css";
import { Link } from "react-router-dom";

const ConvertForm = () => {
  const [checkedMethod, setCheckedMethod] = useState(null);
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
          <button className={classes.loginBtn}>로그인</button>
        </div>
      </form>
      <span className={classes.mainATags}>
        <Link
          to="/AccountRecovery"
          onMouseOver={() => setCheckedMethod(true)}
          state={{ clickMethod: checkedMethod }}
        >
          계정 /{" "}
        </Link>
        <Link
          to="/AccountRecovery"
          onMouseOver={() => setCheckedMethod(false)}
          state={{ clickMethod: checkedMethod }}
        >
          비밀번호 찾기
        </Link>
      </span>
    </div>
  );
};

export default ConvertForm;
