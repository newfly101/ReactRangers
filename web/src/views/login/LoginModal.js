import React, { Component } from "react";
import classes from "../../css/login/LoginModal.module.css";
import { Link } from "react-router-dom";

class LoginModal extends Component {
  state = {
    email: "",
    password: "",
  };
  loginHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { isOpen, close } = this.props;
    return (
      <>
        {isOpen ? (
          <div className={classes.loginModal}>
            <div className={classes.tistoryLogin}>
              <div className={classes.tistoryLoginTitle} onClick={close}>
                <Link to="/">Tistory</Link>
              </div>
              <div className={classes.loginDescription}>
                당신의 이야기가 값진 수익이 됩니다.
              </div>
              <img
                  src="https://t1.daumcdn.net/tistory_admin/static/top/pc/img_login.png"
                  alt="loginImg"
              />
              <Link to="/admin" onClick={close}>
                <button className={classes.kakaoLoginBtn}>
                  <img src={"/kakao_login_medium_narrow.png"} alt="kakaologin" />
                </button>
              </Link>
              <Link to="/login" onClick={close}>
                <button className={classes.loginBtn}>
                  아이디로 로그인하기
                </button>
              </Link>
              <Link
                to="/AccountRecovery"
                className={classes.tistoryLoginHelp}
                onClick={close}
              >
                내 티스토리 계정을 모르겠어요
              </Link>
              <Link
                to="/convertAccount"
                className={classes.tistoryLoginHelp}
                onClick={close}
              >
                티스토리 이메일 계정으로 가입했었나요?
              </Link>
            </div>
            <button className={classes.closeIco} onClick={close}>
              <img src={"/common/close.svg"} alt="closeIco" />
            </button>
          </div>
        ) : null}
      </>
    );
  }
}

export default LoginModal;
