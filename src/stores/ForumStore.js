import {makeAutoObservable, makeObservable} from "mobx";
import {
    blogEntryData,
    blogEtcData,
    blogIntroData,
    blogSkinData,
    blogTipData
} from "../component/forum/ForumTapDummyData";

export const forumData = {
    all : blogEntryData,
    etc : blogEtcData,
    intro : blogIntroData,
    skin : blogSkinData,
    tip : blogTipData,
}
export const tabs = [
    { key: 'all', label: '전체' },
    { key: 'intro', label: '블로그 소개' },
    { key: 'tip', label: '블로그 운영팁' },
    { key: 'skin', label: '스킨' },
    { key: 'etc', label: '질문/기타' },
]

const ForumStore = () => {

    return makeObservable({
        constructor() {
            makeAutoObservable(this);
        },
        forumDummy : forumData.all,
        forumUrl : 'all',
        forumTap : Object.assign([], tabs),

        changeForumDummy(data) {
            this.forumUrl = data;
            for (let key in forumData) {
                if (key === data) {
                    this.forumDummy = forumData[key];
                }
            }
            console.log("store dummy", this.forumDummy);
            console.log("store url", this.forumUrl);
        }
    });
}
export default ForumStore;
