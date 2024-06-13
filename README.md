# ReactRangers
![image](https://github.com/newfly101/ReactRangers/assets/62008619/2d3adb36-5c95-4aa4-b17e-0edc08750b9c)


# Team 소개

|김재홍|김국봉|정일문|황초희|조승환|정인학|
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
|FS DEV|FE DEV|FS DEV|FS DEV|FS DEV|FS DEV|
|![image](https://github.com/newfly101/ReactRangers/assets/62008619/c6e7016a-fb84-4651-937e-3e7e00967527)|ㅇ|![image](https://github.com/newfly101/ReactRangers/assets/62008619/0d293840-f0d6-45e5-8d03-dd89782ca79d)|![image](https://github.com/newfly101/ReactRangers/assets/62008619/ee61335f-6c18-4596-b3cb-7f98c553ead2)|![image](https://github.com/newfly101/ReactRangers/assets/62008619/14376342-0ba4-40f9-b921-3a0175d7aa60)|ㅇ|
|[newfly101](https://github.com/newfly101)|[rose_](https://github.com/ros-e2)|[KRjasoncho](https://github.com/KRjasoncho)|[chochohee](https://github.com/chochohee)|[brandysh](https://github.com/brandysh)|[inagi94](https://github.com/inagi94)|



# ReactRangers
슈퍼코딩 부트캠프02팀, 클론코딩 1차 프로젝트

목차
Ⅰ) 기술 스택
Ⅱ) 프로젝트 사용해보기
Ⅲ) 주요 기능
Ⅳ) UI/UX
Ⅴ) 프로젝트 구현 기술

#Ⅰ) 기술 스택
## 사용 언어
- 
TypeScript
Client
React V16
React Router V5
Redux
Redux-saga
Styled-components
Socket.io-client
Webpack
Server
Node.js - Express
Sequelize
Socket.io
MySQL

## 배포 페이지
[netlify 배포 링크](https://reactranger.netlify.app/)

### 배포 상태 체크
- 2024-06-10 (월요일) v0.2.1-demo 버전 배포
- 2024-06-12 (수요일) v0.2.2-demo 버전 배포

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

