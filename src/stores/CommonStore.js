import {makeAutoObservable} from "mobx";
import {createRef} from "react";

export default class CommonStore {
    constructor() {
        makeAutoObservable(this);
    }
    // 스크롤 최 상단으로 올리기 위한 state;
    topRef = createRef();

    // scrollIntoView MDN : https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    scrollToTop = () => {
        if(this.topRef.current) {
            this.topRef.current.scrollIntoView({behavior: 'smooth'})
            this.topRef.current.focus();
        }
    }
};