import React from 'react';
import { ReactComponent as LinkIcon } from '../SkinPage/link.svg';
import classes from '../SkinPage/SkinPage.module.css';
import UserSkin from './UserSkin';

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
                      <div>
                        {item.data.img.map((imgSrc, imgIndex) => (
                          <div className={classes.image}>
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
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
        <UserSkin usersSkin={usersSkin} />
      )}
    </>
  );
};

export default SkinPage;
