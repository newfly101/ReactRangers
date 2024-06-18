import React from 'react';
import classes from './ForumBlog.module.css';
import ForumBlogTap from "./forumTap/ForumBlogTap";
import {Observer, useLocalObservable} from "mobx-react";
import ForumStore from "../../stores/ForumStore";

const ForumBlog = () => {
    const forumStore = useLocalObservable(ForumStore);

    const inputRef = React.useRef(null);

    const onClickTapChange = (data) => {
        console.log(data);
        forumStore.changeForumDummy(data);
    }
    // view에서 보여질 때 공용으로 쓰이는 부분
    // ----------------- 공용 ----------------------
    const shortedString = (str, num) => {
        if (str.length < num) {
            return str;
        }
        return str.slice(0, num) + '...';
    }


    // ------------------------ nav -> 글쓰기 => 최 하단으로 보내주는 function
    const scrollToInput = () => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView({behavior: 'smooth'});
            inputRef.current.focus();
        }
    }

    return (
        <>
            <div className={classes.forumBlogBox}>
                <div className={classes.forumBlogTitle}>
                    <Observer>
                        {() => (
                            <div className={classes.forumBlogTap}>
                                {forumStore.forumTap.map((tab, index) => {
                                    console.log("map1",tab.key);
                                    console.log("map2",forumStore.forumUrl);
                                return (
                                    <button
                                        key={tab.key}
                                        className={forumStore.forumUrl === tab.key ? classes.forumTapActive : classes.forumTapInActive}
                                        onClick={() => onClickTapChange(tab.key)}>
                                        {tab.label}
                                    </button>
                                )})}
                            </div>
                        )}
                    </Observer>
                    <div className={classes.forumWriteBtn}>
                        <button onClick={scrollToInput}>글쓰기</button>
                    </div>
                </div>
                <Observer>
                    {() => (
                        <ForumBlogTap
                            response={forumStore.forumDummy}
                            shortedString={shortedString}
                            scrollToInput={scrollToInput}
                        />
                    )}
                </Observer>
            </div>
        </>
    );
};

export default ForumBlog;
