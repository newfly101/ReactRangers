import ForumStore from "./ForumStore";
import AuthStore from "./AuthStore";


const stores = () => ({
    // 추가되는 store가 있으면 여기에 입력하기
    authStore: AuthStore,
    forumStore: ForumStore,

});


export default stores;