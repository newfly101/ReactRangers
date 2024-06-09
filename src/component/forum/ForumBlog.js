import React from 'react';
import classes from './ForumBlog.module.css';

const ForumBlog = () => {
    const img = `https://t1.daumcdn.net/tistory_admin/static/top/pc/photo_skin03.jpg`;
    return (
        <div className={classes.forumBlogBox}>
            <div className={classes.forumBlogTitle}>
                <div className={classes.forumBlogTap}>
                    <button>전체</button>
                    <button>블로그 소개</button>
                    <button>블로그 운영팁</button>
                    <button>스킨</button>
                    <button>질문/기타</button>
                </div>
                <div className={classes.forumWriteBtn}>
                    <button>글쓰기</button>
                </div>
            </div>
            <div className={classes.forumBlogList}>
                <div>
                    <img src="/public/logo512.png" alt="sample" />
                    <img src={img} alt="texty" />
                </div>
            </div>
        </div>

    );
};

export default ForumBlog;