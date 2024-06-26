import React from "react";
import classes from "../../css/login/ConvertForm.module.css";
import {Link} from "react-router-dom";
import {PathUrl} from "../../stores/CommonStore";
import {Observer} from "mobx-react";
import {useAuthStore} from "../../stores/AuthStore";

const ConvertForm = () => {
    const authStore = useAuthStore();

    return (
        <Observer>
            {() => (
                <div className={classes.loginBox}>
                    <h2>티스토리에 로그인 하세요.</h2>
                    <form onSubmit={(event) => authStore.handleOnLoginSubmit(event)}>
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
