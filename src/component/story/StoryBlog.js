import React from "react";
import classes from "./StoryBlog.module.css";

const StoryBlog = () => {
  let RN = Number(Math.floor(Math.random() * 3) + 1);
  return (
    <div className={classes.blogWrapper}>
      <img
        src="https://img1.daumcdn.net/thumb/C576x336/?fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FATXC4%2FbtsBqZXSQBv%2F6jHfw85KuYxvSXsmg8eeI1%2Fimg.png"
        alt="스토리블로그 이미지"
        className={classes.blogImg}
      />
      <div>
        반려동물 · 공감{RN * RN} · 응원 {RN}
      </div>
      <div className={classes.blogText}>
        <div>아이들과 고양이 함께 지내도 되나요?</div>
        <div>수의사가 알려주는 반려동물 생활 속 꿀팁</div>
        <div>by 10년째수의사</div>
      </div>
    </div>
  );
};

export default StoryBlog;
