import React from "react";
import classes from "./AccountRecovery.module.css";
import check from "./check.svg";

const AccountRecovery = () => {
  return (
    <div className={classes.AccountRecoveryWrapper}>
      <div className={classes.topText}>
        <div className={classes.textBold}>Account Recovery</div>
        <div className={classes.textMessage}>
          티스토리 회원정보를 찾아드립니다.
        </div>
      </div>
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
            <span>계정(이메일)찾기</span>
            <img src={check} className={classes.check1} alt="체크표시" />
          </label>
          <label>
            <input type="radio" name="method" className={classes.radio} />
            <span>비밀번호 찾기</span>
            <img src={check} className={classes.check2} alt="체크표시" />
          </label>
        </form>
        <input
          type="text"
          className={classes.inputTextBox}
          placeholder="가입된 이메일 주소를 입력해주세요."
        ></input>
      </div>
      <div className={classes.commitBtn}>확인</div>

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
