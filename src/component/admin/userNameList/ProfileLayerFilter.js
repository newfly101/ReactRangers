import React from "react";

const ProfileLayerFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <>
      <div>
        <label>댓글과 블로그 사이드바에 프로필 레이어를</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="공개하지 않습니다.">공개하지 않습니다.</option>
          <option value="공개합니다.">공개합니다.</option>
        </select>
      </div>
    </>
  );
};

export default ProfileLayerFilter;
