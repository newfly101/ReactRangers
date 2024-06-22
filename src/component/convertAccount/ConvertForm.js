import React from "react";
import classes from "./ConvertForm.module.css";
import {Link} from "react-router-dom";
import {PathUrl} from "../../stores/CommonStore";
import {Observer, useLocalObservable} from "mobx-react";
import AuthStore, {AdminUser} from "../../stores/AuthStore";

const ConvertForm = () => {
    const authStore = useLocalObservable(AuthStore);

    const handleOnLoginSubmit = (event) => {
        event.preventDefault();
        if (AdminUser.email === authStore.login.email) {
            if (AdminUser.password === authStore.login.password) {
                console.log("로그인 되었습니다.");
            } else {
                console.error("비밀번호가 틀렸습니다.");
            }
        } else {
            console.error("등록된 계정이 없습니다.");
        }
        checkEmailValidation(authStore.login.email, authStore.login.password);
    }

    const checkEmailValidation = (email, password) => {
        if (email.trim() === '') {
            authStore.validLoginForm = false;
        }
        if (password.trim() === '') {
            authStore.validLoginForm = false;
        }
        console.log("login 가능 ? >> ",authStore.validLoginForm);
    }

    return (
        <Observer>
            {() => (
                <div className={classes.loginBox}>
                    <h2>티스토리에 로그인 하세요.</h2>
                    <form onSubmit={handleOnLoginSubmit}>
                        <div>
                            <input
                                className={classes.loginInput}
                                type="email"
                                placeholder="이메일"
                                value={authStore.login.email}
                                maxLength="30"
                                onChange={(event) => authStore.changeLoginEmail(event.target.value)}
                            />
                            <input
                                className={classes.loginInput}
                                type="password"
                                placeholder="비밀번호"
                                value={authStore.login.password}
                                maxLength="30"
                                onChange={(event) => authStore.changeLoginPassword(event.target.value)}
                            />
                            <button type="submit">
                                로그인
                            </button>
                        </div>
                    </form>
                    <div className={classes.linkBox}>
                    <span className={classes.loginLink}>
                        <Link to={PathUrl.RECOVERY_ACCOUNT}>회원가입</Link>
                    </span>
                        <span className={classes.loginLink}>
                            <Link to={PathUrl.RECOVERY_ACCOUNT}>계정 </Link>
                            /
                            <Link to={PathUrl.CONVERT_ACCOUNT}> 비밀번호 찾기</Link>
                        </span>
                    </div>
                </div>
            )}
        </Observer>
    );
};

export default ConvertForm;
