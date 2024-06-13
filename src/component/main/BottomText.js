import React from 'react';
import styles from './Main.module.css';

const BottomText = () => {
  return (
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
          <span className={styles.customSpan}>암호화 접속</span>을 사용해보세요.
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
          <span className={styles.customSpan}> 로그인 보안</span>기능으로 당신의
          정보와
          <br />
          콘텐츠를 안전하게 지키세요!
        </a>
      </p>
    </div>
  );
};

export default BottomText;
