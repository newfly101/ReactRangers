import React from "react";
import classes from "./ConvertForm.module.css";
import {Link} from "react-router-dom";
import {PathUrl} from "../../stores/CommonStore";
import {Observer, useLocalObservable} from "mobx-react";
import AuthStore from "../../stores/AuthStore";

const ConvertForm = () => {
    const authStore = useLocalObservable(AuthStore);

    const handleOnLoginSubmit = (event) => {
        event.preventDefault();
        console.log(authStore.login.id);
        console.log(authStore.login.email);
        console.log(authStore.login.password);
    }

    return (
        <Observer>
            {() => (
            <div className={classes.loginBox}>
                <h2>티스토리에 로그인 하세요.</h2>
                <form onSubmit={handleOnLoginSubmit}>
                    <div><input
                        className={classes.emailInput}
                        type="email"
                        placeholder="이메일"
                        value={authStore.login.email}
                        onChange={(event) => authStore.changeLoginEmail(event.target.value)}
                    /></div>
                    <div>
                        <input
                            className={classes.passwordInput}
                            type="password"
                            placeholder="비밀번호"
                            value={authStore.login.password}
                            onChange={(event) => authStore.changeLoginPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit">
                        로그인
                    </button>
                </form>
                <div className={classes.linkBox}>
                    <span className={classes.loginLink}>
                        <Link to={PathUrl.RECOVERY_ACCOUNT}>회원가입</Link>
                    </span>
                    <span className={classes.loginLink}><Link to={PathUrl.RECOVERY_ACCOUNT}>계정 </Link>
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
