import React from 'react';
import Slider from 'react-slick';
import top1 from './top1.jpg';
import top2 from './top2.png';
import top3 from './top3.png';

import styles from './TistoryMain.module.css';

const TistoryMain = () => {
  const images = [top1, top2, top3];

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
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="content">
        <div className="section">
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
