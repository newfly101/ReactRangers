import React from "react";
import classes from "./Story.module.css";
import StoryBlog from "./StoryBlog";
import StoryItemBox from "./StoryItemBox";
import {Observer} from "mobx-react";
import StoryStore from "../../stores/StoryStore";

const Story = () => {
    const storyStore = new StoryStore()
    return (
        <div className={classes.storyMain}>
            <Observer>
                {() => (
                    <div>
                        <section className={`${classes.storyTopSection} ${classes.storyWrapper}`}>
                            <div className={classes.storyTopSectionInnertext}>
                                <h4 className={classes.topSectionTitle}>Story</h4>
                                <p className={classes.topSectionMessage}>
                                    티스토리의 다양한 이야기들을 만나보세요
                                </p>
                            </div>
                            <div className={`${classes.topSectionWrapTag}`}>
                                {storyStore.tagsName.map((item, index) => (
                                    <div
                                        key={index}
                                        className={classes.tags}
                                        onClick={() => storyStore.convertData(item.dataName)}
                                    >
                                        <div
                                            className={`${classes.tagFocus} ${
                                                storyStore.dummyData.dataName === item.dataName && classes.choiceTag
                                            }`}
                                        >
                                            {item.tagName}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section>
                            <div className={classes.blogBackGround}>
                                <div className={classes.storyWrapper}>
                                    <StoryBlog storyStore={storyStore}/>
                                </div>
                            </div>
                        </section>
                        <div className={classes.storyWrapper}>
                            <StoryItemBox storyStore={storyStore}/>
                        </div>
                    </div>
                )}

            </Observer>
        </div>

    )
        ;
};

export default Story;
