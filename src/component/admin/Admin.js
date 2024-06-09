import React from "react";

const Admin = () => {
  return (
    <div className="Admin">
      <div className="blog">
        <div className="blog__operation">
          <h3 className="title__font">운영 중인 블로그</h3>
          <ul className="myblog">
            <li>
              <div className="box">
                <div className="myblog__name">
                  <strong class="myblog__name-title">
                    새벽의 이것저것
                    <a
                      href="https://inagi94.tistory.com/manage"
                      className="myblog__name-url"
                    ></a>
                  </strong>
                  <a
                    href="https://inagi94.tistory.com"
                    className="myblog__name-text"
                  >
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
      <div className="title__font">
        <h3 className="situation_font">운영∙개설 현황</h3>
        <form className="box">
          <button className="box-button">새 블로그 만들기</button>
        </form>
      </div>
      <div className="title__font">
        <h3 className="email_font">이메일 알림</h3>
        <form className="box">
          <button className="box-button">변경사항 저장</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
