import React from "react";
import { ReactComponent as LinkIcon } from "../SkinPage/link.svg";
import classes from "../SkinPage/SkinPage.module.css";
import UserClasses from "../SkinPage/UserSkin.module.css";

const SkinPage = (props) => {
  const { items, isAVew, usersSkin } = props;

  return (
    <>
      {isAVew ? (
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
                      <div>{item.data.content}</div>
                      <div>{item.data.content1}</div>
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
                      <div className={classes.imageWrap}>
                        {item.data.img.map((imgSrc, imgIndex) => (
                          <div className={classes.image}>
                            <img
                              key={imgIndex}
                              src={`${process.env.PUBLIC_URL}/SkinImg/${item.data.title}/${imgSrc}`}
                              alt={`Image ${imgIndex}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div id="이용자 제작 스킨">
          <div className={UserClasses.container}>
            <div className={UserClasses.cardWrap}>
              {usersSkin.map((user, index) => (
                <div key={index}>
                  <div className={UserClasses.cardItem}>
                    <img src={user.image} alt="user.index" />
                    <button>{user.title}</button>
                    <button>{user.tag}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkinPage;
