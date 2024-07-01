import React from "react";
import classes from "../../css/login/AccountRecovery.module.css";

import AccountRecoveryTopText from "./AccountRecoveryTopText";
import AccountRecoveryBottomInput from "./AccountRecoveryBottomInput";


const AccountRecovery = () => {
  return (
    <div className={classes.AccountRecoveryContainer}>
      <AccountRecoveryTopText />
      <AccountRecoveryBottomInput/>
      <div className={classes.loginNotion}>
        <a
          className={classes.loginDetali}
          target="_blank"
          rel="noreferrer noopener"
          href="https://cs.kakao.com/helps?articleId=1073197955&service=175&category=635&device=&locale=ko"
        >
          로그인 관련 상세 도움말
        </a>
      </div>
    </div>
  );
};

export default AccountRecovery;
