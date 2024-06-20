import React from "react";
import classes from "./StoryItemBox.module.css";
import {Observer} from "mobx-react";

const StoryItemBox = ({storyStore}) => {
  return (
    <div className={classes.itemboxesContainer}>
        <Observer>
            {()=>(
                <>
                {storyStore.dummyData.itemData.data.list.map((item, index) => (
                        <div key={index}>
                            <a className={classes.itemBoxContainer} href={item.link}>
                                <section className={classes.itemBoxWrapper}>
                                    <div className={classes.ItemBoxStart}>
                                        <div className={classes.categoryName}>
                                            {item.categoryName}
                                            <hr className={classes.textHr} />
                                        </div>
                                        <div className={classes.publishedAgo}>{item.publishedAgo}</div>
                                        <div>
                                            공감{" "}
                                            <label className={classes.likeCount}>{item.likeCount}</label>
                                        </div>
                                    </div>
                                    <div className={classes.ItemBoxMid}>
                                        <div className={classes.ItemBoxMidTitle}>
                                            {item.title.substring(0, 35)}
                                        </div>
                                        <div className={classes.ItemBoxdesc}>
                                            {item.summary.substring(0, 50)}
                                            <br />
                                            {item.summary.substring(50, 100) + "..."}
                                        </div>
                                        <div className={classes.ItemBoxAuthor}>
                                            <div className={classes.ItemBoxAuthorDetali}>
                                                <img
                                                    className={classes.ItemBoxAuthorImg}
                                                    src={`${item.userImage}`}
                                                    alt="아이템박스 저자 이미지"
                                                />
                                                <div>{item.userName}</div>
                                                <div className={classes.authorBlogTitle}>
                                                    by {item.blogTitle.substring(0, 30)}
                                                </div>
                                            </div>
                                            <div className={classes.subscribeBtn}>구독하기</div>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            className={classes.itemBoxImg}
                                            src={`${item.thumbnail}`}
                                            alt="아이템박스 이미지"
                                        />
                                    </div>
                                </section>
                            </a>
                            </div>
                    ))}
                        </>
            )}
        </Observer>
    </div>

  );
};

export default StoryItemBox;
