import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './TistoryMain.module.css';

const TistoryMain = () => {
  const images = [
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fadmin%2Fpromotion%2Fpc%2Ftop_banner%2Fsupport_banner',
      buttonLabel: '자세히 보기',
      title: '이미지 설명 1',
      description: '이미지 설명 1의 설명',
      link: 'https://notice.tistory.com/2652?t_src=tistory_pc_topbanner',
    },
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fsection%2Foc%2Ffd708e84887d4dff9da3cf2a4374e50e',
      buttonLabel: '자세히 보기',
      title: '이미지 설명 1',
      description: '이미지 설명 1의 설명',
      link: 'https://storyhome.kakao.com/storycreator/?t_src=tistory_pc_topbanner',
    },
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fsection%2Foc%2F3b837b34cc814c7b9b3a12f772e2441f',
      buttonLabel: '자세히 보기',
      title: '이미지 설명 1',
      description: '이미지 설명 1의 설명',
      link: 'https://notice.tistory.com/2637',
    },
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fsection%2Foc%2Ff7ba106243774ba6a8cd65419b3f6d17',
      buttonLabel: '자세히 보기',
      title: '이미지 설명 1',
      description: '이미지 설명 1의 설명',
      link: 'https://notice.tistory.com/2635',
    },
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fsection%2Foc%2Feaa6512fa207497e8a88e6d70fd5aa1b',
      buttonLabel: '자세히 보기',
      title: '이미지 설명 1',
      description: '이미지 설명 1의 설명',
      link: 'https://notice.tistory.com/2572',
    },
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fsection%2Foc%2F058ac743cf2640fb885bd1f9e9635ab2',
      buttonLabel: '자세히 보기',
      title: '이미지 설명 1',
      description: '이미지 설명 1의 설명',
      link: 'https://notice.tistory.com/2553',
    },
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fsection%2Foc%2F8532fb82eed84069a36fa0f05170557c',
      buttonLabel: '자세히 보기',
      title: '이미지 설명 1',
      description: '이미지 설명 1의 설명',
      link: 'https://notice.tistory.com/2523',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="App">
      <div className="header">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className={styles.ImageContainer}>
                <img
                  src={image.src}
                  alt={`Slide ${index}`}
                  className={styles.image}
                />

                <div className={styles.CustomContainer}>
                  <h1 className={styles.text}>{image.title}</h1>
                  <p className={styles.description}>{image.description}</p>
                  <a href={image.link}>
                    <button className={styles.button}>
                      {image.buttonLabel}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="content">
        <div className="section1">
          <h2>Section 1</h2>
          <p>탑메인</p>
        </div>
        <div className="section">
          <h2>Section 2</h2>
          <p>이미지4</p>
        </div>
        <div className="section">
          <h2>Section 3</h2>
          <p>제일 어려운거</p>
        </div>
        <div className="section">
          <h2>Section 4</h2>
          <p>이미지4 애니교차2</p>
        </div>
        <div className="section">
          <h2>Section 5</h2>
          <p>이미지2</p>
        </div>

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
          <p>
            <a href="https://notice.tistory.com/2384">
              <span className={styles.customSpan}> 로그인 보안</span>기능으로
              당신의 정보와
              <br />
              콘텐츠를 안전하게 지키세요!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TistoryMain;
