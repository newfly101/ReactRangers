import React from "react";
import classes from "./Navigation.module.css";
import {Link} from "react-router-dom";
import LoginModal from "./login/LoginModal";
import {Observer, useLocalObservable} from "mobx-react";
import AuthStore from "../stores/AuthStore";
import CommonStore from "../stores/CommonStore";
import ScrollToTop from "./ScrollToTop";

const Navigation = () => {
    const authStore = useLocalObservable(AuthStore);
    const commonStore = useLocalObservable(CommonStore);

    const openLoginModal = () => {
        authStore.changeLoginModalState(true);
        authStore.checkLogin();
        // commonStore.onClickScrollTop();
    };
    const closeLoginModal = () => {
        authStore.changeLoginModalState(false);
        // commonStore.onClickScrollTop();
    };

    console.log(commonStore.scrolled);

    console.log(window.scrollY);
    return (
        <Observer>
            {() => (
                <div>
                    <ScrollToTop />
                    {authStore.loginModal &&
                        <div className={classes.backdrop} onClick={closeLoginModal}></div>
                    }
                    <nav className={commonStore.scrolled ? classes.navBar : classes.navBarBlank}>
                        {commonStore.topRef !== "/forum" && commonStore.topRef !== "/skin" ? (
                            <div className={classes.navBarBox}>
                                <div className={classes.pageTitle} onClick={() => commonStore.onClickScrollTop()}>
                                    <Link to={commonStore.MAIN}>
                                        <img src={"/tistoryLogo.webp"} alt="TistoryLogo"/>
                                    </Link>
                                </div>
                                {commonStore.navigationTaps.map((item) => (
                                    <div key={item.key} className={classes.pageLinkBox} onClick={commonStore.onClickScrollTop}>
                                        <Link to={item.key}>{item.label}</Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={classes.navBarBox}>
                                {/*<div className={commonStore.scrolled ? classes.pageTitle : classes.pageTitleBlank} onClick={commonStore.onClickScrollTop}>*/}
                                <div className={classes.pageTitleBlank} onClick={commonStore.onClickScrollTop}>
                                    <Link to={commonStore.MAIN}>
                                        <img src={"/tistoryLogo.webp"} alt="TistoryLogo"/>
                                    </Link>
                                </div>
                                {commonStore.navigationTaps.map((item) => (
                                    <div key={item.key}
                                         className={commonStore.scrolled ? classes.pageLinkBox : classes.pageLinkBoxBlank}
                                         onClick={commonStore.onClickScrollTop}>
                                        <Link to={item.key}>{item.label}</Link>
                                    </div>
                                ))}
                            </div>
                        )}
                        {window.location.pathname !== '/admin' ?
                            <div className={`${classes.navBarLogin} ${!commonStore.scrolled && (commonStore.topRef === "/forum" || commonStore.topRef === "/skin") ? classes.navBarLoginFlag : ""}`}>
                                <button onClick={openLoginModal}>시작하기</button>
                            </div>
                            :
                            <div className={`${classes.navBarLogin} ${!commonStore.scrolled && (commonStore.topRef === "/forum" || commonStore.topRef === "/skin") ? classes.navBarLoginFlag : ""}`}>
                                <img className={classes.loginedImg} src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png" alt="logined"/>
                            </div>
                        }
                        {authStore.loginModal &&
                            <LoginModal isOpen={authStore.loginModal} close={closeLoginModal}/>
                        }
                    </nav>
                </div>
            )}
        </Observer>
    )
};

export default Navigation;
