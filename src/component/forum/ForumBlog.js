import React, {useRef} from 'react';
import classes from './ForumBlog.module.css';
import {
  blogEntryData,
  blogEtcData,
  blogIntroData,
  blogSkinData,
  blogTipData,
  blogTipDetailData,
} from "./ForumTapDummyData";
import ForumBlogTapAll from "./Tap/ForumBlogTapAll";

const ForumBlog = () => {
    const [response, setResponse] = React.useState(blogEntryData);
    const [tapState, setTapState] = React.useState('all');
    const [showDetail, setShowDetail] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(null);
    const [addComment, setAddComment] = React.useState('');


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

    const showBlogDetail = (index) => {
        setShowDetail(!showDetail);
        setActiveIndex(index);
    }
    const shortedString = (str, num) => {
        if (str.length < num) {
            return str;
        }
        return str.slice(0, num) + '...';
    }
    const scrollToInput = () => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView({behavior: 'smooth'});
            inputRef.current.focus();
        }
    }
    const onChangeAddComment = (event) => {
        setAddComment(event.target.value);
    }



    // console.log(response.data.entries);
    // console.log("tapState",tapState);
    // console.log("blogTipDetailData", blogTipDetailData.data.comments);

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

                {tapState === "all" &&
                    <ForumBlogTapAll
                        response={response}
                        showBlogDetail={showBlogDetail}
                        shortedString={shortedString}
                        scrollToInput={scrollToInput}
                        onChangeAddComment={onChangeAddComment}
                        // submitComment={submitComment}
                        // autoScaleTextArea={autoScaleTextArea}
                        // onFocusTextArea={onFocusTextArea}
                        // onBlurTextArea={onBlurTextArea}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        // focus={focus}
                        showDetail={showDetail}
                        // textareaRef={textareaRef}
                        addComment={addComment}
                        setAddComment={setAddComment}

                />}

            </div>
            {/*<input ref={inputRef}/>*/}
        </>
    );
};

export default ForumBlog;
