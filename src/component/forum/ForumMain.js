import React from 'react';
import classes from './ForumMain.module.css';
import ForumBlog from "./ForumBlog";

const ForumMain = () => {
    let RN = Number(Math.floor(Math.random() * 3)+1);
    let img2 = `https://t1.daumcdn.net/tistory_admin/static/top/pc/bg_forum${RN}.jpg`;
    return (
        <div>
            <img className={classes.forumImg} src={img2} alt="fourmHeaderImg"/>
            <div className={classes.forumHeader}>

                <div className={classes.forumSearch}>
                    <div className={classes.forumTitle}>Forum</div>
                    <div className={classes.forumDescription}>티스토리에 대한 이야기를 자유롭게 나눠보세요</div>
                </div>
            </div>
            <ForumBlog/>
        </div>
    );
};

export default ForumMain;


