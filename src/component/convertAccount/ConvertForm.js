import React, {useState} from "react";
import classes from "./ConvertForm.module.css";
import {Link} from "react-router-dom";
import {PathUrl} from "../../stores/CommonStore";

const ConvertForm = () => {
    const [checkedMethod, setCheckedMethod] = useState(null);
    return (
        <>
            <div className={classes.loginBox}>
                <div>티스토리에 로그인 하세요.</div>
                <form>
                    <div><input
                        className={classes.emailInput}
                        type="email"
                        placeholder="이메일"
                    /></div>
                    <div>
                        <input
                            className={classes.passwordInput}
                            type="password"
                            placeholder="비밀번호"
                        />
                    </div>
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

            {/*  <span className={classes.mainATags}>*/}
            {/*  <Link*/}
            {/*      className={classes.mainLink}*/}
            {/*      to="/signUp"*/}
      {/*  >*/}
      {/*    회원가입 / {" "}*/}
      {/*  </Link>*/}
      {/*    <div className={classes.linkTag}>*/}
      {/*      <Link*/}
      {/*          className={classes.mainLink}*/}
      {/*          to="/AccountRecovery"*/}
      {/*          onMouseOver={() => setCheckedMethod(true)}*/}
      {/*          state={{checkedMethod}}*/}
      {/*      >*/}
      {/*    계정 /{" "}*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*      className={classes.mainLink}*/}
      {/*      to="/AccountRecovery"*/}
      {/*      onMouseOver={() => setCheckedMethod(false)}*/}
      {/*      state={{checkedMethod}}*/}
      {/*  >*/}
      {/*    비밀번호 찾기*/}
      {/*  </Link>*/}
      {/*    </div>*/}

      {/*</span>*/}
      {/*      </div>*/}
</>
    );
};

export default ConvertForm;
