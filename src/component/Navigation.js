import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={classes.navBar}>
                <div className={classes.navBarBox}>
                    <div className={classes.pageLinkBox}>
                        <a href="">Tistory</a>
                    </div>
                    <div className={classes.pageLinkBox}>
                        피드
                    </div>
                    <div className={classes.pageLinkBox}>
                        스토리
                    </div>
                    <div className={classes.pageLinkBox}>
                        스킨
                    </div>
                    <div className={classes.pageLinkBox}>
                        포럼
                    </div>
                </div>
                <div className={classes.navBarLogin}>
                    <button>시작하기</button>
                </div>
        </nav>

    );
};

export default Navigation;