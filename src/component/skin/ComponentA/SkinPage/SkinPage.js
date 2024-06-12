<<<<<<< HEAD
import React from "react";
import { ReactComponent as LinkIcon } from "../SkinPage/link.svg";
import classes from "../SkinPage/SkinPage.module.css";
import UserSkin from "./UserSkin";
=======
import React from 'react';
import { ReactComponent as LinkIcon } from '../SkinPage/link.svg';
import classes from '../SkinPage/SkinPage.module.css';
import UserSkin from './UserSkin';
>>>>>>> 4f3adf0a3df63765487e384f9f25b7a6ed7e794c

const SkinPage = (props) => {
  const { items, isAVew, usersSkin } = props;

  return (
    <>
      {isAVew ? (
        <div id="티스토리 스킨">
          {items.map((item, index) => (
            <div key={index}>
              {item.type === 'label' ? (
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
                        <a href="링크주소">
                          <button>자세히 보기</button>
                        </a>
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
                          <div className={classes.image} key={imgIndex}>
                            <img
                              key={imgIndex}
                              src={`${process.env.PUBLIC_URL}/SkinImg/${item.data.title}/${imgSrc}`}
                              alt={`Image ${imgIndex}`}
                            />
                          </div>
                        ))}
                        <div className={classes.arrow}>
                          <div className={classes.leftArrow}>
                            <button>
                              <img
                                src={'/SkinImg/arrow-left.svg'}
                                alt="arrowLeft"
                              />
                            </button>
                          </div>
                          <div className={classes.rightArrow}>
                            <button>
                              <img
                                src={'/SkinImg/arrow-right.svg'}
                                alt="arrowRight"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <UserSkin usersSkin={usersSkin} />
      )}
    </>
  );
};

export default SkinPage;
