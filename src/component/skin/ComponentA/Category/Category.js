import React from "react";
import classes from "./Category.module.css";

const Category = () => {
  return (
    <>
      <div className={classes.container}>
        <div>
          <div className={classes.title}>
            <div className={classes.titleAction}>
              <button>
                <span>티스토리 스킨</span>
              </button>
            </div>
            <div>
              <button>
                <span>이용자 제작 스킨</span>
              </button>
            </div>
          </div>
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
      </div>
    </>
  );
};

export default Category;
