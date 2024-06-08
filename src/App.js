import TistoryMain from "./component/TistoryMain";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navigation from "./component/Navigation";
import ForumMain from "./component/forum/ForumMain";

function App() {
  return (
      <Router>
          <div>
              <Navigation />
          </div>
          <Routes>
              <Route path="/" element={<TistoryMain />} />
              <Route path="/forum" element={<ForumMain />} />
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
