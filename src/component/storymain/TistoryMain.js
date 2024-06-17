import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TistoryMain.module.css";
import { storyMainImages } from "./StoryMainImagesDummy";

const TistoryMain = () => {
  const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className={`${styles.arrow} ${styles.prev}`}>
      {"◀"}
    </button>
  );

  const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className={`${styles.arrow} ${styles.next}`}>
      {"▶"}
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    draggable: false,
  };

  return (
    <div className="App">
      <div className="header">
        <Slider {...settings}>
          {storyMainImages.map((image, index) => (
            <div key={index}>
              <div className={styles.ImageContainer}>
                <img
                  src={image.src}
                  alt={`Slide ${index}`}
                  className={styles.image}
                />
                <div className={styles.CustomContainer}>
                  <h1 className={styles.title}>
                    <div className={styles.line}>{image.title1}</div>
                    <div className={styles.line}>{image.title2}</div>
                  </h1>
                  <p className={styles.description}>{image.description}</p>
                  <a href={image.link}>
                    <button className={styles.buttonTop}>
                      {image.buttonLabel}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div>
          <img
            src="https://t1.daumcdn.net/tistory_admin/static/top/pc/img_light.png"
            alt="244222222"
            className={styles.imageNo}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.wrapTit}>
          <strong className={styles.titSection}>
            이 놀라운 사이트들이
            <br />
            <em>
              모두
              <span className={styles.txtDa}>
                <img
                  src="https://t1.daumcdn.net/tistory_admin/static/top/pc/txt_da.png"
                  alt=""
                />
              </span>
              티스토리
            </em>
            라는 사실
          </strong>
          <p className={styles.descSection}>
            티스토리는 그저 공간일 뿐이에요. 그 공간에 무슨일이 일어날지는
            아무도 상상할 수 없죠.
          </p>
          <div className={styles.slider}>
            <div className={styles.slideRow}>
              <div className={styles.slideContainer}>
                <a href="https://hotel990.com/" className={styles.banner_link}>
                  <img
                    src="https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F99A81B3C5BB2C6EF2C9883"
                    alt=""
                    className={styles.banner_image}
                  />
                </a>
                <a
                  href="https://leeheehoon.tistory.com/"
                  className={styles.banner_link}
                >
                  <img
                    src="https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fassets%2Fpromotions%2F72a26c24396048fa9fb668442021a18b"
                    alt=""
                    className={styles.banner_image}
                  />
                </a>
              </div>
            </div>
            <div className={styles.slideRow}>
              <div className={styles.slideContainer}>
                <a
                  href="https://hygphoto.tistory.com/"
                  className={styles.banner_link}
                >
                  <img
                    src="https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F99D6CF405BB2C6B824A969"
                    alt=""
                    className={styles.banner_image}
                  />
                </a>
                <a
                  href="https://so-oh.tistory.com/category"
                  className={styles.banner_link}
                >
                  <img
                    src="https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F99368F335BB2C64F29335D"
                    alt=""
                    className={styles.banner_image}
                  />
                </a>
              </div>
              {/* <a
                href="https://mistyfriday.kr/#google_vignette"
                className={styles.banner_link}
              >
                <img
                  src="https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F996CC03C5BB2C66823DA6C"
                  alt=""
                  className={styles.banner_image}
                />
                <p className={styles.banner_hover_text}>
                  마우스를 올리면 나타나는 텍스트
                </p>
              </a> */}
            </div>
          </div>
          <div className={styles.sponsorContainer}>
            <div className={styles.sponsorImages}>
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
        {/* <div className={styles.section2}></div>
<div className={styles.section3}></div>
<div className={styles.section4}></div> */}
        <div className={styles.section5}>
          <h5 className={styles.customH5}>더 잘 쓰고 싶어요?</h5>
          <p>
            <a href="https://notice.tistory.com/1797">
              당신의 티스토리에 다양한&nbsp;
              <span className={styles.customSpan}>플러그인</span>을 <br />
              사용할 수 있어요.
            </a>
          </p>
          <p>
            <a href="https://notice.tistory.com/2444">
              사이트 보안을 위해 더 안전한
              <br />
              <span className={styles.customSpan}>암호화 접속</span>을
              사용해보세요.
            </a>
          </p>
          <p>
            <a href="https://notice.tistory.com/2400">
              콘텐츠를 고정된 메뉴로 유지하고 싶다면
              <br />
              <span className={styles.customSpan}>페이지</span>를 이용해보세요.
            </a>
          </p>
          <p>
            <a href="https://notice.tistory.com/1784">
              나만의 <span className={styles.customSpan}> 도메인</span>을
              연결해보세요.
              <br />
              당신의 티스토리에 엣지가 생길거예요.
            </a>
          </p>
          <p className={styles.customParagraph}>
            <a href="https://notice.tistory.com/2384">
              <span className={styles.customSpan}> 로그인 보안</span>기능으로
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
