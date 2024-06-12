import React from "react";
import classes from "./ConvertAccount.module.css";
import ConvertForm from "./ConvertForm";

const ConvertAccount = () => {
  return (
    <div className={classes.ConvertAccountWrapper}>
      <div className={classes.headerText}>
        <div className={classes.headerTitle}>
          티스토리 이용을 위해서는 카카오계정으로 전환이 필요합니다.
        </div>
        <div className={classes.headerDesc}>
          2020년 10월 27일 이전에 이메일 계정으로 가입하셨다면, 로그인 후
          카카오계정으로 전환해 주셔야 티스토리를 이용하실 수 있습니다.
          <a
            href="https://notice.tistory.com/2555"
            target="_blank"
            rel="noreferrer"
          >
            자세히 보기
          </a>
        </div>
      </div>
      <div className={classes.convertFormWrapper}>
        <ConvertForm />
      </div>
    </div>
  );
};

export default ConvertAccount;
