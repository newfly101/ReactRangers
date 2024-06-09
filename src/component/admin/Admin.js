import React from "react";

const Admin = () => {
  return (
    <div>
      <div class="blog">
        <div class="blog__operation">
          <h3>운영 중인 블로그</h3>
          <button>대표</button>
          <span>대표 블로그는 방문한블로그/팀블로그 활동 시 사용됩니다.</span>
        </div>
      </div>
      <div class="blog__situation">
        <h3>운영∙개설 현황</h3>
        <button>새 블로그 만들기</button>
      </div>
      <div class="blog__email">
        <h3>이메일 알림</h3>
        <button>변경사항 저장</button>
      </div>
    </div>
  );
};

export default Admin;
