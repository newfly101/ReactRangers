import React, { useState } from "react";
import classes from "./ProfileLayer.module.css";
import MyProfile from "../MyProfile";
import ProfileLayerFilter from "./ProfileLayerFilter";

const ProfileLayer = () => {
  const [filteredReceive, setFilteredReceive] = useState("공개하지 않습니다.");
  const [sites, setSites] = useState([
    { name: "새벽감성개발자", url: "game@naver.com" },
  ]);
  const [newSite, setNewSite] = useState({ name: "tistory", url: "http://" });

  const changeFilterHandler = (selectedValue) => {
    setFilteredReceive(selectedValue);
  };

  const handleAddSite = () => {
    if (newSite.name && newSite.url) {
      setSites([...sites, newSite]);
      setNewSite({ name: "tistory", url: "http://" });
    }
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedSites = sites.map((site, i) =>
      i === index ? { ...site, [name]: value } : site
    );
    setSites(updatedSites);
  };

  const handleNewSiteChange = (event) => {
    const { name, value } = event.target;
    setNewSite({ ...newSite, [name]: value });
  };

  const handleDeleteSite = (index) => {
    const updatedSites = sites.filter((_, i) => i !== index);
    setSites(updatedSites);
  };

  return (
    <div id={classes.profileLayer}>
      <div id={classes.adminLeft}>
        <MyProfile />
      </div>
      <div id={classes.adminRight}>
        <div>
          <div className={classes.mainTitle}>프로필 레이어</div>
          <div>
            <div className={classes.adminBlock1}>
              <ProfileLayerFilter
                selected={filteredReceive}
                onChangeFilter={changeFilterHandler}
              />
            </div>
          </div>
        </div>
        <div className={classes.adminBlock2}>
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
                  onChange={(event) => handleInputChange(event, index)}
                  className={classes.input}
                />
                <input
                  type="text"
                  name="url"
                  value={site.url}
                  onChange={(event) => handleInputChange(event, index)}
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
            <div className={classes.newSiteRow}>
              <input
                type="text"
                name="name"
                value={newSite.name}
                onChange={handleNewSiteChange}
                placeholder="사이트 이름"
                className={classes.input}
              />
              <input
                type="text"
                name="url"
                value={newSite.url}
                onChange={handleNewSiteChange}
                placeholder="사이트 URL"
                className={classes.input}
              />
            </div>
            <button onClick={handleAddSite} className={classes.addButton}>
              다른사이트 추가하기
            </button>
          </div>
        </div>
        <div className={classes.adminBlock3}>
          <button className={classes.saveButton}>변경사항 저장</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayer;
