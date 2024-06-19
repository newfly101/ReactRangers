import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import ForumMain from "./component/forum/ForumMain";
import Feed from "./component/feed/Feed";
import Following from "./component/feed/Following";
import Follower from "./component/feed/Follower";
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
import TistoryContextProvider from "./stores/TistoryContext";
import ScrollToTop from "./component/ScrollToTop";


function App() {
  return (
    <TistoryContextProvider>
    <Router>
      {/* location.pathname 전역 저장 및 자동 스크롤 기능 : <ScrollToTop /> */}
      <ScrollToTop />
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<TistoryMain />} />
        <Route path="/forum" element={<ForumMain />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/following" element={<Following />} />
        <Route path="/follower" element={<Follower />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/story" element={<Story />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/accountRecovery" element={<AccountRecovery />} />
        <Route path="/convertAccount" element={<ConvertAccount />} />
        <Route path="/newBlog" element={<NewBlog />} />
        <Route path="/profileLayer" element={<ProfileLayer />} />
        {/*
            <Route path="/" element={<TistoryMain />} /> // 여기에 page link 추가
          */}
      </Routes>
      <Footer />
    </Router>
      </TistoryContextProvider>
  );
}

export default App;
