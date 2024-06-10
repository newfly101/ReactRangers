import React from 'react';
import classes from "../../ForumBlog.module.css";

const TapComment = ({detailItem}) => {
    return (
        <div className={classes.forumBlogListDetail}
             >
            <div className={classes.forumBlogListComment}>
                <div className={classes.forumBlogListCommentImg}>
                    <img
                        src={detailItem.userImage}
                        alt="comImg"/>
                </div>
                <div className={classes.forumBlogListCommentContext}>
                    <div className={classes.forumContext}>
                        <div className={classes.forumContextHeader}>
                            {detailItem.userName}
                        </div>
                        ㆍ
                        <div className={classes.forumContextHeader}>
                            {detailItem.registered}
                        </div>
                        ㆍ
                        <div className={classes.forumContextHeader}>
                            신고
                        </div>
                    </div>
                    <div className={classes.forumContext}>
                        {detailItem.content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TapComment;
