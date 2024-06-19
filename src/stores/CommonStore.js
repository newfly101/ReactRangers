import {makeAutoObservable} from "mobx";
import {createRef} from "react";

const CommonStore = () => {
    // const topRef = createRef();
    // 스크롤 최 상단으로 올리기 위한 state;
    // scrollIntoView MDN : https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

    return makeAutoObservable({
        scrolled: false,
        topRef: '/',

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