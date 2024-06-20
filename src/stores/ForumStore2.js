import {makeAutoObservable, toJS} from "mobx";

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
    { key: 'all', label: '전체', id: 0 },
    { key: 'intro', label: '블로그 소개', id: 1 },
    { key: 'tip', label: '블로그 운영팁', id: 2 },
    { key: 'skin', label: '스킨', id: 3 },
    { key: 'etc', label: '질문/기타', id: 4 },
]

export const DetailOpen = [
    {0: false},
]

export default class ForumStore2 {

    randomNumber = Number(Math.floor(Math.random() * 3)+1);

    // observable state
    forumDummy = forumData.all;
    forumUrl = 'all';
    forumTapIndex = 0;
    forumTap = Object.assign([], tabs);
    forumTopImg = `https://t1.daumcdn.net/tistory_admin/static/top/pc/bg_forum${this.randomNumber}.jpg`;

    forumDetailIndex = DetailOpen;

    constructor() {
        makeAutoObservable(this);
    }

    // actions
    // 변수명: action(() => {
    //  store.변수명
    // })
    changeForumDummy = (data, index) => {
        this.forumUrl = data.toString();
        this.forumDummy = forumData[data];
        this.forumTapIndex = index;
        console.log("store dummy",this.forumUrl, "index:", this.forumTapIndex, toJS(this.forumDummy));
    };

    addDetailOpen = (index) => {
        this.forumDetailIndex = this.forumDetailIndex.map((item) => {
            // console.log(item);
            if (item.hasOwnProperty(index)) {
                return {[index]: !item[index]};
            }
            return item;
        });

        console.log("forumDetailIndex",toJS(this.forumDetailIndex));
        // console.log("index", index);

        if (!this.forumDetailIndex.some((item) => item.hasOwnProperty(index))) {
            this.forumDetailIndex = [...this.forumDetailIndex, {[index]: true}];
            console.log("forumDetailIndex",toJS(this.forumDetailIndex));
        }
    }
}

