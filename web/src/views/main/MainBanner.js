import React from "react";
import classes from "../../css/main/MainBanner.module.css";

const MainBanner = () => {
  const MoveToPage = (href) => {
    window.location.href = href;
  };
  return (
    <div>
      <div className={classes.section5}>
        <h5 className={classes.customH5}>더 잘 쓰고 싶어요?</h5>
        <p>
          <span
            className={classes.MainBannerPTag}
            onClick={() => MoveToPage("https://notice.tistory.com/1797")}
          >
            당신의 티스토리에 다양한&nbsp;
            <span className={classes.customSpan}>플러그인</span>을 <br />
            사용할 수 있어요.
          </span>
        </p>
        <p>
          <span
            className={classes.MainBannerPTag}
            onClick={() => MoveToPage("https://notice.tistory.com/2444")}
          >
            사이트 보안을 위해 더 안전한
            <br />
            <span className={classes.customSpan}>암호화 접속</span>을
            사용해보세요.
          </span>
        </p>
        <p>
          <span
            className={classes.MainBannerPTag}
            onClick={() => MoveToPage("https://notice.tistory.com/2400")}
          >
            콘텐츠를 고정된 메뉴로 유지하고 싶다면
            <br />
            <span className={classes.customSpan}>페이지</span>를 이용해보세요.
          </span>
        </p>
        <p>
          <span
            className={classes.MainBannerPTag}
            onClick={() => MoveToPage("https://notice.tistory.com/1784")}
          >
            나만의 <span className={classes.customSpan}> 도메인</span>을
            연결해보세요.
            <br />
            당신의 티스토리에 엣지가 생길거예요.
          </span>
        </p>
        <p>
          <span
            className={classes.MainBannerPTag}
            onClick={() => MoveToPage("https://notice.tistory.com/2384")}
          >
            <span className={classes.customSpan}> 로그인 보안</span>기능으로
            당신의 정보와
            <br />
            콘텐츠를 안전하게 지키세요!
          </span>
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
