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
          };

        commonStore.changeLocation(location.pathname);
        window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    }, [location.pathname, commonStore]);

    return null;

};

export default ScrollToTop;