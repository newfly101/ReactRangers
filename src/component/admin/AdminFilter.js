import React from "react";

const AdminFilter = (props) => {
  const receiveChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <>
      <div>
        <label>서비스 관련 소식 및 마케팅 메일을</label>
        <select value={props.selected} onChange={receiveChangeHandler}>
          <option value="수신합니다.">수신합니다.</option>
          <option value="수신하지 않습니다.">수신하지 않습니다.</option>
        </select>
      </div>
    </>
  );
};

export default AdminFilter;
