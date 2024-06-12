import React from "react";
import classes from "./StoryItemBox.module.css";

const StoryItemBox = ({ dummyData }) => {
  return (
    <div>
      {dummyData.map((item, index) => (
        <div key={index}>
          <a href={item.link}>
            {/*각 아이템 박스 전체를 섹션으로 감싼다*/}
            <section className={classes.itemBoxWrapper}>
              {/*아이템 박스 앞부분*/}
              <div className={classes.ItemBoxStart}>
                <div className={classes.categoryName}>
                  {item.categoryName}
                  <hr className={classes.textHr} />
                </div>
                <div className={classes.publishedAgo}>{item.publishedAgo}</div>
                <div>
                  공감{" "}
                  <label className={classes.likeCount}>{item.likeCount}</label>
                </div>
              </div>
              {/*아이템 박스 중간 부분*/}
              <div className={classes.ItemBoxMid}>
                <div className={classes.ItemBoxMidTitle}>
                  {item.title.substring(0, 35)}
                </div>
                <div className={classes.ItemBoxdesc}>
                  {item.summary.substring(0, 55)}
                  <br />
                  {item.summary.substring(55, 100) + "..."}
                </div>
                <div className={classes.ItemBoxAuthor}>
                  <div className={classes.ItemBoxAuthorDetali}>
                    <img
                      className={classes.ItemBoxAuthorImg}
                      src={`${item.userImage}`}
                      alt="아이템박스 저자 이미지"
                    />
                    <div>{item.userName}</div>
                    <div className={classes.authorBlogTitle}>
                      by {item.blogTitle.substring(0, 30)}
                    </div>
                  </div>
                  <div className={classes.subscribeBtn}>구독하기</div>
                </div>
              </div>
              {/*아이템 박스 오른쪽 끝 이미지 부분*/}
              <div>
                <img
                  className={classes.itemBoxImg}
                  src={`${item.thumbnail}`}
                  alt="아이템박스 이미지"
                />
              </div>
            </section>
          </a>
          {/*각 아이템 박스를 구분하는 선*/}
          <hr className={classes.mainBar} />
        </div>
      ))}
    </div>
  );
};

export default StoryItemBox;
