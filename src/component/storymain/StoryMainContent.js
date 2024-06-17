import React from "react";
import classes from "./StoryMainContent.module.css";
import {
  MainContentDummy,
  MainContentsponsorDummy,
} from "./data/StoryMainContentDummy";

const StoryMainContent = () => {
  const moveToPage = (href) => {
    window.location.href = href;
  };

  return (
    <div>
      <div className={classes.wrapTit}>
        <span className={classes.titSection}>
          이 놀라운 사이트들이
          <br />
          <span className={classes.titsectionEm}>
            모두
            <img
              src="https://t1.daumcdn.net/tistory_admin/static/top/pc/txt_da.png"
              alt=""
              className={classes.txtDa}
            />
            티스토리
          </span>
          라는 사실
        </span>
        <p className={classes.descSection}>
          티스토리는 그저 공간일 뿐이에요. 그 공간에 무슨일이 일어날지는 아무도
          상상할 수 없죠.
        </p>
        <div className={classes.slider}>
          {MainContentDummy.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt=""
              className={`${classes.banner_link} ${classes.banner_image}`}
              onClick={() => moveToPage(img.MoveToPage)}
            />
          ))}
        </div>

        <div className={classes.sponsorImages}>
          {MainContentsponsorDummy.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.src}
              alt={`${index}sponsor`}
              onClick={() => moveToPage(sponsor.MoveToPage)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryMainContent;
