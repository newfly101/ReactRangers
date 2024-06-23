import React, { useState } from "react";
import Classes from "./UserSkin.module.css";
import { ReactComponent as LinkIcon } from ".//link.svg";

const UserSkin = (props) => {
  const { usersSkin } = props;

  const [isHoverd, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  return (
    <>
      <div id="이용자 제작 스킨">
        <div className={Classes.container}>
          <div className={Classes.cardWrap}>
            {usersSkin.map((user, index) => (
              <div key={index}>
                <div className={Classes.item}>
                  <div
                    key={index}
                    className={Classes.userImage}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={user.image} alt={user.index} />
                    {isHoverd === index && (
                      <div className={Classes.hoverCard}>
                        <div className={Classes.hoverProfile}>
                          <img src={user.profile} alt={user.index} />
                          <div className={Classes.name}>
                            <button>{user.name}</button>
                          </div>
                          <div className={Classes.linkButton}>
                            <button>
                              배포 사이트 보기
                              <span>
                                <LinkIcon className={Classes.icon} />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={Classes.cardButton}>
                    <div className={Classes.title}>
                      <button>{user.title}</button>
                    </div>
                    <div className={Classes.tag}>
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

export default UserSkin;
