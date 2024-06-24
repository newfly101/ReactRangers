import React, {useEffect} from "react";
import classes from "./Navigation.module.css";
import {Link} from "react-router-dom";
import LoginModal from "./login/LoginModal";
import {Observer, useLocalObservable} from "mobx-react";
import {State, useAuthStore} from "../stores/AuthStore";
import CommonStore, {PathUrl} from "../stores/CommonStore";

const Navigation = () => {
    const authStore = useAuthStore();
    const commonStore = useLocalObservable(CommonStore);
    const [useScroll, setUseScroll] = React.useState(0);

    const openLoginModal = () => {
        authStore.changeLoginModalState(true);
        authStore.checkLogin();
    };
    const closeLoginModal = () => {
        authStore.changeLoginModalState(false);
    };
    const getScrolled = () => {
        setUseScroll(window.scrollY);
    }
    const logoutPage = () => {
        authStore.handleLogout();
    }

    useEffect(() => {
        window.addEventListener("scroll", getScrolled);
        return () => {
            window.removeEventListener("scroll", getScrolled);
        };
    }, [useScroll]);

    return (
        <Observer>
            {() => (
                <>
            {authStore.loginModal &&
              <div className={classes.backdrop} onClick={closeLoginModal}></div>
            }
              <nav className={useScroll > 250 ? classes.navBar : classes.navBarBlank}>
                  {commonStore.locationPath.current !== PathUrl.FORUM && commonStore.locationPath.current !== PathUrl.SKIN ? (
                      <div className={classes.navBarBox}>
                          <div className={classes.pageTitle} onClick={() => commonStore.onClickScrollTop()}>
                              <Link to={PathUrl.MAIN}>
                                  <img src={"/tistoryLogo.webp"} alt="TistoryLogo" className={classes.navLogo}/>
                              </Link>
                          </div>
                          {commonStore.navigationTaps.map((item) => (
                              <div key={item.key} className={classes.pageLinkBox}
                                   onClick={commonStore.onClickScrollTop}>
                                  {authStore.loginState === State.NotAuthenticated ? (item.key === PathUrl.FEED ?
                                          <span onClick={openLoginModal}>{item.label}</span>
                                          :
                                          <Link to={item.key}>{item.label}</Link>)
                                      :
                                      <Link to={item.key}>{item.label}</Link>
                                  }
                              </div>
                          ))}
                      </div>
                  ) : (
                      <div className={classes.navBarBox}>
                          <div className={useScroll > 250 ? classes.pageTitle : classes.pageTitleBlank}
                               onClick={commonStore.onClickScrollTop}>
                              <Link to={PathUrl.MAIN}>
                                  <img src={"/tistoryLogo.webp"} alt="TistoryLogo"/>
                              </Link>
                          </div>
                          {commonStore.navigationTaps.map((item) => (
                              <div key={item.key}
                                   className={useScroll > 250 ? classes.pageLinkBox : classes.pageLinkBoxBlank}
                                   onClick={commonStore.onClickScrollTop}>
                                  {authStore.loginState === State.NotAuthenticated ? (item.key === PathUrl.FEED ?
                                          <span onClick={openLoginModal}>{item.label}</span>
                                          :
                                          <Link to={item.key}>{item.label}</Link>)
                                      :
                                      <Link to={item.key}>{item.label}</Link>
                                  }
                              </div>
                          ))}
                      </div>
                  )}
                  {authStore.loginState === State.NotAuthenticated ?
                      <div
                          className={classes.navBarLogin}>
                          <button onClick={openLoginModal}>시작하기</button>
                      </div>
                      :
                      <div
                          className={classes.navBarLogin}>
                          <button onClick={logoutPage}>로그아웃</button>
                      </div>
                  }
                  {authStore.loginModal &&
                      <LoginModal isOpen={authStore.loginModal} close={closeLoginModal}/>
                  }
              </nav>
                </>
            )}
        </Observer>
    )
};

export default Navigation;
