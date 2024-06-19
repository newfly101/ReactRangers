import React, {useEffect} from "react";
import classes from "./Navigation.module.css";
import { Link, useLocation } from "react-router-dom";
import LoginModal from "./login/LoginModal";
import {Observer, useLocalObservable} from "mobx-react";
import AuthStore from "../stores/AuthStore";

const Navigation = () => {
  const authStore = useLocalObservable(AuthStore);
  const [scrolled, setScrolled] = React.useState(false);
  const [url, setUrl] = React.useState("/");
  const location = useLocation();

  const openLoginModal = () => {
    authStore.changeLoginModalState(true);
    authStore.checkLogin();
    onClickScrollUp();
  };
  const closeLoginModal = () => {
    authStore.changeLoginModalState(false);
    onClickScrollUp();
  };
  const onClickScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    const changeUrl = (url) => {
      // console.log(location.pathname);
      setUrl(url);
    };

    changeUrl(location.pathname);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div>
      <Observer>
      {() => (authStore.loginModal &&
          <div className={classes.backdrop} onClick={closeLoginModal}></div>
      )}
      </Observer>
      <nav className={scrolled ? classes.navBar : classes.navBarBlank}>
        {url !== "/forum" && url !== "/skin" ? (
          <div className={classes.navBarBox}>
            <div className={classes.pageTitle} onClick={onClickScrollUp}>
              <Link to="/">
                <img src={"/tistoryLogo.webp"} alt="TistoryLogo" />
              </Link>
            </div>
            <div className={classes.pageLinkBox} onClick={onClickScrollUp}>
              <Link to="/feed">피드</Link>
            </div>
            <div className={classes.pageLinkBox} onClick={onClickScrollUp}>
              <Link to="/story">스토리</Link>
            </div>
            <div className={classes.pageLinkBox} onClick={onClickScrollUp}>
              <Link to="/skin">스킨</Link>
            </div>
            <div className={classes.pageLinkBox} onClick={onClickScrollUp}>
              <Link to="/forum">포럼</Link>
            </div>
          </div>
        ) : (
          <div className={classes.navBarBox}>
            <div
              className={scrolled ? classes.pageTitle : classes.pageTitleBlank}
              onClick={onClickScrollUp}
            >
              <Link to="/">
                <img src={"/tistoryLogo.webp"} alt="TistoryLogo" />
              </Link>
            </div>
            <div
              className={
                scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank
              }
              onClick={onClickScrollUp}
            >
              <Link to="/feed">피드</Link>
            </div>
            <div
              className={
                scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank
              }
              onClick={onClickScrollUp}
            >
              <Link to="/story">스토리</Link>
            </div>
            <div
              className={
                scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank
              }
              onClick={onClickScrollUp}
            >
              <Link to="/skin">스킨</Link>
            </div>
            <div
              className={
                scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank
              }
              onClick={onClickScrollUp}
            >
              <Link to="/forum">포럼</Link>
            </div>
          </div>
        )}

        {window.location.pathname !== '/admin' ?
          <div
            className={`${classes.navBarLogin} ${!scrolled && (url === "/forum" || url === "/skin") ? classes.navBarLoginFlag : ""}`}
          >
            <button onClick={openLoginModal}>
              시작하기
            </button>
          </div>
            :
            <div
                className={`${classes.navBarLogin} ${!scrolled && (url === "/forum" || url === "/skin") ? classes.navBarLoginFlag : ""}`}
            >
              <img className={classes.loginedImg} src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png" alt="logined" />
            </div>
        }
        <Observer>
          {() => (authStore.loginModal &&
              <LoginModal isOpen={authStore.loginModal} close={closeLoginModal} />
          )}
        </Observer>
      </nav>

    </div>
  )
};

export default Navigation;
