import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./TistoryMain.module.css";
import StoryMainHeader from "./StoryMainHeader";

const TistoryMain = () => {
  return (
    <div className="App">
      <div className="header">
        <StoryMainHeader />
        <div>
          <img
            src="https://t1.daumcdn.net/tistory_admin/static/top/pc/img_light.png"
            alt="TistoryLight"
            className={classes.tistoryLight}
          />
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.wrapTit}>
          <strong className={classes.titSection}>
            이 놀라운 사이트들이
            <br />
            <em>
              모두
              <span className={classes.txtDa}>
                <img
                  src="https://t1.daumcdn.net/tistory_admin/static/top/pc/txt_da.png"
                  alt=""
                />
              </span>
              티스토리
            </em>
            라는 사실
          </strong>
          <p className={classes.descSection}>
            티스토리는 그저 공간일 뿐이에요. 그 공간에 무슨일이 일어날지는
            아무도 상상할 수 없죠.
          </p>
          <div className={classes.slider}>
            <div className={classes.slideRow}>
              <div className={classes.slideContainer}>
                <a href="https://hotel990.com/" className={classes.banner_link}>
                  <img
                    src="https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F99A81B3C5BB2C6EF2C9883"
                    alt=""
                    className={classes.banner_image}
                  />
                </a>
                <a
                  href="https://leeheehoon.tistory.com/"
                  className={classes.banner_link}
                >
                  <img
                    src="https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fassets%2Fpromotions%2F72a26c24396048fa9fb668442021a18b"
                    alt=""
                    className={classes.banner_image}
                  />
                </a>
              </div>
            </div>
            <div className={classes.slideRow}>
              <div className={classes.slideContainer}>
                <a
                  href="https://hygphoto.tistory.com/"
                  className={classes.banner_link}
                >
                  <img
                    src="https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F99D6CF405BB2C6B824A969"
                    alt=""
                    className={classes.banner_image}
                  />
                </a>
                <a
                  href="https://so-oh.tistory.com/category"
                  className={classes.banner_link}
                >
                  <img
                    src="https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F99368F335BB2C64F29335D"
                    alt=""
                    className={classes.banner_image}
                  />
                </a>
              </div>
              {/* <a
                href="https://mistyfriday.kr/#google_vignette"
                className={classes.banner_link}
              >
                <img
                  src="https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F996CC03C5BB2C66823DA6C"
                  alt=""
                  className={classes.banner_image}
                />
                <p className={classes.banner_hover_text}>
                  마우스를 올리면 나타나는 텍스트
                </p>
              </a> */}
            </div>
          </div>
          <div className={classes.sponsorContainer}>
            <div className={classes.sponsorImages}>
              <a href="https://thehyundaiblog.com/">
                <img
                  src="https://img1.daumcdn.net/thumb/R300x100/?scode=mtistory2&fname=http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F99A6963C5BB2C5C32AB7FC"
                  alt=""
                />
              </a>
              <a href="https://blogdegalleria.tistory.com/">
                <img
                  src="https://img1.daumcdn.net/thumb/R300x100/?scode=mtistory2&fname=http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F9989ED3B5BB2C5D3287867"
                  alt=""
                />
              </a>
              <a href="https://blog.paradise.co.kr/">
                <img
                  src="https://img1.daumcdn.net/thumb/R300x100/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F9988F0395BB2C5B11F8B83"
                  alt=""
                />
              </a>
              <a href="https://www.witheverland.com/">
                <img
                  src="https://img1.daumcdn.net/thumb/R300x100/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F991B033C5BB2C59024121E"
                  alt=""
                />
              </a>
              <a href="https://www.witheverland.com/">
                <img
                  src="https://img1.daumcdn.net/thumb/R300x100/?scode=mtistory2&fname=http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F9950223C5BB2C57B2225FF"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        {/* <div className={classes.section2}></div>
<div className={classes.section3}></div>
<div className={classes.section4}></div> */}
        <div className={classes.section5}>
          <h5 className={classes.customH5}>더 잘 쓰고 싶어요?</h5>
          <p>
            <a href="https://notice.tistory.com/1797">
              당신의 티스토리에 다양한&nbsp;
              <span className={classes.customSpan}>플러그인</span>을 <br />
              사용할 수 있어요.
            </a>
          </p>
          <p>
            <a href="https://notice.tistory.com/2444">
              사이트 보안을 위해 더 안전한
              <br />
              <span className={classes.customSpan}>암호화 접속</span>을
              사용해보세요.
            </a>
          </p>
          <p>
            <a href="https://notice.tistory.com/2400">
              콘텐츠를 고정된 메뉴로 유지하고 싶다면
              <br />
              <span className={classes.customSpan}>페이지</span>를 이용해보세요.
            </a>
          </p>
          <p>
            <a href="https://notice.tistory.com/1784">
              나만의 <span className={classes.customSpan}> 도메인</span>을
              연결해보세요.
              <br />
              당신의 티스토리에 엣지가 생길거예요.
            </a>
          </p>
          <p className={classes.customParagraph}>
            <a href="https://notice.tistory.com/2384">
              <span className={classes.customSpan}> 로그인 보안</span>기능으로
              당신의 정보와
              <br />
              콘텐츠를 안전하게 지키세요!
            </a>
          </p>
        </div>
      </div>
      {/* <Sponsor />
      <Bottom /> */}
    </div>
  );
};

export default TistoryMain;
