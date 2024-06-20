import React from "react";
import classes from "./Navigation.module.css";
import {Link} from "react-router-dom";
import LoginModal from "./login/LoginModal";
import {Observer, useLocalObservable} from "mobx-react";
import AuthStore from "../stores/AuthStore";
import CommonStore, {PathUrl} from "../stores/CommonStore";

const Navigation = () => {
    const authStore = useLocalObservable(AuthStore);
    const commonStore = useLocalObservable(CommonStore);

    const openLoginModal = () => {
        authStore.changeLoginModalState(true);
        authStore.checkLogin();
    };
    const closeLoginModal = () => {
        authStore.changeLoginModalState(false);
    };

    /*   스킨 페이지, 포럼 페이지 인 경우 css 조정 해야 되니 DO NOT touch source - 김재홍   */
    return (
        <Observer>
            {() => (
                <>
                    {authStore.loginModal &&
                        <div className={classes.backdrop} onClick={closeLoginModal}></div>
                    }
                    <nav className={commonStore.scrolled ? classes.navBar : classes.navBarBlank}>
                        {commonStore.locationPath.current !== PathUrl.FORUM && commonStore.locationPath.current !== PathUrl.SKIN ? (
                            <div className={classes.navBarBox}>
                                <div className={classes.pageTitle} onClick={() => commonStore.onClickScrollTop()}>
                                    <Link to={PathUrl.MAIN}>
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
                                <div className={commonStore.scrolled ? classes.pageTitle : classes.pageTitleBlank} onClick={commonStore.onClickScrollTop}>
                                    <Link to={PathUrl.MAIN}>
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
                        {commonStore.locationPath.current !== PathUrl.ADMIN ?
                            <div className={`${classes.navBarLogin} ${!commonStore.scrolled && (commonStore.locationPath.current === PathUrl.FORUM || commonStore.locationPath.current === PathUrl.SKIN) ? classes.navBarLoginFlag : ""}`}>
                                <button onClick={openLoginModal}>시작하기</button>
                            </div>
                            :
                            <div className={`${classes.navBarLogin} ${!commonStore.scrolled && (commonStore.locationPath.current === PathUrl.FORUM || commonStore.locationPath.current === PathUrl.SKIN) ? classes.navBarLoginFlag : ""}`}>
                                <img className={classes.loginedImg} src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png" alt="logined"/>
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
