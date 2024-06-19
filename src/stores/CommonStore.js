import {makeAutoObservable} from "mobx";
// import {createRef} from "react";

export const PathUrl = {
    MAIN: '/',
    ADMIN: '/admin',
    STORY: '/story',
    FEED: '/feed',
    SKIN: '/skin',
    FORUM: '/forum',
    FOLLOWING: '/following',
    FOLLOWER: '/follower',
    RECOVERY_ACCOUNT: '/accountRecovery',
    CONVERT_ACCOUNT: '/convertAccount',
    NEW_ACCOUNT: '/newAccount',
    PROFILE_LAYER: '/profileLayer',
}

export const navigationTaps = [
    {key: PathUrl.FEED, label:"피드"},
    {key: PathUrl.STORY, label:"스토리"},
    {key: PathUrl.SKIN, label:"스킨"},
    {key: PathUrl.FORUM, label:"포럼"},
]

const CommonStore = () => {
    // const topRef = createRef();
    // 스크롤 최 상단으로 올리기 위한 state;
    // scrollIntoView MDN : https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

    return makeAutoObservable({
        scrolled: false,
        topRef: '/',
        navigationTaps: navigationTaps,

        // scrollToTop(location) {
        //     // topRef.current = location;
        //     console.log("current",topRef.current, "location", location);
        //     if (topRef.current) {
        //         topRef.current.scrollTo({top: 0, behavior: "smooth"});
        //         topRef.current.focus();
        //     }
        // },
        changeScrolled(state) {
            this.scrolled = state;
        },
        onClickScrollTop() {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    })
}

export default CommonStore;