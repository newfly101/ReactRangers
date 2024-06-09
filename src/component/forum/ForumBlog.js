import React from 'react';
import classes from './ForumBlog.module.css';
import {blogEntryData, blogEtcData, blogIntroData, blogSkinData, blogTipData} from "./ForumTapDummyData";

const ForumBlog = () => {
    const [response, setResponse] = React.useState(blogEntryData);

    const onClickTapIntro = () => {
        setResponse(blogIntroData);
    }
    const onClickTapEtc = () => {
        setResponse(blogEtcData);
    }
    const onClickTapSkin = () => {
        setResponse(blogSkinData);
    }
    const onClickTapTip = () => {
        setResponse(blogTipData);
    }
    const onClickTapEntry = () => {
        setResponse(blogEntryData);
    }

    // console.log(response.data.entries);

    return (
        <div className={classes.forumBlogBox}>
            <div className={classes.forumBlogTitle}>
                <div className={classes.forumBlogTap}>
                    <button onClick={onClickTapEntry}>전체</button>
                    <button onClick={onClickTapIntro}>블로그 소개</button>
                    <button onClick={onClickTapTip}>블로그 운영팁</button>
                    <button onClick={onClickTapSkin}>스킨</button>
                    <button onClick={onClickTapEtc}>질문/기타</button>
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
                        <div className={classes.forumContext}>
                            <div className={classes.forumContext}>
                                {item.userName}ㆍ{item.registered}ㆍ{item.category}
                            </div>
                            <div className={classes.forumContextTitle}>
                                {item.title}
                            </div>
                            <div className={classes.forumContext}>
                                {item.summary}
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