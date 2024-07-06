import { makeAutoObservable } from "mobx";
import { createRef } from "react";

export const PathUrl = {
  MAIN: "/",
  ADMIN: "/admin",
  STORY: "/story",
  FEED: "/feed",
  SKIN: "/skin",
  FORUM: "/forum",
  FOLLOWING: "/following",
  FOLLOWER: "/follower",
  RECOVERY_ACCOUNT: "/accountRecovery",
  CONVERT_ACCOUNT: "/convertAccount",
  NEW_BLOG: "/newBlog",
  PROFILE_LAYER: "/profileLayer",
  SUPPORT_LIST: "/supportList",
  EXTERNAL: "/external",
  PAY: "/pay",
};

export const navigationTaps = [
  { key: PathUrl.FEED, label: "피드" },
  { key: PathUrl.STORY, label: "스토리" },
  { key: PathUrl.SKIN, label: "스킨" },
  { key: PathUrl.FORUM, label: "포럼" },
];

const CommonStore = () => {
  const topRef = createRef();

  return makeAutoObservable({
    scrolled: false,
    locationPath: topRef,
    navigationTaps: navigationTaps,

    changeScrolled(state) {
      this.scrolled = state;
    },
    changeLocation(location) {
      // console.log("store locationPath : ",this.locationPath);
      this.locationPath.current = location;
      console.log("current", this.locationPath.current, "location", location);
    },
    onClickScrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  });
};

export default CommonStore;
