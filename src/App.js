import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import ForumMain from "./component/forum/ForumMain";
import Feed from "./component/feed/Feed";
import Admin from "./component/admin/Admin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main from "./main/main";
import Story from "./component/story/Story";
import "./App.css";
import Skin from "./component/skin/TstorySkin";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/forum" element={<ForumMain />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/story" element={<Story />} />
        <Route path="/skin" element={<Skin />} />
        {/*
            <Route path="/" element={<TistoryMain />} /> // 여기에 page link 추가
          */}
      </Routes>
      <footer>
        <div>
          <h2>Footer 입니다.</h2>
        </div>
      </footer>
    </Router>
  );
}

export default App;
