import ForumStore from "./ForumStore";
import AuthStore from "./AuthStore";
import ForumStore2 from "./ForumStore2";
import StoryStore from "./StoryStore";
import CommonStore from "./CommonStore";
import FeedStore from "./FeedStore";
import AccountRecoveryStore from "./AccountRecoveryStore"
import PayStore from "./PayStore";


const stores = () => ({
    commonStore: CommonStore,
    // 추가되는 store가 있으면 여기에 입력하기
    authStore: AuthStore,
    forumStore: ForumStore(),
    forum2Store: new ForumStore2(),
    StoryStore: new StoryStore(),
    FeedStore: new FeedStore(),
    AccountRecovery: new AccountRecoveryStore(),
    PayStore: new PayStore()
});


export default stores;