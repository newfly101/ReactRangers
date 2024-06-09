import React from 'react';
import classes from './ForumBlog.module.css';
import {
    blogEntryData,
    blogEtcData,
    blogIntroData,
    blogSkinData,
    blogTipData,
    blogTipDetailData
} from "./ForumTapDummyData";
import {Link} from "react-router-dom";

const ForumBlog = () => {
    const [response, setResponse] = React.useState(blogEntryData);
    const [tapState, setTapState] = React.useState('all');
    const [showDetail, setShowDetail] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(null);

    const onClickTapIntro = () => {
        setResponse(blogIntroData);
        setTapState("intro");
    }
    const onClickTapEtc = () => {
        setResponse(blogEtcData);
        setTapState("etc");
    }
    const onClickTapSkin = () => {
        setResponse(blogSkinData);
        setTapState("skin");
    }
    const onClickTapTip = () => {
        setResponse(blogTipData);
        setTapState("tip");
    }
    const onClickTapEntry = () => {
        setResponse(blogEntryData);
        setTapState("all");
    }
    const showBlogDetail = (index) => {
        setShowDetail(!showDetail);
        setActiveIndex(index);
    }

    console.log(response.data.entries);
    // console.log("tapState",tapState);
    // console.log("blogTipDetailData",blogTipDetailData.data.comments);

    return (
        <div className={classes.forumBlogBox}>
            <div className={classes.forumBlogTitle}>
                <div className={classes.forumBlogTap}>
                    <button className={tapState === 'all' ? classes.forumTapActive : classes.forumTapInActive}
                            onClick={onClickTapEntry}>전체
                    </button>
                    <button className={tapState === 'intro' ? classes.forumTapActive : classes.forumTapInActive}
                            onClick={onClickTapIntro}>블로그 소개
                    </button>
                    <button className={tapState === 'tip' ? classes.forumTapActive : classes.forumTapInActive}
                            onClick={onClickTapTip}>블로그 운영팁
                    </button>
                    <button className={tapState === 'skin' ? classes.forumTapActive : classes.forumTapInActive}
                            onClick={onClickTapSkin}>스킨
                    </button>
                    <button className={tapState === 'etc' ? classes.forumTapActive : classes.forumTapInActive}
                            onClick={onClickTapEtc}>질문/기타
                    </button>
                </div>
                <div className={classes.forumWriteBtn}>
                    <button>글쓰기</button>
                </div>
            </div>
            {response.data.entries && response.data.entries.map((item, index) => (
                <div className={classes.forumBlogList} key={`'블로그-'${index}`}>
                    <div className={classes.forumImgBox}>
                        <img src={item.userImage} alt="blogimg"/>
                    </div>
                    <div className={classes.forumBlogTitleBox}>
                        <div className={classes.forumContextBox}>
                            <div className={classes.forumContext}>
                                <div className={classes.forumContextHeader}>
                                    <a href={item.userDefaultUrl} rel="noopener noreferrer" target="_blank">{item.userName}</a>
                                </div>
                                ㆍ
                                <div className={classes.forumContextHeader}>
                                    {item.registered}
                                </div>
                                ㆍ
                                <div className={classes.forumContextCategory}>
                                    {item.category}
                                </div>
                            </div>
                            <div className={classes.forumContextTitle} onClick={() => showBlogDetail(index)}>
                                {item.title}
                            </div>
                            <div className={classes.forumContext}>
                                {(showDetail && activeIndex === index) ? item.content : item.summary}
                            </div>
                        </div>
                        <div className={classes.forumLookUp}>조회수 {item.viewCount} ㆍ 댓글 {item.commentCount}</div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default ForumBlog;