import React, {useRef} from 'react';
import classes from './ForumBlog.module.css';
import {
  blogEntryData,
  blogEtcData,
  blogIntroData,
  blogSkinData,
  blogTipData,
} from "./ForumTapDummyData";
import ForumBlogTap from "./forumTap/ForumBlogTap";

const ForumBlog = () => {
    const [response, setResponse] = React.useState(blogEntryData);
    const [tapState, setTapState] = React.useState('all');

    const inputRef = useRef(null);

    const onClickTapEntry = () => {
        setResponse(blogEntryData);
        setTapState("all");
    }
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
                        <button onClick={scrollToInput}>글쓰기</button>
                    </div>
                </div>
                <ForumBlogTap
                    response={response}
                    shortedString={shortedString}
                    scrollToInput={scrollToInput}
                />
            </div>
            {/*<input ref={inputRef}/>*/}
        </>
    );
};

export default ForumBlog;
