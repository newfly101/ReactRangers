import React from 'react';
import classes from './ForumBlog.module.css';

const ForumBlog = () => {
    return (
        <div className={classes.forumBlogBox}>
            <div className={classes.forumBlogTitle}>
                <div>
                    <button>전체</button>
                    <button>블로그 소개</button>
                    <button>블로그 운영팁</button>
                    <button>스킨</button>
                    <button>질문/기타</button>
                </div>
                <div>
                    <button>글쓰기</button>
                </div>
            </div>
            <div className={classes.forumBlogList}>
                <div>
                    <img src="/public/logo512.png" alt="sample" />
                </div>
            </div>
        </div>

    );
};

export default ForumBlog;