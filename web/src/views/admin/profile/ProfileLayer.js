import React, { useState } from "react";
import classes from "../../../css/admin/profile/ProfileLayer.module.css";
import MyProfile from "../MyProfile";
import ProfileLayerFilter from "./ProfileLayerFilter";

const ProfileLayer = () => {
  const [filteredReceive, setFilteredReceive] = useState("공개하지 않습니다.");
  const [sites, setSites] = useState([]);
  const [newSite, setNewSite] = useState({ name: "tistory", url: "http://" });
  const [showNewSiteInput, setShowNewSiteInput] = useState(false);

  const changeFilterHandler = (selectedValue) => {
    setFilteredReceive(selectedValue);
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

  const handleSaveChanges = () => {
    if (showNewSiteInput && newSite.name && newSite.url) {
      setSites([...sites, newSite]);
      setNewSite({ name: "tistory", url: "http://" });
      setShowNewSiteInput(false);
    }
  };

  return (
    <div className={classes.profileLayer}>
      <div className={classes.profileLayerLeft}>
        <MyProfile />
      </div>
      <div className={classes.profileLayerRight}>
        <div className={classes.profileLayerTitle}>프로필 레이어</div>
        <div className={classes.profileLayerBox}>
          <ProfileLayerFilter
            selected={filteredReceive}
            onChangeFilter={changeFilterHandler}
          />
        </div>

        <div className={classes.profileLayerBox}>
          <label>표시하는 사이트</label>
          <div>
            <div className={classes.site}>
              <img
                src="https://img1.daumcdn.net/thumb/C100x100/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fmanage%2Fimages%2Fr3%2Fdefault_S.png"
                alt="프로필이미지"
                className={classes.profileImage}
              />
              <span className={classes.myNeme}>새벽감성개발자 님의 블로그</span>
              <span className={classes.myUrl}>game@naver.com</span>
            </div>
            {sites.map((site, index) => (
              <div key={index} className={classes.site}>
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
                <button onClick={() => handleDeleteSite(index)}>
                  <img
                    className={classes.deleteButton}
                    src={"/admin/deleteIcon"}
                    alt="deleteIcon"
                  />
                </button>
              </div>
            ))}

            {showNewSiteInput && (
              <div className={classes.newSite}>
                <select
                  name="name"
                  value={newSite.name}
                  onChange={handleNewSiteChange}
                  className={classes.input}
                >
                  <option value="tistory">tistory</option>
                  <option value="kakaostory">kakaostory</option>
                  <option value="instagram">instagram</option>
                  <option value="facebook">facebook</option>
                  <option value="youtube">youtube</option>
                </select>
                <input
                  type="text"
                  name="url"
                  value={newSite.url}
                  onChange={handleNewSiteChange}
                  placeholder="사이트 URL"
                  className={classes.input}
                />
              </div>
            )}
            <button
              onClick={() => setShowNewSiteInput(true)}
              className={classes.addButton}
            >
              다른사이트 추가하기
            </button>
          </div>
        </div>
        <div className={classes.adminBlock3}>
          <button onClick={handleSaveChanges} className={classes.saveButton}>
            변경사항 저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayer;
