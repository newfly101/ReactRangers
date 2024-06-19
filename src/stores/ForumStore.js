import {action, toJS} from "mobx";
import {
    blogEntryData,
    blogEtcData,
    blogIntroData,
    blogSkinData,
    blogTipData
} from "../component/forum/ForumTapDummyData";
import {useLocalObservable} from "mobx-react";

export const forumData = {
    all : blogEntryData,
    etc : blogEtcData,
    intro : blogIntroData,
    skin : blogSkinData,
    tip : blogTipData,
}
export const tabs = [
    { key: 'all', label: '전체', id: 0 },
    { key: 'intro', label: '블로그 소개', id: 1 },
    { key: 'tip', label: '블로그 운영팁', id: 2 },
    { key: 'skin', label: '스킨', id: 3 },
    { key: 'etc', label: '질문/기타', id: 4 },
]

const ForumStore = () => {
    const store = useLocalObservable(() => ({
        // observable state
        forumDummy : forumData.all,
        forumUrl : 'all',
        forumTapIndex : 0,
        forumTap : Object.assign([], tabs),

        // actions
        // 변수명: action(() => {
        //  store.변수명
        // })
        changeForumDummy: action((data, index) => {
            store.forumUrl = data.toString();
            store.forumDummy = forumData[data];
            store.forumTapIndex = index;
            console.log("store dummy",store.forumUrl, "index:", store.forumTapIndex, toJS(store.forumDummy));
        }),
    }));
    return store;
}
export default ForumStore;
