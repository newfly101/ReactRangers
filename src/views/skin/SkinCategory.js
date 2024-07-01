import React, { useState } from "react";
import classes from "../../css/skin/Category.module.css";

const SkinCategory = ({ handleCategoryButton }) => {
  const [isActive, setIsActive] = useState(0);

  const handleAButton = () => {
    setIsActive(0);
    handleCategoryButton(0);
  };

  const handleBButton = () => {
    setIsActive(1);
    handleCategoryButton(1);
  };

  const handleCreateSkinButton = () => {
    setIsActive(4);
    handleCategoryButton(4);
  }
  return (
    <>
      <div className={classes.container}>
        <div>
          <div className={classes.title}>
            <div className={isActive === 0 ? classes.titleAction : ""}>
              <button onClick={handleAButton}>
                <span>티스토리 스킨</span>
              </button>
            </div>
            <div className={isActive === 1 ? classes.titleAction : ""}>
              <button onClick={handleBButton}>
                <span>이용자 제작 스킨</span>
              </button>
            </div>
          </div>
          {isActive !== 1 ? (
              <div className={classes.userTag}>
                <div className={classes.categoryTag}>
                  <button>#매거진</button>
                  <button>#미니멀</button>
                <button>#반응형</button>
                <button>#블로그형</button>
                <button>#사이트</button>
                <button>#초보</button>
                <button>#커버 지원</button>
              </div>
            </div>
          ) : (
            <div className={classes.userTag}>
              <div className={classes.categoryTag}>
                <button>#반응형</button>
                <button>#심플형</button>
                <button>#갤러리형</button>
                <button>#그리드형</button>
                <button>#일반형</button>
              </div>
              <div className={classes.roundButton}>
                <button
                onClick={handleCreateSkinButton}
                >스킨 등록하기</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SkinCategory;
