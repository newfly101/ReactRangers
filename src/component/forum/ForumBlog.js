import React from 'react';
import classes from './ForumBlog.module.css';

const ForumBlog = () => {
    const img = `https://t1.daumcdn.net/tistory_admin/static/top/pc/photo_skin03.jpg`;
    const url = "https://www.tistory.com/community/forum/entries/tip.json";

    const object = {
        "status": 200, "desc": "OK", "data": {
            "entries": [{
                "id": 304124,
                "title": "트래픽 폭락 사태의 원인  'AI알고리즘 업데이트'",
                "viewCount": 116,
                "commentCount": 7,
                "registered": "2024.06.08 16:55",
                "summary": "최근 구글 알고리즘에 AI가 탑재되고 전세계 웹사이트 대부분 -80% 트래픽 소실을 겪고 있습니다. 여기서 한 가지 짚고 넘어가야할 것이 AI 검색이랑 AI 알고리즘 차이점 입니다. AI검색은 GPT, CoPilot, Gemini처럼 챗봇 기능으로 정보를 찾는 기능이고, 미국에서는 구글 검색시 상단에 AI가 정보를 요약해 제공 중이며 하단에 일반적인 검색 결과가 따라옵니다. 네이버도 마찬가지로 cue도 신청자 대상으로 질문형 검색어 입력시 AI가 요약해",
                "content": "최근 구글 알고리즘에 AI가 탑재되고 전세계 웹사이트 대부분 -80% 트래픽 소실을 겪고 있습니다. \r\n\r\n여기서 한 가지 짚고 넘어가야할 것이 AI 검색이랑 AI 알고리즘 차이점 입니다. \r\n\r\nAI검색은 GPT, CoPilot, Gemini처럼 챗봇 기능으로 정보를 찾는 기능이고, 미국에서는 구글 검색시 상단에 AI가 정보를 요약해 제공 중이며 하단에 일반적인 검색 결과가 따라옵니다. 네이버도 마찬가지로 cue도 신청자 대상으로 질문형 검색어 입력시 AI가 요약해 제공 후 아래 부분에 일반적인 검색 결과가 나옵니다.\r\n\r\nAI알고리즘은 구글 알고리즘에 AI가 추가된 것입니다. 최근 웹사이트 대부분이 -80%트래픽 감소를 겪고 있는데  알고리즘 자체에 ai가 들어있어 검색 의도를 파악하고, 컨텐츠 내용과 구성까지 파악해 검색결과를 제공합니다. 이게 무슨 말이냐면 예전에 키워드로 검색순위를 노리던 시절은 옛날 이야기가 되었다는 것입니다. \r\n\r\nLLM(언어처리모델)을 통해 검색 의도에 정확히 맞는 결과값만 나오기 때문에 그동안 키워드로 세팅된 검색순위가 폭락했죠. 타겟 키워드 잡고 작성된 컨텐츠는 대부분 뒤로 밀렸을 것입니다. (중요한건 이 방식이 전통 SEO 기본이라 대부분 페이지가 걸림. + 블로그 포함 Publisher 타겟 검색 순위 강등 조치, AI 출처 확보 시 신뢰성 이슈로 개인매체 저평가)\r\n\r\n전 세계적인 현상이며 지금 이 상황은 전통적인 검색엔진최적화(SEO) 기술이 더 이상 통하지 않다는 점을 시사합니다. \r\nhttps://www.bbc.com/korean/articles/c166p510n79o\r\n\r\n작년 10월부터 계단식으로 트래픽이 빠지고 있는데요, 알고리즘 작동 원리 자체가 변경된 것이기 때문에 테크니컬 SEO도 예전만큼 효과를 거두기 어려운 현실입니다. 현재 최선은 일단 상황을 지켜보는 것이네요. ",
                "category": "블로그 운영팁",
                "images": [],
                "userId": 1185164,
                "userName": "브랜던의 지식공장",
                "userDefaultUrl": "https://infiniteinformation.tistory.com",
                "userImage": "https://tistory1.daumcdn.net/tistory/2824660/attach/44523e9670224dafb46a227283f083fd",
                "status": "normal"
            }, {
                "id": 304026,
                "title": "AI 검색이라는 환각에 빠져서 실제를 못보는 것도 ",
                "viewCount": 27,
                "commentCount": 4,
                "registered": "2024.06.07 16:22",
                "summary": "어떻게 보면 인간 오류죠.",
                "content": "어떻게 보면 인간 오류죠. ",
                "category": "블로그 운영팁",
                "images": [],
                "userId": 86533,
                "userName": "티스토리탈출",
                "userDefaultUrl": "https://exit-out.tistory.com",
                "userImage": "https://t1.daumcdn.net/tistory_admin/static/manage/images/r3/default_S.png",
                "status": "normal"
            }, {
                "id": 304012,
                "title": "티스토리 항상 떠있는 링크버튼에 효과입히기",
                "viewCount": 38,
                "commentCount": 1,
                "registered": "2024.06.07 13:03",
                "summary": "항상 떠있는 버튼으로 애드센스의 수익을 더욱 높여보세요. 버튼을 방문자가 더욱 잘 인식할 수 있는 테두리색상을 적용했으니까 살펴보고 맘에 드시면 블로그에 적용해볼 수 있어요. 아래의 주소에 가시면 어떤 버튼인지 확인가능합니다. https://commagun.tistory.com/2110",
                "content": "항상 떠있는 버튼으로 애드센스의 수익을 더욱 높여보세요.\r\n버튼을 방문자가 더욱 잘 인식할 수 있는 테두리색상을 적용했으니까\r\n살펴보고 맘에 드시면 블로그에 적용해볼 수 있어요.\r\n아래의 주소에 가시면 어떤 버튼인지 확인가능합니다.\r\nhttps://commagun.tistory.com/2110",
                "category": "블로그 운영팁",
                "images": [],
                "userId": 561619,
                "userName": "콤마군",
                "userDefaultUrl": "https://commagun.tistory.com",
                "userImage": "https://tistory1.daumcdn.net/tistory/714726/attach/5a31e532185d49c49dda273e1ea30894",
                "status": "normal"
            }, {
                "id": 304009,
                "title": "AI 검색 Gemini 놀라울 정도로 정확해지네요",
                "viewCount": 92,
                "commentCount": 0,
                "registered": "2024.06.07 12:13",
                "summary": "AI검색이 부정확하고, 창작자들의 지적재산권을 침해한다고 주장하시며 ONLY 환각현상만 주장하시는 세컨ID(본캐확인)가 있습니다. 오늘 Gemini로 한국 영화 역대 흥행을 물어봤는데 놀랍네요. 한국영화 역대 흥행 5위, 6위가 어벤저스 엔드게임, 아바타인데 이 점까지 놓치지 않고 '5위와 6위는 외국 영화이지만, 한국에서 매우 흥행하여 포함했습니다.'라고 밝혀줍니다. Gemini 결과 : https://g.co/gemini/share/78c7e92aa",
                "content": "AI검색이 부정확하고, 창작자들의 지적재산권을 침해한다고 주장하시며 ONLY 환각현상만 주장하시는 세컨ID(본캐확인)가 있습니다.\r\n\r\n오늘 Gemini로 한국 영화 역대 흥행을 물어봤는데 놀랍네요. 한국영화 역대 흥행 5위, 6위가 어벤저스 엔드게임, 아바타인데 이 점까지 놓치지 않고 '5위와 6위는 외국 영화이지만, 한국에서 매우 흥행하여 포함했습니다.'라고 밝혀줍니다. \r\n\r\nGemini 결과 : https://g.co/gemini/share/78c7e92aa49a\r\n(Gemini 무료와 유료버전 간 결과값 차이로 보면 유료에 리소스를 더 투입하는 듯)\r\n\r\n현재 미국에서 Google로 검색 시 AI 검색결과 동시 표기하고 있습니다. 3.3억 미국 인구가 세계에서 가장 많은 정보를 가진 영어로 검색하고 있다보니 데이터가 정확해지는 것으로 보이며, 인구 1/6인 한국에 런칭 시 여기서 쌓은 데이터로 한국어도 빠른 시간 내로 정확도를 갖출 것으로 보입니다. \r\n\r\n정확도를 위해 블로거 등 개인 publisher는 데이터에서 열외시키는 것으로 보이며, 포맷 상관 없이 공식 출처 데이터 위주로 수집하는 것으로 보입니다. 이제까지  '공식 출처 내용 ->블로거가 편집 -> 검색노출'이었다면 AI가 도입됨으로써 '블로거가 편집' 부분이 '(AI가 공식 출처 위주로) 편집'으로 변화한 것입니다. \r\n\r\n예: '버스 시간표->(블로거)가 버스회사 시간표 확인 후 작성 -> 검색결과'에서 '(AI)가 공인 출처위주로 찾아 취합 후 결과 전달\r\n\r\n한마디로 블로거가 하던 일을 AI가 대체한다는 소리고 앞으로는 광고 포맷도 AI검색 결과에 맞게 AI가 생성하는 초 타겟형 광고로 바뀔 가능성이 높습니다. (실제로 글로벌 광고업계 AI 전문가 채용 중) \r\nhttps://economist.co.kr/article/view/ecn202305030019\r\n앞으로는 정보성 블로그는 점진적으로 AI 검색결과로 대체되고, 개인적인 메세지 중심 매체로 바뀔 듯 합니다. (IG사진,BG블로",
                "category": "블로그 운영팁",
                "images": [],
                "userId": 1185164,
                "userName": "브랜던의 지식공장",
                "userDefaultUrl": "https://infiniteinformation.tistory.com",
                "userImage": "https://tistory1.daumcdn.net/tistory/2824660/attach/44523e9670224dafb46a227283f083fd",
                "status": "normal"
            }, {
                "id": 303858,
                "title": "대체적으로 *** 망한다고 하는사람들은...",
                "viewCount": 76,
                "commentCount": 2,
                "registered": "2024.06.05 16:39",
                "summary": "해당 분야에서 하위권에 있는 사람들이 하는소리니 무시해도 됩니다. 어짜피 그사람들은 “나는 열심히 해도 안되니 너도 하지마” 라고 하는거라 무시하는게 좋습니다.",
                "content": "해당 분야에서 하위권에 있는 사람들이 하는소리니 무시해도 됩니다.\r\n어짜피 그사람들은 \"나는 열심히 해도 안되니 너도 하지마\" 라고 하는거라 무시하는게 좋습니다.\r\n",
                "category": "블로그 운영팁",
                "images": [],
                "userId": 6657092,
                "userName": "ゼン",
                "userDefaultUrl": "https://zenn-dev.tistory.com",
                "userImage": "https://tistory1.daumcdn.net/tistory/7043250/attach/0c36ddbc02b54b29a726fd34ee17fb19",
                "status": "normal"
            }, {
                "id": 303856,
                "title": "블로그가 끝났다 뭐 영상이 대세다 그렇기는 하지만",
                "viewCount": 58,
                "commentCount": 2,
                "registered": "2024.06.05 16:19",
                "summary": "저는 아직까지 블로그 보는 사람들은 본다고 생각합니다. 또한, 신문기사도 디지털 시대에 인터넷 기사가 나오고 망한다고 했는데 아직까지 유지되고 있습니다. 비록 수요는 줄어들겠지만, 꾸준히 계속 한다면 또 다른 기회가 생길 것이라 생각합니다.",
                "content": "저는 아직까지 블로그 보는 사람들은 본다고 생각합니다.\r\n또한, 신문기사도 디지털 시대에 인터넷 기사가 나오고 망한다고 했는데 아직까지 유지되고 있습니다.\r\n비록 수요는 줄어들겠지만, 꾸준히 계속 한다면 또 다른 기회가 생길 것이라 생각합니다.",
                "category": "블로그 운영팁",
                "images": [],
                "userId": 6162360,
                "userName": "Edward_S",
                "userDefaultUrl": "https://news8253.tistory.com",
                "userImage": "https://tistory1.daumcdn.net/tistory/6306155/attach/b6417ec3e9be4cd6ac34b6c1964077b3",
                "status": "normal"
            }, {
                "id": 303855,
                "title": "블로그 수익은 월초 포스팅에 따라 결정됩니다. ",
                "viewCount": 36,
                "commentCount": 0,
                "registered": "2024.06.05 16:06",
                "summary": "월초에 광고비를 많이 지출하기 때문에 블로그 수익은 월초에 포스팅을 많이 할수록 좋습니다. https://hola0829.tistory.com/entry/%ED%8B%B0%EC%8A%A4%ED%86%A0%EB%A6%AC-%EC%95%A0%EB%93%9C%EC%84%BC%EC%8A%A4-%EC%82%AC%EC%9D%B4%EB%93%9C%EB%B0%94-%EA%B4%91%EA%B3%A0-%EC%84%A4%EC%B9%98-%EB%B0%A9%EB%B2%95-%",
                "content": "월초에 광고비를 많이 지출하기 때문에 블로그 수익은 월초에 포스팅을 많이 할수록 좋습니다. https://hola0829.tistory.com/entry/%ED%8B%B0%EC%8A%A4%ED%86%A0%EB%A6%AC-%EC%95%A0%EB%93%9C%EC%84%BC%EC%8A%A4-%EC%82%AC%EC%9D%B4%EB%93%9C%EB%B0%94-%EA%B4%91%EA%B3%A0-%EC%84%A4%EC%B9%98-%EB%B0%A9%EB%B2%95-%EA%B4%91%EA%B3%A0-%EC%84%A4%EC%A0%95-%EA%B4%91%EA%B3%A0-%EC%88%98%EC%9D%B5-%EA%BF%80%ED%8C%81",
                "category": "블로그 운영팁",
                "images": [],
                "userId": 1231432,
                "userName": "여마로드",
                "userDefaultUrl": "https://hola0829.tistory.com",
                "userImage": "https://tistory1.daumcdn.net/tistory/1648332/attach/f0a95fde97794121806a8cea7ebfdb06",
                "status": "normal"
            }, {
                "id": 303718,
                "title": "블로그는 끝난게 맞는 것 같습니다",
                "viewCount": 338,
                "commentCount": 17,
                "registered": "2024.06.04 12:11",
                "summary": "사람들이 글이 아닌 짧은 쇼츠 영상으로 정보를 얻는 시대로 바뀌었습니다. 블로그를 하든 뭘 하든 결국 목적은 수익인데 인스타그램 릴스 수익화 얼마씩 나오는지 아세요? 틱톡 라이트 얼마씩 주는지 아세요? 인스타그램 릴스와 틱톡이 서로 경쟁하며 사용자들에게 돈을 퍼주면서 점유율을 올리려고 경쟁하고 있습니다. 이쪽은 흔히 말해 아직 일한 만큼 받는 영역입니다. 초기 단계라서 아직은요. 물론 조회수가 많이 나와야 돈을 주긴 하죠. 물론 틱톡 성격상 개인 정보를",
                "content": "사람들이 글이 아닌 짧은 쇼츠 영상으로 정보를 얻는 시대로 바뀌었습니다.\r\n\r\n블로그를 하든 뭘 하든 결국 목적은 수익인데\r\n인스타그램 릴스 수익화 얼마씩 나오는지 아세요?\r\n틱톡 라이트 얼마씩 주는지 아세요?\r\n\r\n인스타그램 릴스와 틱톡이 서로 경쟁하며 사용자들에게 돈을 퍼주면서 점유율을 올리려고 경쟁하고 있습니다. 이쪽은 흔히 말해 아직 일한 만큼 받는 영역입니다. 초기 단계라서 아직은요. \r\n\r\n물론 조회수가 많이 나와야 돈을 주긴 하죠.\r\n물론 틱톡 성격상 개인 정보를 중국 정부에 다 털려야 돈을 주긴 하죠.\r\n\r\n시대가 변했습니다. 글로 정보를 얻는 시대가 아니라 짧은 영상으로 정보를 얻는 시대가 되었습니다.\r\n아직 글로만 정보를 얻을 수 있는 영역이 있겠지만 과연 뭐가 있을까요?\r\n\r\n다시 글로 정보를 얻는 시대가 올까요? 오긴 올 수야 있겠죠. 다른 형태로 변해서 오겠지만.\r\n\r\n블로그를 하는 이유가 \r\n1. 자신의 회사, 브랜드를 홍보하거나\r\n2. 영상으로 할 수 있는 컨텐츠가 없다거나 \r\n3. 부업으로 본업 외에 나를 덜 노출시키며 수익을 얻을 수 있는 창구를 찾아서 하게되는건데\r\n\r\n저도 애드센스 100달러만 채우고 블로그 접으렵니다.\r\n제 관심사에 대한 관심을 유지하려고 계속 할 고민을 하고 있는데 아무래도 안될 것 같네요",
                "category": "블로그 운영팁",
                "images": [],
                "userId": 5029425,
                "userName": "패트릭　",
                "userDefaultUrl": "https://trikkypat.tistory.com",
                "userImage": "https://tistory1.daumcdn.net/tistory/4898063/attach/3088ef62e7ca4a2eb3ad3125c533028b",
                "status": "normal"
            }, {
                "id": 303714,
                "title": "방문자 수가 많다고 수익이 많은 것은 아니네요. ",
                "viewCount": 68,
                "commentCount": 4,
                "registered": "2024.06.04 11:41",
                "summary": "방문자 수가 많다고 수익과 바로 연결되지는 않네요. 방문자가 가장 많은 날보다 거의 절반 수준의 방문자일 때 수익이 3배 이상 많은 적도 있었어요. 클릭 수도 비슷한데, 결국은 광고의 단가 때문일까요? 의견 남겨주세요~!",
                "content": "방문자 수가 많다고 수익과 바로 연결되지는 않네요. 방문자가 가장 많은 날보다 거의 절반 수준의 방문자일 때 수익이 3배 이상 많은 적도 있었어요. \r\n\r\n클릭 수도 비슷한데, 결국은 광고의 단가 때문일까요?\r\n의견 남겨주세요~! ",
                "category": "블로그 운영팁",
                "images": [],
                "userId": 4722890,
                "userName": "아이맘",
                "userDefaultUrl": "https://imom1016.tistory.com",
                "userImage": "https://tistory1.daumcdn.net/tistory/4435635/attach/b4c71c89065e4fdb9e316be6b4a71c2a",
                "status": "normal"
            }, {
                "id": 303567,
                "title": "키워드의 중요성...",
                "viewCount": 49,
                "commentCount": 0,
                "registered": "2024.06.03 10:41",
                "summary": "진짜 키워드가 중요하다는 건 무시했었는데... 키워드 하나 잘 잡아서 썻더니 일 방문자가 250명.................",
                "content": "진짜 키워드가 중요하다는 건 무시했었는데...\r\n키워드 하나 잘 잡아서 썻더니 일 방문자가 250명.................",
                "category": "블로그 운영팁",
                "images": [{
                    "url": "https://tistory1.daumcdn.net/tistory/forum/a2fa9e3c-3922-4ff1-b70e-05c0d17a0f5d",
                    "size": 34654,
                    "label": "캡처처.PNG"
                }],
                "userId": 5703388,
                "userName": "건행 라이프",
                "userDefaultUrl": "https://ohhealthylife.tistory.com",
                "userImage": "https://tistory1.daumcdn.net/tistory/6683921/attach/3d36bf880ca84b42b20484d44cf236a6",
                "status": "normal"
            }], "hasPrev": true, "hasNext": false
        }
    }

    console.log(object);

    return (
        <div className={classes.forumBlogBox}>
            <div className={classes.forumBlogTitle}>
                <div className={classes.forumBlogTap}>
                    <button>전체</button>
                    <button>블로그 소개</button>
                    <button>블로그 운영팁</button>
                    <button>스킨</button>
                    <button>질문/기타</button>
                </div>
                <div className={classes.forumWriteBtn}>
                    <button>글쓰기</button>
                </div>
            </div>
            <div className={classes.forumBlogList}>
                {/*가로 3개 colum*/}
                <div className={classes.forumImgBox}>
                    <img src={img} alt="blogimg"/>
                </div>
                <div className={classes.forumBlogTitleBox}>
                    {/*가로 2개 space-between */}
                    <div className={classes.forumContext}>
                        {/* 세로 3개 블로그 / 제목 / 내용 */}
                        <div className={classes.forumContext}>
                            브랜던의 지식공장 ㆍ 2024.06.09 16:33 ㆍ 블로그 운영팁
                        </div>
                        <div className={classes.forumContextTitle}>
                            트래픽 폭락 사태의 원인 'AI알고리즘 업데이트'
                        </div>
                        <div className={classes.forumContext}>
                            최근 구글 알고리즘에 AI가 탑재되고 전세계 웹사이트 대부분 -80% 트래픽 소실을 겪고 있습니다.
                            여기서 한 가지 짚고 넘어가야할 것이 AI 검색이랑 AI 알고리즘 차이점 입니다.
                        </div>
                    </div>
                    <div className={classes.forumLookUp}>조회수 110 ㆍ 댓글 5</div>
                </div>
            </div>
        </div>

    );
};

export default ForumBlog;