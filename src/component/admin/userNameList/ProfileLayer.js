import React, { useState } from "react";
import classes from "./ProfileLayer.module.css";
import MyProfile from "../MyProfile";
import ProfileLayerFilter from "./ProfileLayerFilter";

const ProfileLayer = () => {
  const [filteredReceive, setFilteredReceive] = useState();

  const changeFilterHandler = (selectedValue) => {
    setFilteredReceive(
      selectedValue === "공개합니다." ? "공개합니다." : "공개하지 않습니다."
    );
  };

  const [sites, setSites] = useState([
    { name: "새벽감성개발자", url: "game@naver.com" },
  ]);
  const [newSite, setNewSite] = useState({ name: "tistory", url: "http://" });

  const handleAddSite = () => {
    setSites([...sites, newSite]);
    setNewSite({ name: "tistory", url: "http://" });
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSites = sites.map((site, i) =>
      i === index ? { ...site, [name]: value } : site
    );
    setSites(updatedSites);
  };

  const handleDeleteSite = (index) => {
    const updatedSites = sites.filter((_, i) => i !== index);
    setSites(updatedSites);
  };

  return (
    <div id={classes.profileLayer}>
      <div id={classes.AdminLeft}>
        <MyProfile />
      </div>
      <div id={classes.AdminRight}>
        <div>
          <div className={classes.AdminFont}>이메일 알림</div>
          <div>
            <div className={classes.AdminBlock1}>
              <ProfileLayerFilter
                selected={filteredReceive}
                onChangeFilter={changeFilterHandler}
              />
            </div>
          </div>
        </div>
        <div className={classes.AdminBlock2}>
          <label>표시하는 사이트</label>
          <div>
            {sites.map((site, index) => (
              <div key={index} className={classes.siteRow}>
                <img
                  src="https://img1.daumcdn.net/thumb/C100x100/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fmanage%2Fimages%2Fr3%2Fdefault_S.png"
                  alt="프로필이미지"
                  className={classes.profileImage}
                />
                <input
                  type="text"
                  name="name"
                  value={site.name}
                  onChange={(e) => handleInputChange(e, index)}
                  className={classes.input}
                />
                <input
                  type="text"
                  name="url"
                  value={site.url}
                  onChange={(e) => handleInputChange(e, index)}
                  className={classes.input}
                />
                <button
                  onClick={() => handleDeleteSite(index)}
                  className={classes.deleteButton}
                >
                  삭제
                </button>
              </div>
            ))}
            <button onClick={handleAddSite} className={classes.button1}>
              다른사이트 추가하기
            </button>
          </div>
        </div>
        <div className={classes.AdminBlock3}>
          <button className={classes.button}>변경사항 저장</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayer;
