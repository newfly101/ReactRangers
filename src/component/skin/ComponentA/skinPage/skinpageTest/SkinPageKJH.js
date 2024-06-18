import React, {useEffect, useState} from "react";
import { ReactComponent as LinkIcon } from "../link.svg";
import classes from "./SkinPageKJH.module.css";

const SkinPageKJH = ({items}) => {
    const initiaImageClick = items.map(() => false);
    const [imageClick, setImageClick] = useState(initiaImageClick);

    const clickLeftArrow = (index) => {
        const updatedImageClicks = [...imageClick];
        updatedImageClicks[index] = false;
        setImageClick(updatedImageClicks);
    };

    const clickRightArrow = (index) => {
        const updatedImageClicks = [...imageClick];
        updatedImageClicks[index] = true;
        setImageClick(updatedImageClicks);
    };

    return (
        <>
            {items.filter((item) => item.type === "label").map((item, index) => {
                // console.log("item.data",item.data);
                return (
                    <div key={`label${index}`} className={classes.labelContainer}>
                        <div className={classes.labelWrap}>
                            <div className={classes.labelTitle}>Skin FAQ</div>
                            <div className={classes.labelRowComponent}>
                            {item.data.question.map((quData, index) => (
                                <div key={index} className={classes.labelItem}>
                                    <span className={classes.labelQuestion}>Q. </span>{quData}
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                )
            })}

            {items.filter((item) => item.type !== "label").map((item, index) => {
                // console.log("cardsData map:",item);
                const content = item.data.content;
                const img = item.data.img;
                const tag = item.data.tag;
                return (
                    <div className={`${classes.container} ${classes[item.type]}`} key={index}>
                        <div className={classes.CardTextBox}>
                            <div className={classes.title}>
                                {item.data.title}
                            </div>
                            <div className={classes.content}>
                                {content.map((contentTxt, index) => (
                                    <span key={`content${index}`}>{contentTxt}</span>
                                ))}
                            </div>
                            <div className={classes.tagButtonBox}>
                                <div className={classes.tagBox}>
                                    {tag.map((tagTxt, index) => (
                                        <div className={classes.cardTag} key={`content${index}`}>{tagTxt}</div>
                                    ))}
                                </div>
                                <div className={classes.buttonBox}>
                                    <button>자세히 보기</button>
                                    <button className={classes.buttonLinkIcon}>
                                        적용 예시 보기
                                        <LinkIcon className={classes.icon}/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={classes.imageContainer}>
                            {img.map((imgSrc, index) => (
                                <div key={`cardImg-${index}`}
                                    className={imageClick[index] ? classes.animate : classes.animate1}
                                >
                                    <img src={`/SkinImg/${item.data.title}/${imgSrc}`} alt={`cardImg-${index}`}/>
                                </div>
                            ))}
                            {imageClick[index] === false ? (
                            <div className={classes.ArrowButtonRight}>
                                <button className={classes.ArrowButton} onClick={() => clickRightArrow}>
                                    <img
                                        src={"/SkinImg/arrow-right.svg"}
                                        alt="arrowRight"
                                    />
                                </button>
                            </div>
                                ):(
                            <div className={classes.ArrowButtonLeft}>
                                <button className={classes.ArrowButton} onClick={() => clickLeftArrow}>
                                    <img
                                        src={"/SkinImg/arrow-left.svg"}
                                        alt="arrowLeft"
                                    />
                                </button>
                            </div>
                                )}
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default SkinPageKJH;
