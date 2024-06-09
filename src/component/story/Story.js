import React from "react";
import classes from "./Story.module.css";
import StoryBlog from "./StoryBlog";

const Story = () => {
  return (
    <div>
      <section className={`${classes.storyTopSection} ${classes.storyWrapper}`}>
        <div className={classes.storyTopSectionInnertext}>
          <h4 className={classes.topSectionTitle}>Story</h4>
          <p className={classes.topSectionMessage}>
            티스토리의 다양한 이야기들을 만나보세요
          </p>
        </div>

        <div className={classes.topSectionWrapTag}>
          <div>라이프</div>
          <div>여행.맛집</div>
          <div>문화.연예</div>
          <div>IT</div>
          <div>스포츠</div>
          <div>시사</div>
        </div>
      </section>
      <section className={classes.storyMidSection}>
        <StoryBlog className={classes.storyBlog} />
        <StoryBlog className={classes.storyBlog} />
        <StoryBlog className={classes.storyBlog} />
      </section>
      <section className={classes.storyWrapper}>
        <div className={classes.bottomItemBox}>
          <div className={classes.ItemBoxStart}>
            <div>생활 정보</div>
            <div>13분 전</div>
            <div>
              공감 <label>3</label>
            </div>
          </div>

          <div className={classes.ItemBoxMid}>
            <div className={classes.ItemBoxTitle}>인터파크 티켓 바로가기</div>
            <div className={classes.ItemBoxdesc}>
              인터파크 티켓은 대한민국의 대표적인 온라인 티켓 예매 플랫폼으로,
              공연, 콘서트, 뮤지컬, 스포츠 경기, 전시회 등 다양한 이벤트 티켓을
              쉽게 예매할 수 있는 서비스를 제공합니다. 인터파크 티켓은
              사용자친..
            </div>
            <div className={classes.ItemBoxAuthor}>
              <img
                className={classes.ItemBoxAuthorImg}
                src="https://img1.daumcdn.net/thumb/C60x60/?fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F7004075%2Fattach%2F85840e4bb81d49babb1fec448f32de64"
                alt="아이템박스 저자 이미지"
              />
              <div>첵스쵸코</div>
              <div>by 첵스쵸코우유</div>
            </div>
          </div>

          <div>
            <img
              className={classes.itemBoxImg}
              src="https://img1.daumcdn.net/thumb/C256x256/?fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FXNiBl%2FbtsHRJiBlC0%2FerX02FYbsRTWyJ48CXB7o1%2Fimg.png"
              alt="아이템박스 이미지"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
