import React from 'react';
import classes from './ForumMain.module.css';
import ForumBlog from "./ForumBlog";
import {useLocalObservable} from "mobx-react";
import ForumStore2 from "../../stores/ForumStore2";

const ForumMain = () => {
    const forumStore = useLocalObservable(() => new ForumStore2());

    return (
        <div>
            <div className={classes.forumHeader}>
                <img className={classes.forumImg} src={forumStore.forumTopImg} alt="fourmHeaderImg"/>
                <div className={classes.forumSearch}>
                    <div className={classes.forumTitle}>Forum</div>
                    <div className={classes.forumDescription}>티스토리에 대한 이야기를 자유롭게 나눠보세요</div>
                    <div className={classes.forumSearchBox}>
                        <div className={classes.forumSearchBoxLabel}>
                            제목
                        </div>
                        <div className={classes.forumSearchBoxImg}>
                            <img src={'/Forum/arrow-down.svg'} alt="arrowDown"/>
                        </div>
                        <div className={classes.forumSearchBoxInput}>
                            <input placeholder="검색어를 입력하세요"/>
                        </div>
                        <div className={classes.forumSearchBoxImgSearch}>
                        <img src={'/Forum/search.svg'} alt="search"/>
                        </div>
                    </div>
                </div>
            </div>
            <ForumBlog/>
        </div>
    );
};

export default ForumMain;


