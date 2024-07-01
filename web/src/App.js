import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import ForumMain from "./views/forum/ForumMain";
import Feed from "./views/feed/Feed";
import Admin from "./views/admin/Admin";
import Story from "./views/story/Story";
import "./App.css";
import Footer from "./component/Footer";
import Skin from "./views/skin/SkinMain";
import AccountRecovery from "./views/login/AccountRecovery";
import ConvertAccount from "./views/login/ConvertAccount";
import TistoryMain from "./views/main/TistoryMain";
import NewBlog from "./views/admin/NewBlog";
import ProfileLayer from "./views/admin/profile/ProfileLayer";
import SupportList from "./views/admin/profile/SupportList";

import ScrollToTop from "./component/ScrollToTop";
import { PathUrl } from "./stores/CommonStore";

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
        <Route path={PathUrl.SUPPORT_LIST} element={<SupportList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
