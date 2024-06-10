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
          <p>This is the first section.</p>
        </div>
        <div className="section">
          <h2>Section 2</h2>
          <p>This is the second section.</p>
        </div>
        <div className="section">
          <h2>Section 3</h2>
          <p>This is the third section.</p>
        </div>
        <div className="section">
          <h2>Section 4</h2>
          <p>This is the fourth section.</p>
        </div>
        <div className="section">
          <h2>Section 5</h2>
          <p>This is the fifth section.</p>
        </div>
        <div>
          <h2>더 잘 쓰고 싶어요?</h2>
        </div>
        <div className={styles.section5}>
          <p>
            당신의 티스토리에 다양한&nbsp;
            <span style={{ color: '#000000' }}>플러그인</span>을 <br />
            사용할 수 있어요.
          </p>
          <p>
            사이트 보안을 위해 더 안전한
            <br />
            <span style={{ color: '#000000' }}>암호화 접속</span>을
            사용해보세요.
          </p>
          <p>
            콘텐츠를 고정된 메뉴로 유지하고 싶다면
            <br />
            <span style={{ color: '#000000' }}>페이지</span>를 이용해보세요.
          </p>
          <p>
            나만의 <span style={{ color: '#000000' }}> 도메인</span>을
            연결해보세요.
            <br />
            당신의 티스토리에 엣지가 생길거예요.
          </p>
          <p>
            <span style={{ color: '#000000' }}> 로그인 보안</span>기능으로
            당신의 정보와
            <br />
            콘텐츠를 안전하게 지키세요!{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TistoryMain;
