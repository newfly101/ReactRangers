import React from "react";
// import classes from "../SkinPage.module.css";
import classes from "./SkinPageKJH.module.css";

const SkinPageKJH = ({items}) => {

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
    console.log(labelData);

    return (
        <>
            {labelData.map((item, index) => {
                console.log("item.data",item.data);
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
        </>
    );
};

export default SkinPageKJH;
