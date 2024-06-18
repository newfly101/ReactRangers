import React from 'react';
import classes from "../ForumBlog.module.css";
import {blogTipDetailData} from "../ForumTapDummyData";
import TapComment from "./comment/TapComment";
import TapAddComment from "./comment/TapAddComment";
import dayjs from "dayjs";
// import {toJS} from "mobx";
// import {useLocalObservable} from "mobx-react";
// import ForumStore from "../../../stores/ForumStore";

const ForumBlogTap = (props) => {
    // const forumStore = useLocalObservable(ForumStore);
    const [activeIndex, setActiveIndex] = React.useState([{0: false}]);
    const [userId, setUserId] = React.useState(null);
    const [userName, setUserName] = React.useState(null);
    const [addData, setAddData] = React.useState('');

    const showBlogDetail = (index) => {
        setActiveIndex((prevActiveIndex) => {
            // Find if the index exists
            const indexExists = prevActiveIndex.find((item) => item.hasOwnProperty(index));

            console.log("indexExists", indexExists);

            // If index exists, toggle its value
            if (indexExists) {
                return prevActiveIndex.map((item) =>
                    item.hasOwnProperty(index) ? {[index]: !item[index]} : item
                );
            } else {
                // If index does not exist, add it to the array
                return [...prevActiveIndex, {[index]: true}];
            }
        });
    }

    const getLocalStorageUserId = () => {
        setUserId(window.localStorage.getItem("user"));
    }
    const getLocalStorageUserName = () => {
        setUserName(window.localStorage.getItem("userName"));
    }
    const submitComment = (addComment) => {
        console.log("addComment", addComment);
        setAddData(addComment);
        getLocalStorageUserId();
        getLocalStorageUserName();
        console.log(request);
    }

    const request = {
        "comments": [{
            "entryId": 304124,
            "id": Math.trunc((Math.random() * 99999) + 1),
            "registered": dayjs(new Date()).format("YYYY-MM-DD HH:mm"),
            "content": addData,
            "status": null,
            "userId": {userId},
            "userName": {userName},
            "userDefaultUrl": "https://github.com/newfly101/ReactRangers",
            "userImage": "https://avatars.githubusercontent.com/u/62008619?v=4"
        }]
    }

    const response = props.response;

    // console.dir("response",response);

    return (
        <>
            {response.data.entries && response.data.entries.map((item, index) => {
                const isActive = activeIndex.find((obj) => obj[index] === true);
                return (
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
                                             onClick={() => showBlogDetail(index)}>
                                            {item.title}
                                        </div>
                                        <div className={classes.forumContext}>
                                            {isActive ? item.content : props.shortedString(item.summary, 100)}
                                        </div>
                                    </div>
                                    <div className={classes.forumLookUp}>조회수 {item.viewCount} ㆍ
                                        댓글 {item.commentCount}</div>
                                </div>
                            </div>
                            {isActive &&
                                blogTipDetailData.data.comments && blogTipDetailData.data.comments.map((detailItem) =>
                                    (
                                        <TapComment detailItem={detailItem} key={`'블로그Detail-'${detailItem.id}`}/>
                                    )
                                )}
                        </div>
                        {isActive &&
                            <TapAddComment submitComment={submitComment}/>
                        }
                    </div>
                )
            })}
        </>
    );

};

export default ForumBlogTap;
