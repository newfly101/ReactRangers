import React, {Component} from 'react';
import classes  from './LoginModal.module.css';
import {Link} from "react-router-dom";

class LoginModal extends Component {
    state= {
        email: "",
        password: "",
    };
    loginHandler = (event) => {
        const {name, value} = event.target;
        this.setState({ [name] : value});
    }

    render() {
        const {isOpen, close} = this.props;
        return (
            <>
                {isOpen ? (
                    <div className={classes.loginModal}>
                        <div className={classes.tistoryLogin}>
                            <div className={classes.tistoryLoginTitle} onClick={close}>
                                <Link to="/">
                                    Tistory
                                </Link>
                            </div>
                            <div className={classes.loginDescription}>당신의 이야기가 값진 수익이 됩니다.</div>
                            <img src="https://t1.daumcdn.net/tistory_admin/static/top/pc/img_login.png" alt="loginImg"/>
                            <button className={classes.kakaoLoginBtn}>
                                카카오 계정으로 로그인
                            </button>
                            <div className={classes.tistoryLoginHelp}>
                            내 티스토리 계정을 모르겠어요
                            </div>
                            <div className={classes.tistoryLoginHelp}>
                                티스토리 이메일 계정으로 가입했었나요?
                            </div>
                        </div>
                        <button className={classes.closeIco} onClick={close}>
                            <img src={'/close.svg'} alt="closeIco" />
                        </button>
                    </div>
                    )
                    :
                    null
                }
            </>
        );
    }
}

export default LoginModal;
