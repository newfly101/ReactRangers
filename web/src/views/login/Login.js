import React from 'react';
import LoginForm from "./LoginForm";
import classes from "../../css/login/Login.module.css"
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className={classes.loginFormContainer}>
      <LoginForm/>
      </div>
      <Link to='/signin'>
      <div>계정이 없다면, 즉시 회원가입 하기</div>
      </Link>
    </div>
  );
};

export default Login;