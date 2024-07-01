import React from "react";
import classes from "../css/component/Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerComm}>
      <div className={classes.innerFoot}>
        <div className={classes.contTistory}>
          <div className={classes.wrapDesc}>
            <img src="tistory.ico" alt="" className={classes.tistroryImg} />
            <span className={classes.descFooter}>
              <div className={classes.txtFooter}>
                티스토리는 카카오에서
                <em>❤</em>을 담아 만듭니다
              </div>
              <div>© Kakao Corp.</div>
            </span>
          </div>

          <div className={classes.corpInfo}>
            <div className={classes.boxInfo}>
              <div className={classes.txtInfo}>대표이사 정신아</div>
              <div className={classes.txtInfo}>
                | 사업자 등록 번호 120-81-47521
              </div>
            </div>
            <div className={classes.boxInfo}>
              <div className={classes.txtInfo}>
                통신판매업신고번호
                <a
                  href="https://www.ftc.go.kr/bizCommPopView.do"
                  className={classes.linkFooter}
                  target="_blank"
                  rel="noreferrer"
                >
                  제2015-제주아라-0032호
                </a>
              </div>
            </div>
            <div className={classes.boxInfo}>
              <div className={classes.txtInfo}>
                주소 제주특별자치도 제주시 첨단로 242(영평동)
              </div>
              <div className={classes.txtInfo}>| 호스팅사업자 (주)카카오</div>
            </div>
            <div className={classes.boxInfo}>
              <div className={classes.txtInfo}>
                고객센터 1577-3754
                <a
                  href="mailto:help.notice@kakaocorp.com"
                  className={classes.linkFooter}
                >
                  | 이메일 help.notice@kakaocorp.com
                </a>
              </div>
            </div>
          </div>
          <div className={classes.searchTistory}>
            <form
              action="//search.daum.net/search."
              target="_blank"
              role="search"
              method="get"
            >
              <input
                type="text"
                id="footerSearchinput"
                placeholder="검색어입력"
                title="검색"
                name="p"
                className={classes.inputText}
              />
              <button type="submit" className={classes.btnSearch}>
                <img src="search.svg" alt="검색" />
              </button>
            </form>
          </div>
        </div>
        <div className={classes.questionTistory}>
          <div className={classes.wrapQuestion}>
            메뉴가 궁금할 땐
            <div className={classes.listQuestion}>
              <a href="/skin" className={classes.linkTxt}>
                스킨
              </a>
              <a href="/forum" className={classes.linkTxt}>
                포럼
              </a>
              <a href="/story" className={classes.linkTxt}>
                스토리
              </a>
            </div>
          </div>
          <div className={classes.wrapQuestion}>
            사용하다 궁금할 땐
            <div className={classes.listQuestion}>
              <div className={classes.linkTxt}>스킨 가이드</div>
              <div className={classes.linkTxt}>고객센터</div>
              <div className={classes.linkTxt}>오픈 API</div>
            </div>
          </div>
          <div className={classes.wrapQuestion}>
            정책이 궁금할 땐
            <div className={classes.listQuestion}>
              <div className={classes.linkTxt}>이용약관</div>
              <div className={classes.linkTxt}>이전 이용약관</div>
              <div className={classes.linkTxt}>운영정책</div>
              <div className={classes.linkTxt}>카카오 개인정보처리방침</div>
              <div className={classes.linkTxt}>청소년보호정책</div>
              <div className={classes.linkTxt}>Email 수집거부정책</div>
            </div>
          </div>
          <div className={classes.wrapQuestion}>
            도움이 필요할 땐
            <div className={classes.listQuestion}>
              <div className={classes.linkTxt}>권리침해신고</div>
              <div className={classes.linkTxt}>상거래 피해 구제신청</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
