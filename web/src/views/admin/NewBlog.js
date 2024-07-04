import React, { useState } from "react";
import classes from "../../css/admin/NewBlog.module.css";
import MyProfile from "./MyProfile";

const NewBlog = () => {
  const [blogName, setBlogName] = useState("");
  const [blogUrl, setBlogUrl] = useState("");
  const [blogNickname, setBlogNickname] = useState("");
  const [errors, setErrors] = useState({});

  return (
    <div className={classes.newBlog}>
      <div className={classes.newBlogLeft}>
        <MyProfile />
      </div>
      <div className={classes.newBlogRight}>
        <div className={classes.newBlogTitle}>새 블로그 만들기</div>

        <form className={classes.newBlogInputBox}>
          <div className={classes.newBlogName}>
            블로그 이름
            <input
              type="text"
              id="blogName"
              value={blogName}
              onChange={(event) => setBlogName(event.target.value)}
            />
          </div>
          <div className={classes.newBlogUrl}>
            블로그 주소
            <label>
              기본주소는 개설후 변경할 수 없으니 신중하게 만들어 주세요.
            </label>
            <div className={classes.newBlogUrlBox}>
              <input
                type="url"
                placeholder="최소 4자 ~ 최대 32자의 영문 소문자, 숫자, 하이픈(-)으로 입력해 주세요."
                id="blogUrl"
                value={blogUrl}
                onChange={(event) => setBlogUrl(event.target.value)}
              />
              <div className={classes.newBlogUrlName}>.tistory.com</div>
            </div>
          </div>
          <div className={classes.newBlogNickname}>
            블로그 닉네임
            <label>블로그에서 사용할 닉네임을 만들어 주세요</label>
            <input
              type="text"
              id="blogNickname"
              value={blogNickname}
              onChange={(event) => setBlogNickname(event.target.value)}
            />
          </div>
        </form>
        <div className={classes.newBlogButtonBox}>
          <button type="submit" className={classes.newBlogButton}>
            개설하기기
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewBlog;
