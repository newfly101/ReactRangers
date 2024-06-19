import React, { useState } from "react";
import classes from "./NewBlog.module.css";
import home from "./assets/home.svg";
import user from "./assets/user.svg";
import down from "./assets/down.svg";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ blogName, blogAddress, blogNickname });
    }
  };
  return (
    <div id={classes.newBlog}>
      <div id={classes.newBlogLeft}>
        <div>
          <div className={classes.newBlogProfile}>
            <div className={classes.newBlogProfileImage}>
              <a href="/admin">
                <img
                  src="https://img1.daumcdn.net/thumb/C100x100/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fmanage%2Fimages%2Fr3%2Fdefault_S.png"
                  alt="프로필이미지"
                />
              </a>
              <div className={classes.newBlogNameUser}>새벽감성개발자</div>
              <div className={classes.newBlogNameEmail}>game@naver.com</div>
            </div>
          </div>
        </div>
        <div id={classes.newBlogList}>
          <div>
            <div className={classes.newBlogMyblog}>
              <div className={classes.newBlogListHomeIcon}>
                <img src={home} alt="home" />
              </div>
              <div className={classes.newBlogListMyBlog}>내 블로그</div>
            </div>
            <div className={classes.newBlogListLine}>
              <div className={classes.newBlogListUserIcon}>
                <img src={user} alt="user" />
              </div>
              <div>
                <div>
                  <div className={classes.newBlogListUser}>내 계정</div>
                </div>
                <div className={classes.newBlogListMenu}>
                  <div className={classes.newBlogListMenuFont}>
                    프로필 레이어
                  </div>
                  <div className={classes.newBlogListMenuFont}>
                    응원내역보기
                  </div>
                  <div className={classes.newBlogListMenuFont}>
                    카카오계정 관리
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.newBlogLisLinkMenuIcon}>
                <img src={down} alt="down"></img>
              </div>
              <div className={classes.newBlogListLinkMenu}>외부 기능</div>
            </div>
          </div>
        </div>
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
              onChange={(e) => setBlogName(e.target.value)}
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
                onChange={(e) => setBlogAddress(e.target.value)}
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
              onChange={(e) => setBlogNickname(e.target.value)}
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
