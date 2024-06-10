import React from 'react';
import classes from "../ForumBlog.module.css";
import {blogEntryData, blogTipDetailData} from "../ForumTapDummyData";
import TapComment from "./Comment/TapComment";
import TapAddComment from "./Comment/TapAddComment";

const ForumBlogTapAll = (props) => {
    const [response, setResponse] = React.useState(blogEntryData);

    console.log(response);


    // const response = props.response;
    return (
        <>
            {response.data.entries && response.data.entries.map((item, index) => (
                <div key={`'블로그-'${index}`}>
                    <div>
                        <div className={classes.forumBlogList} key={`'블로그Info-'${index}`}>
                            <div className={classes.forumImgBox}>
                                <img src={item.userImage} alt="blogimg"/>
                            </div>
                            <div className={classes.forumBlogTitleBox}>
                                <div className={classes.forumContextBox}>
                                    <div className={classes.forumContext}>
                                        <div className={classes.forumContextHeader}>
                                            <a href={item.userDefaultUrl} rel="noopener noreferrer"
                                               target="_blank">{item.userName}</a>
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
                                    <div className={classes.forumContextTitle}
                                         onClick={() => props.showBlogDetail(index)}>
                                        {item.title}
                                    </div>
                                    <div className={classes.forumContext}>
                                        {(props.showDetail && props.activeIndex === index) ? item.content : props.shortedString(item.summary, 100)}
                                    </div>
                                </div>
                                <div className={classes.forumLookUp}>조회수 {item.viewCount} ㆍ
                                    댓글 {item.commentCount}</div>
                            </div>
                        </div>
                        {props.activeIndex === index && props.showDetail === true &&
                            blogTipDetailData.data.comments && blogTipDetailData.data.comments.map((detailItem) =>
                                (
                                    <TapComment detailItem={detailItem} key={`'블로그Detail-'${detailItem.id}`}/>
                                )
                            )}
                    </div>
                    {props.activeIndex === index && props.showDetail === true &&
                        <TapAddComment props={props}/>
                    }
                </div>
            ))}
        </>
    );

};

export default ForumBlogTapAll;
