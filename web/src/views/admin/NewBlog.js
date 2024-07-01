import React, { useState } from "react";
import classes from "../../css/admin/NewBlog.module.css";
import MyProfile from "./MyProfile";

const NewBlog = () => {
  const [blogName, setBlogName] = useState("");
  const [blogAddress, setBlogAddress] = useState("");
  const [blogNickname, setBlogNickname] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!blogName) {
      newErrors.blogName = "블로그 이름을 입력해 주세요.";
    }
    if (!blogAddress) {
      newErrors.blogAddress = "숫자, 영문 소문자, 하이픈(-)만 입력 가능합니다.";
    }
    if (!blogNickname) {
      newErrors.blogNickname = "블로그 닉네임을 입력해 주세요.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log({ blogName, blogAddress, blogNickname });
    }
  };
  return (
    <div id={classes.newBlog}>
      <div id={classes.newBlogLeft}>
        <MyProfile />
      </div>
      <div id={classes.newBlogRight}>
        <h3>새 블로그 만들기</h3>
        <form className={classes.newBlogInputBox}>
          <div className={classes.newBlogName}>
            <label>블로그 이름</label>
            <input
              type="text"
              id="blogName"
              value={blogName}
              onChange={(event) => setBlogName(event.target.value)}
            />
            {errors.blogName && (
              <p className={classes.error}>{errors.blogName}</p>
            )}
          </div>
          <div className={classes.newBlogUrl}>
            <label>블로그 주소</label>
            <div className={classes.newBlogUrlBox}>
              <input
                type="text"
                id="blogAddress"
                value={blogAddress}
                onChange={(event) => setBlogAddress(event.target.value)}
              />
              <span>.tistory.com</span>
            </div>
            {errors.blogAddress && (
              <p className={classes.error}>{errors.blogAddress}</p>
            )}
          </div>
          <div className={classes.newBlogNickname}>
            <label>블로그 닉네임</label>
            <input
              type="text"
              id="blogNickname"
              value={blogNickname}
              onChange={(event) => setBlogNickname(event.target.value)}
            />
            {errors.blogNickname && (
              <p className={classes.error}>{errors.blogNickname}</p>
            )}
          </div>
        </form>
        <div className={classes.newBlogButtonBox}>
          <button
            type="submit"
            className={classes.newBlogButton}
            onClick={handleSubmit}
          >
            개설하기기
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewBlog;
