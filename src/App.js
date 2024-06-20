import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import ForumMain from "./component/forum/ForumMain";
import Feed from "./component/feed/Feed";
import Admin from "./component/admin/Admin";
import Story from "./component/story/Story";
import "./App.css";
import Footer from "./component/footer/Footer";
import Skin from "./component/skin/TstorySkin";
import AccountRecovery from "./component/accountRecovery/AccountRecovery";
import ConvertAccount from "./component/convertAccount/ConvertAccount";
import TistoryMain from "./component/storymain/TistoryMain";
import NewBlog from "./component/admin/NewBlog";
import ProfileLayer from "./component/admin/userNameList/ProfileLayer";

import ScrollToTop from "./component/ScrollToTop";
import {PathUrl} from "./stores/CommonStore";


function App() {
  return (

    <Router>
      {/* location.pathname 전역 저장 및 자동 스크롤 기능 : <ScrollToTop /> */}
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path={PathUrl.MAIN} element={<TistoryMain />} />
        <Route path={PathUrl.FORUM} element={<ForumMain />} />
        <Route path={PathUrl.FEED} element={<Feed />} />
        <Route path={PathUrl.ADMIN} element={<Admin />} />
        <Route path={PathUrl.STORY} element={<Story />} />
        <Route path={PathUrl.SKIN} element={<Skin />} />
        <Route path={PathUrl.RECOVERY_ACCOUNT} element={<AccountRecovery />} />
        <Route path={PathUrl.CONVERT_ACCOUNT} element={<ConvertAccount />} />
        <Route path={PathUrl.NEW_BLOG} element={<NewBlog />} />
        <Route path={PathUrl.PROFILE_LAYER} element={<ProfileLayer />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
