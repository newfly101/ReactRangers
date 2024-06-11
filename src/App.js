import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import ForumMain from "./component/forum/ForumMain";
import Feed from "./component/feed/Feed";
import Followimg from "./component/feed/Following";
import Follower from "./component/feed/Follower";
import Admin from "./component/admin/Admin";
import Story from "./component/story/Story";
import "./App.css";
import Skin from "./component/skin/TstorySkin";
import TistoryMain from "../src/component/TistoryMain";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<TistoryMain />} />
        <Route path="/forum" element={<ForumMain />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/following" element={<Followimg />} />
        <Route path="/follower" element={<Follower />} />
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
