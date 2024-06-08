import TistoryMain from "./component/TistoryMain";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<TistoryMain />} />
          </Routes>
      </Router>
  );
}

export default App;
