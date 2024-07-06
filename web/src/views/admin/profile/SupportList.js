import React, { useState } from "react";
import classes from "../../../css/admin/profile/SupportList.module.css";
import MyProfile from "../MyProfile";

const SupportList = () => {
  const [searchText, setSearchText] = useState(false);

  const searchClickHandler = () => {
    setSearchText(!searchText);
  };

  return (
    <div className={classes.supportList}>
      <div className={classes.supportListLeft}>
        <MyProfile />
      </div>
      <div className={classes.supportListRight}>
        <div className={classes.mainTitle}>응원내역</div>
        <div className={classes.searchBox}>
          <button className={classes.searchIcon} onClick={searchClickHandler}>
            검색
            <img src={"/admin/search.svg"} alt="search" />
          </button>
          {searchText && (
            <div className={classes.searchText}>
              <input type="text" placeholder="응원 내역에서 검색합니다." />
              <button type="submit">검색</button>
            </div>
          )}
        </div>
        <div className={classes.searchList}>응원한 댓글이 없습니다</div>
      </div>
    </div>
  );
};

export default SupportList;
