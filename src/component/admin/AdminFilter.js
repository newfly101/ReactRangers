import React from "react";
// import "./AdminFilter.css"

const AdminFilter = (props) => {
  const receiveChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="receiveFilter">
      <div className="receiveFilterControl">
        <label>서비스 관련 소식 및 마케팅 메일을</label>
        <select value={props.selected} onChange={receiveChangeHandler}>
          <option value="수신합니다.">수신합니다.</option>
          <option value="수신하지 않습니다.">수신하지 않습니다.</option>
        </select>
      </div>
    </div>
  );
};

export default AdminFilter;
