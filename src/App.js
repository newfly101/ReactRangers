import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import TistoryMain from "./component/TistoryMain";
import ForumMain from "./component/forum/ForumMain";
import Feed from "./component/feed/Feed";

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
