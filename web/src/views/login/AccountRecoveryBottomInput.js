import React from "react";
import classes from "../../css/login/AccountRecoveryBottomInput.module.css";
import {Observer, useLocalObservable} from "mobx-react";
import AccountRecoveryStore from "../../stores/AccountRecoveryStore"

const AccountRecoveryBottomInput = () => {
  const ACStore = useLocalObservable(()=>new AccountRecoveryStore());
  return (
    <div>
      <Observer>
        {()=> (
          <div>
            <form className={classes.sreachMethodTab}>
              <span>
                <input
                  type="radio"
                  name="method"
                  className={classes.radio}
                  checked={ACStore.checkFlag}
                  readOnly
                />
                <label
                  onClick={ACStore.clickFlagTrue}
                  className={`${classes.emailMethod} ${ACStore.checkFlag && classes.methodBold}`}
                >
              계정(이메일)찾기
            </label>
                <img src={`check.svg`} className={classes.check1} alt="체크표시"/>
              </span>

              <span>
                <input
                  type="radio"
                  name="method"
                  className={classes.radio}
                  checked={!ACStore.checkFlag}
                  readOnly
                />
                <label
                  onClick={ACStore.clickFlagFalse}
                  className={`${classes.emailMethod} ${!ACStore.checkFlag && classes.methodBold}`}
                >
              비밀번호 찾기
            </label>
                <img src={`check.svg`} className={classes.check2} alt="체크표시"/>
              </span>
            </form>
            <input
              type="text"
              className={classes.inputTextBox}
              placeholder={
                ACStore.checkFlag
                  ? "내 블로그 주소를 입력해주세요."
                  : "가입된 이메일 주소를 입력해주세요."
              }
            ></input>
          </div>
        )}
      </Observer>
      <div className={classes.commitBtn} onClick={()=>console.log(ACStore.checkFlag)}>확인</div>
    </div>
  );
};

export default AccountRecoveryBottomInput;
