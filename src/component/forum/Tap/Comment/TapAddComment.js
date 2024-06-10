import React, {useRef} from 'react';
import classes from "../../ForumBlog.module.css";

const TapAddComment = () => {
    const [addComment, setAddComment] = React.useState('');
    const textareaRef = useRef(null);
    const [focus, setFocus] = React.useState(false);

    const onChangeAddComment = (event) => {
        setAddComment(event.target.value);
    }

    const autoScaleTextArea = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }
    const onFocusTextArea = () => {
        setFocus(true);
    }
    const onBlurTextArea = () => {
        setFocus(false);
    }
    const submitComment = (event) => {
        event.preventDefault();
        console.log("addComment", addComment);
    }


    return (
        <div className={classes.forumBlogWriteDetail}>
            <form>
                <div className={classes.forumBlogWriteBox}>
                    <textarea
                        className={classes.forumBlogInput}
                        placeholder={`내용을 입력하세요\n하루에 10개까지 작성 가능합니다`}
                        value={addComment}
                        onChange={onChangeAddComment}
                        maxLength={500}
                        ref={textareaRef}
                        onInput={autoScaleTextArea}
                        onFocus={onFocusTextArea}
                        onBlur={onBlurTextArea}
                    />
                    <div className={classes.forumBlogInputForm}>
                        <div>
                            <label className={focus === true ?
                                classes.inputActiveLabel : classes.inputInActiveLabel}>{addComment.length}</label>
                            <label className={classes.inputInActiveLabel}>/500</label>
                        </div>
                        <button
                            className={addComment.length === 0 ? classes.inputInActiveButton : classes.inputActiveButton}
                            onClick={submitComment}
                            disabled={addComment.length === 0}
                        >완료
                        </button>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default TapAddComment;
