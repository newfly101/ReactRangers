import React from 'react';
import classes from './ForumMain.module.css';

const ForumMain = () => {
    let RN = Number(Math.floor(Math.random() * 3)+1);
    let img2 = `https://t1.daumcdn.net/tistory_admin/static/top/pc/bg_forum${RN}.jpg`;
    return (
        <div>
            <div className={classes.forumHeader}>
                <img src={img2} alt="fourmHeaderImg"/>
            </div>
            <div>
                <input type="text"/>
            </div>
        </div>
    );
};

export default ForumMain;


