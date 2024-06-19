import React from "react";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";
import LoginModal from "./login/LoginModal";
import {Observer, useLocalObservable} from "mobx-react";
import AuthStore from "../stores/AuthStore";
import CommonStore from "../stores/CommonStore";

const Navigation = () => {
  const authStore = useLocalObservable(AuthStore);
  const commonStore = useLocalObservable(CommonStore);
  // const location = useLocation();



  const openLoginModal = () => {
    authStore.changeLoginModalState(true);
    authStore.checkLogin();
    commonStore.onClickScrollTop();
  };
  const closeLoginModal = () => {
    authStore.changeLoginModalState(false);
    commonStore.onClickScrollTop();
  };

  //
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 150) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   const changeUrl = (url) => {
  //     // console.log(location.pathname);
  //     setUrl(url);
  //   };

    // changeUrl(location.pathname);
    // window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [location.pathname]);

  return (
    <div>
      <Observer>
      {() => (authStore.loginModal &&
          <div className={classes.backdrop} onClick={closeLoginModal}></div>
      )}
      </Observer>
      <nav className={commonStore.scrolled ? classes.navBar : classes.navBarBlank}>
        {commonStore.topRef !== "/forum" && commonStore.topRef !== "/skin" ? (
          <div className={classes.navBarBox}>
            <div className={classes.pageTitle} onClick={commonStore.onClickScrollTop}>
              <Link to="/">
                <img src={"/tistoryLogo.webp"} alt="TistoryLogo" />
              </Link>
            </div>
            <div className={classes.pageLinkBox} onClick={commonStore.onClickScrollTop}>
              <Link to="/feed">피드</Link>
            </div>
            <div className={classes.pageLinkBox} onClick={commonStore.onClickScrollTop}>
              <Link to="/story">스토리</Link>
            </div>
            <div className={classes.pageLinkBox} onClick={commonStore.onClickScrollTop}>
              <Link to="/skin">스킨</Link>
            </div>
            <div className={classes.pageLinkBox} onClick={commonStore.onClickScrollTop}>
              <Link to="/forum">포럼</Link>
            </div>
          </div>
        ) : (
          <div className={classes.navBarBox}>
            <div
              className={commonStore.scrolled ? classes.pageTitle : classes.pageTitleBlank}
              onClick={commonStore.onClickScrollTop}
            >
              <Link to="/">
                <img src={"/tistoryLogo.webp"} alt="TistoryLogo" />
              </Link>
            </div>
            <div
              className={
                commonStore.scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank
              }
              onClick={commonStore.onClickScrollTop}
            >
              <Link to="/feed">피드</Link>
            </div>
            <div
              className={
                commonStore.scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank
              }
              onClick={commonStore.onClickScrollTop}
            >
              <Link to="/story">스토리</Link>
            </div>
            <div
              className={
                commonStore.scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank
              }
              onClick={commonStore.onClickScrollTop}
            >
              <Link to="/skin">스킨</Link>
            </div>
            <div
              className={
                commonStore.scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank
              }
              onClick={commonStore.onClickScrollTop}
            >
              <Link to="/forum">포럼</Link>
            </div>
          </div>
        )}

        {window.location.pathname !== '/admin' ?
          <div
            className={`${classes.navBarLogin} ${!commonStore.scrolled && (commonStore.topRef === "/forum" || commonStore.topRef === "/skin") ? classes.navBarLoginFlag : ""}`}
          >
            <button onClick={openLoginModal}>
              시작하기
            </button>
          </div>
            :
            <div
                className={`${classes.navBarLogin} ${!commonStore.scrolled && (commonStore.topRef === "/forum" || commonStore.topRef === "/skin") ? classes.navBarLoginFlag : ""}`}
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
