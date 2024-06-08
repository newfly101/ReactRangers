import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => {
    const navUrl = window.location.href.split('/');
    console.log(navUrl[3]);
    return (
        <nav className={classes.navBar}>
                <div className={classes.navBarBox}>
                    <div className={classes.pageTitle}>
                        <a href="/">Tistory</a>
                    </div>
                    <div className={classes.pageLinkBox}>
                        <a href="/">피드</a>
                    </div>
                    <div className={classes.pageLinkBox}>
                        <a href="/">스토리</a>
                    </div>
                    <div className={classes.pageLinkBox}>
                        <a href="/">스킨</a>
                    </div>
                    <div className={classes.pageLinkBox}>
                        <a href="/forum">포럼</a>
                    </div>
                </div>
                <div className={`${navUrl[3] !== 'forum' ?
                    classes.navBarLogin : classes.navBarLogin2}`}>
                    <button>시작하기</button>
                </div>
        </nav>
    );
};

export default Navigation;