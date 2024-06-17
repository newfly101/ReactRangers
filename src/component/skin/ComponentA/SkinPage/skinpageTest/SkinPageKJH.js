import React, {useEffect} from "react";
import { ReactComponent as LinkIcon } from "../link.svg";
import classes from "./SkinPageKJH.module.css";

const SkinPageKJH = ({items}) => {
    const [imageClick, setImageClick] = React.useState(false);
    const [listindex, setListIndex] = React.useState(0);

    // {
    //   "type": "cardWhite",
    //   "data": {
    //       "title": "Odyssey",
    //       "content": [
    //         "글과 사진, 그리고 영상을 담아",
    //         "당신의 블로그 여행에 함께합니다."
    //          ],
    //       "tag": ["#반응형", "#블로그형", "#커버 지원"],
    //       "img": ["Odyssey0.jpg", "Odyssey1.jpg", "Odyssey2.jpg"]
    //    }
    // },
    console.log(items);
    const labelData = items.filter((item) => item.type === "label");
    const cardsData = items.filter((item) => item.type !== "label");
    console.log("cardsData",cardsData);

    useEffect(() => {

    }, [listindex]);

    return (
        <>
            {labelData.map((item, index) => {
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
            {cardsData.map((item, index) => {
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
                                <div key={`cardImg-${index}`}>
                                    <img src={`/SkinImg/${item.data.title}/${imgSrc}`} alt={`cardImg-${index}`} />
                                </div>
                            ))}
                                <div >
                                    {/*{imageClick === false ? (*/}
                                    {/*    <div className={classes.rightArrow}>*/}
                                    {/*        <button onClick={clickRightArrow}>*/}
                                    {/*            <img*/}
                                    {/*                src={"/SkinImg/arrow-right.svg"}*/}
                                    {/*                alt="arrowRight"*/}
                                    {/*            />*/}
                                    {/*        </button>*/}
                                    {/*    </div>*/}
                                    {/*) : (*/}
                                    {/*    <div className={classes.leftArrow}>*/}
                                    {/*        <button onClick={clickLeftArrow}>*/}
                                    {/*            <img*/}
                                    {/*                src={"/SkinImg/arrow-left.svg"}*/}
                                    {/*                alt="arrowLeft"*/}
                                    {/*            />*/}
                                    {/*        </button>*/}
                                    {/*    </div>*/}
                                    {/*)}*/}
                                </div>
                            </div>
                    </div>
                )
            })}
        </>
    );
};

export default SkinPageKJH;
