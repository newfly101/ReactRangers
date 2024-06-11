# ReactRangers
슈퍼코딩 부트캠프02팀, 클론코딩 1차 프로젝트

## 배포 페이지
[netlify 배포 링크](https://reactranger.netlify.app/)

### 배포 상태 체크
2024-06-10 (월요일) v0.2.1-demo 버전 배포
2024-06-12 (수요일) v0.2.2-demo 버전 배포

## 1. 프로젝트 환경 동일화 작업

1) project pull 받기
2) `npm install` // 라이브러리 설치 (node_modules는 각자 알아서 설치 해야 함)
3) 본인이 commit한 파일은 오류가 없는! 파일만 commit하기
4) 커밋한 것을 github에 push하기 전에 pull 받아서 꼭 수정사항 중에 중복되는 것이 있는지 확인하기
5) push 한 뒤에, 팀원에게 push했다고 말하고 pull받으라고 꼭 하기

* git hub commit/push에 부담감이 있으시면, branch를 만들고 진행해도 괜찮습니다.

### 추가로 쓸 말이 있으시면 자주 수정해서, commit 해주세용

### App.js 에 
`<Route path="/forum" element={<ForumMain />} />`
로 추가하고자하는 path='url' 와 element=`classJs` 를 선언해주고

### Navigation.js 에
각 페이지로 이동하는 `<a>` 태그에 App.js에 작성한 url 추가해주시면 페이지 연동이 됩니다.

