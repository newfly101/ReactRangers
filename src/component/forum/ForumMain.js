import React from 'react';
import classes from './ForumMain.module.css';
import ForumBlog from "./ForumBlog";

const ForumMain = () => {
    let RN = Number(Math.floor(Math.random() * 3)+1);
    let img2 = `https://t1.daumcdn.net/tistory_admin/static/top/pc/bg_forum${RN}.jpg`;
    return (
        <div>
            <div className={classes.forumHeader}>
                <img src={img2} alt="fourmHeaderImg"/>
            </div>
            <ForumBlog />
        </div>
    );
};

export default ForumMain;


