import React, { useState } from "react";
import classes from "./AccountRecoveryBottomInput.module.css";
import check from "./check.svg";

const AccountRecoveryBottomInput = () => {
  const [boldFlag, setBoldFlag] = useState(true);

  const methodClickHandler = () => {
    setBoldFlag((prevState) => !prevState);
  };
  return (
    <div>
      <div>
        <form className={classes.sreachMethodTab}>
          <label>
            <input
              type="radio"
              name="method"
              checked
              className={classes.radio}
              readOnly
            />
            <span
              onClick={methodClickHandler}
              className={`${classes.emailMethod} ${boldFlag && classes.methodBold}`}
            >
              계정(이메일)찾기
            </span>
            <img src={check} className={classes.check1} alt="체크표시" />
          </label>
          <label>
            <input type="radio" name="method" className={classes.radio} />
            <span
              onClick={methodClickHandler}
              className={`${classes.emailMethod} ${!boldFlag && classes.methodBold}`}
            >
              비밀번호 찾기
            </span>
            <img src={check} className={classes.check2} alt="체크표시" />
          </label>
        </form>
        <input
          type="text"
          className={classes.inputTextBox}
          placeholder={
            boldFlag
              ? "내 블로그 주소를 입력해주세요."
              : "가입된 이메일 주소를 입력해주세요."
          }
        ></input>
      </div>
      <div className={classes.commitBtn}>확인</div>
    </div>
  );
};

export default AccountRecoveryBottomInput;
