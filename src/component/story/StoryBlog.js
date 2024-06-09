import React from "react";
import classes from "./StoryBlog.module.css";

const StoryBlog = () => {
  let RN = Number(Math.floor(Math.random() * 20) + 1);
  return (
    <div className={classes.blogWrapper}>
      <img
        src="https://img1.daumcdn.net/thumb/C576x336/?fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FATXC4%2FbtsBqZXSQBv%2F6jHfw85KuYxvSXsmg8eeI1%2Fimg.png"
        alt="스토리블로그 이미지"
        className={classes.blogImg}
      />

      <div className={classes.blogTextWrapper}>
        <div className={classes.blogInfo}>
          반려동물 &nbsp;·&nbsp; 공감
          <label className={classes.blogInfoNum}> {RN * RN} </label>&nbsp;
          ·&nbsp; 응원 <label className={classes.blogInfoNum}>{RN}</label>
        </div>

        <div className={classes.blogTitle}>
          아이들과 강아지/고양이 함께 지내도 되나요?...
        </div>
        <div className={classes.blogDesc}>수의사가 알려주는 반려...</div>
        <div className={classes.blogAuthor}>by 10년째수의사</div>
      </div>
    </div>
  );
};

export default StoryBlog;
