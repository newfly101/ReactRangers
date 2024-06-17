import React, { useState } from "react";
import { ReactComponent as LinkIcon } from "../SkinPage/link.svg";
import classes from "../SkinPage/SkinPage.module.css";

const SkinPage = (props) => {
  const { items } = props;

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
      <div id="티스토리 스킨">
        {items.map((item, index) => (
          <div key={index}>
            {item.type === "label" ? (
              <div className={classes.labelContainer}>
                <div className={classes.cardWrap}>
                  <div className={classes.labelTitle}>
                    <h1>Skin FAQ</h1>
                  </div>
                  <div className={classes.labelWrap}>
                    {item.data.question.map((taglabel) => (
                      <div key={taglabel} className={classes.labelItem}>
                        <span className={classes.labelQuestion}>Q.</span>
                        <div className={classes.labelButton}>
                          <button>
                            <span>{taglabel}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className={`${classes.container} ${classes[item.type]}`}>
                <div className={classes.cardWrap}>
                  <div className={classes.title}>
                    <button>
                      <h1>{item.data.title}</h1>
                    </button>
                  </div>
                  <div className={classes.innerText}>
                    {item.data.content.map((contentText, contentIndex) => (
                      <div key={contentIndex}>{contentText}</div>
                    ))}
                  </div>
                  <div className={classes.cardButton}>
                    <div className={classes.tagButton}>
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
                  <div className={classes.imageContaner}>
                    <div
                      className={
                        imageClick[index] ? classes.animate : classes.animate1
                      }
                    >
                      {item.data.img.map((imgSrc, imgIndex) => (
                        <div
                          className={classes.image}
                          key={imgIndex}
                          id={`image${imgIndex}`}
                        >
                          <img
                            key={imgIndex}
                            src={`/SkinImg/${item.data.title}/${imgSrc}`}
                            alt={imgIndex}
                          />
                        </div>
                      ))}
                      <div className={classes.arrow}>
                        {imageClick[index] === false ? (
                          <div className={classes.rightArrow}>
                            <button onClick={() => clickRightArrow(index)}>
                              <img
                                src={"/SkinImg/arrow-right.svg"}
                                alt="arrowRight"
                              />
                            </button>
                          </div>
                        ) : (
                          <div className={classes.leftArrow}>
                            <button onClick={() => clickLeftArrow(index)}>
                              <img
                                src={"/SkinImg/arrow-left.svg"}
                                alt="arrowLeft"
                              />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SkinPage;
