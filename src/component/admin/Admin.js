import React from "react";

const Admin = () => {
  return (
    <div id="Admin">
      <div id="profile">
        <div className="left-profile">
          <div className="profile__image">
            <a href=""></a>
          </div>
          <div className="profile__name">
            <strong className="profile__name-pont">새벽감성개발자</strong>
            <span className="profile__name-email">game@naver.com</span>
          </div>
        </div>
        <div id="profile__menu">
          <div className="">
            
          </div>
        </div>
      </div>

      <div id="blog">
        <div className="blog__operation">
          <h3 className="title__font">운영 중인 블로그</h3>
          <ul className="myblog">
            <li>
              <div className="box">
                <div className="myblog__name">
                  <strong className="myblog__name-title">
                    새벽의 이것저것
                    <a href="" className="myblog__name-url"></a>
                  </strong>
                  <a href="" className="myblog__name-text">
                    game.tistory.com
                  </a>
                  <button className="box-button">대표</button>
                  <div className="box-text">
                    대표 블로그는 방문한블로그/팀블로그 활동 시 사용됩니다.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="title__font">운영∙개설 현황</h3>
      <div className="box">
        <div className=""></div>
        <button className="box-button">새 블로그 만들기</button>
      </div>
      <h3 className="title__font">이메일 알림</h3>
      <form className="box">
        <button className="box-button">변경사항 저장</button>
      </form>
    </div>
  );
};

export default Admin;
