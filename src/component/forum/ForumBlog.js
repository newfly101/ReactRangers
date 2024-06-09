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
                {/*가로 3개 colum*/}
                <div className={classes.forumImgBox}>
                    <img src={img} alt="blogimg"/>
                </div>
                <div className={classes.forumBlogTitleBox}>
                    {/*가로 2개 space-between */}
                    <div className={classes.forumContext}>
                        {/* 세로 3개 블로그 / 제목 / 내용 */}
                        <div className={classes.forumContext}>
                            브랜던의 지식공장 ㆍ 2024.06.09 16:33 ㆍ 블로그 운영팁
                        </div>
                        <div className={classes.forumContextTitle}>
                            트래픽 폭락 사태의 원인 'AI알고리즘 업데이트'
                        </div>
                        <div className={classes.forumContext}>
                            최근 구글 알고리즘에 AI가 탑재되고 전세계 웹사이트 대부분 -80% 트래픽 소실을 겪고 있습니다.
                            여기서 한 가지 짚고 넘어가야할 것이 AI 검색이랑 AI 알고리즘 차이점 입니다.
                        </div>
                    </div>
                    <div className={classes.forumLookUp}>조회수 110 ㆍ 댓글 5</div>
                </div>
            </div>
        </div>

    );
};

export default ForumBlog;