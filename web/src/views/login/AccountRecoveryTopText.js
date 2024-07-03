import React from "react";
import classes from "../../css/login/AccountRecoveryTopText.module.css";

const AccountRecoveryTopText = () => {
  return (
    <div className={classes.topTextWrapper}>
      <div className={classes.topTextTitle}>Account Recovery</div>
      <div className={classes.topTextMessage}>
        티스토리 회원정보를 찾아드립니다.
      </div>
    </div>
  );
};

export default AccountRecoveryTopText;
