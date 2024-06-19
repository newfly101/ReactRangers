import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useLocalObservable} from "mobx-react";
import CommonStore from "../stores/CommonStore";

const ScrollToTop = () => {
    const commonStore = useLocalObservable(CommonStore);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                commonStore.changeScrolled(true);
            } else {
                commonStore.changeScrolled(false);
            }
            console.log("현재 화면 Y축 스크롤 : ", window.scrollY);
          };
          const changeUrl = (url) => {
            // console.log(location.pathname);
            //   commonStore.scrollToTop(url);
          };

        changeUrl(location.pathname);
        window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    }, [location.pathname, commonStore.topRef]);

    return null;

};

export default ScrollToTop;