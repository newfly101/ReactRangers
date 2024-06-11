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
      title1: "'응원하기' 로 소통하며",
      title2: '추가 수익을 올리세요',
      description:
        '창작 활동을 직접적으로 지원하는 새로운 수익 프로그램이 시작됩니다.',
      link: 'https://notice.tistory.com/2652?t_src=tistory_pc_topbanner',
    },
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fsection%2Foc%2Ffd708e84887d4dff9da3cf2a4374e50e',
      buttonLabel: '자세히 보기',
      title1: "'스토리 크리에이터'",
      title2: '제도를 소개합니다.',
      description: '스토리에서 특정 분야에 전문성 있는 창작자를 지원해 드려요.',
      link: 'https://storyhome.kakao.com/storycreator/?t_src=tistory_pc_topbanner',
    },
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fsection%2Foc%2F3b837b34cc814c7b9b3a12f772e2441f',
      buttonLabel: '자세히 보기',
      title1: 'Story로 뭉쳐',
      title2: '더 넓고 깊어집니다',
      description:
        '티스토리가 브런치스토리, 카카오스토리와 함께 Story로 새롭게 출발합니다.',
      link: 'https://notice.tistory.com/2637',
    },
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fsection%2Foc%2Ff7ba106243774ba6a8cd65419b3f6d17',
      buttonLabel: '자세히 보기',
      title1: '티스토리 모바일홈이',
      title2: '새로워졌어요',
      description:
        " ' 오늘의 이슈' 부터 ' 주목받는 블로그' 까지 새로운 모바일홈에서 살펴보세요.",
      link: 'https://notice.tistory.com/2635',
    },
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fsection%2Foc%2Feaa6512fa207497e8a88e6d70fd5aa1b',
      buttonLabel: '자세히 보기',
      title1: '당신의 이야기가',
      title2: '값진 수익이 됩니다.',
      description:
        '심사부터 광고 설정, 수익 확인까지 티스토리에서 바로 할 수 있어요.',
      link: 'https://notice.tistory.com/2572',
    },
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fsection%2Foc%2F058ac743cf2640fb885bd1f9e9635ab2',
      buttonLabel: '자세히 보기',
      title1: '이제부터 티스토리를',
      title2: '카카오계정으로 이용해주세요.',
      description: '',
      link: 'https://notice.tistory.com/2553',
    },
    {
      src: 'https://img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fsection%2Foc%2F8532fb82eed84069a36fa0f05170557c',
      buttonLabel: '자세히 보기',
      title1: '티스토리 앱 2.0',
      title2: '업데이트',
      description:
        '모바일에서도 편리한 블로그 관리를 위해 티스토리 앱이 새 옷을 입었습니다.',
      link: 'https://notice.tistory.com/2523',
    },
  ];

  const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className={`${styles.arrow} ${styles.prev}`}>
      {'◀'}
    </button>
  );

  const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className={`${styles.arrow} ${styles.next}`}>
      {'▶'}
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
          {images.map((image, index) => (
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
      <div className="content">
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
            <div className={styles.slideContainer}>
              <a href="https://hotel990.com/" className={styles.banner_link}>
                <img
                  src="https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F99A81B3C5BB2C6EF2C9883"
                  alt=""
                  className={styles.banner_image}
                />
                <p className={styles.banner_hover_text}>
                  마우스를 올리면 나타나는 텍스트
                </p>
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
                <p className={styles.banner_hover_text}>
                  마우스를 올리면 나타나는 텍스트
                </p>
              </a>
              <a
                href="https://hygphoto.tistory.com/"
                className={styles.banner_link}
              >
                <img
                  src="https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F99D6CF405BB2C6B824A969"
                  alt=""
                  className={styles.banner_image}
                />
                <p className={styles.banner_hover_text}>
                  마우스를 올리면 나타나는 텍스트
                </p>
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
                <p className={styles.banner_hover_text}>
                  마우스를 올리면 나타나는 텍스트
                </p>
              </a>
              <a
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
              </a>
            </div>
            <button class="prevButton">이전</button>
            <button class="nextButton">다음</button>
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
        <div className={styles.section2}>
          <h2>Section 2</h2>
          <p>제일 어려운거</p>
        </div>
        <div className={styles.section3}>
          <h2>Section 3</h2>
          <p>이미지4 애니교차2</p>
        </div>
        <div className={styles.section4}>
          <h2>Section 4</h2>
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
