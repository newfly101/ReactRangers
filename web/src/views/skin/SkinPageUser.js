import React, { useState } from "react";
import classes from "../../css/skin/SkinPageUser.module.css";

const SkinPageUser = (props) => {
  const { usersSkin } = props;

  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  return (
    <>
      <div id="이용자 제작 스킨">
        <div className={classes.container}>
          <div className={classes.cardWrap}>
            {usersSkin.map((user, index) => (
              <div key={index}>
                <div className={classes.item}>
                  <div
                    key={index}
                    className={classes.userImage}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={user.image} alt={user.index} />
                    {isHovered === index && (
                      <div className={classes.hoverCard}>
                        <div className={classes.hoverProfile}>
                          <img src={user.profile} alt={user.index} />
                          <div className={classes.name}>
                            <button>{user.name}</button>
                          </div>
                          <div className={classes.linkButton}>
                            <button>
                              배포 사이트 보기
                              <span className={classes.iconContainer}>
                                <img src={'/SkinImg/link.svg'} alt="skinmore"/>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={classes.cardButton}>
                    <div className={classes.title}>
                      <button>{user.title}</button>
                    </div>
                    <div className={classes.tag}>
                      {user.tag.map((tagSkin, tagIndex) => (
                        <button key={tagIndex}>{tagSkin}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkinPageUser;
