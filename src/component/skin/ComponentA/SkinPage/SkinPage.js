import React from "react";
import { ReactComponent as LinkIcon } from "../SkinPage/link.svg";
import classes from "../SkinPage/SkinPage.module.css";

const SkinPage = (props) => {
  const { items } = props;
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <div className={`${classes.allContainer} ${classes[item.type]}`}>
            <div className={classes.cardWrap}>
              <div className={`${classes.allButton} ${classes.cardTitle}`}>
                <button>
                  <h1>{item.data.title}</h1>
                </button>
              </div>
              <div className={classes.cardInnerText}>
                <div>{item.data.content}</div>
                <div>{item.data.content1}</div>
              </div>
              <div className={classes.cardButton}>
                <div
                  className={`${classes.allButton} ${classes.hoverLine} ${classes.cardTagButton} `}
                >
                  {item.data.tag.map((tagItem, tagIndex) => (
                    <button key={tagIndex}>{tagItem}</button>
                  ))}
                </div>
                <div className={`${classes.roundButton}`}>
                  <button>자세히 보기</button>
                  <button className={classes.buttonLinkIcon}>
                    적용 예시 보기
                    <span>
                      <LinkIcon className={classes.icon} />
                    </span>
                  </button>
                </div>
              </div>
              <div className={classes.cardImageContaner}>
                <div className={classes.cardImage}>
                  {item.data.img.map((imgSrc, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={`SkinImg/${item.data.title}/${imgSrc}`}
                      alt={`Image ${imgIndex}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkinPage;
