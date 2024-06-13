import React, { useState } from "react";
import classes from "./AccountRecovery.module.css";

import AccountRecoveryTopText from "./AccountRecoveryTopText";
import AccountRecoveryBottomInput from "./AccountRecoveryBottomInput";
import { useLocation } from "react-router-dom";

const AccountRecovery = () => {
  const location = useLocation();
  const [boldFlag, setBoldFlag] = useState(
    location.state?.checkedMethod || true
  );
  const methodClickHandlerTrue = () => {
    setBoldFlag(true);
  };
  const methodClickHandlerFalse = () => {
    setBoldFlag(false);
  };
  return (
    <div className={classes.AccountRecoveryContainer}>
      <AccountRecoveryTopText />
      <AccountRecoveryBottomInput
        boldFlag={boldFlag}
        methodClickHandlerTrue={methodClickHandlerTrue}
        methodClickHandlerFalse={methodClickHandlerFalse}
      />
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
