import ForumStore from "./ForumStore";
import AuthStore from "./AuthStore";
import ForumStore2 from "./ForumStore2";


const stores = () => ({
    // 추가되는 store가 있으면 여기에 입력하기
    authStore: AuthStore,
    forumStore: ForumStore(),
    forum2Store: new ForumStore2(),
});


export default stores;