import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./login/loginform.jsx";

function Home() {
  return <div />;
}
function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <h2>
            <Link to="/">강김홍차</Link>
          </h2>
          <div className="navMenu">
            <Link to="/server">서버 모니터링</Link>
            <Link to="/guide">사용 가이드</Link>
            <Link to="/team">팀 소개</Link>
            <Link to="/github">깃허브</Link>
          </div>
          <div className="navLogin">
            <Link to="/login">로그인</Link>
          </div>
        </div>
      </div>

      <Routes>
        {/* Routes로 감싸고 각 Route를 정의합니다. */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;