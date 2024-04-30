import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./login/loginform.jsx";
// SignUp 컴포넌트가 import 되어야 함
import SignUp from "./login/signup.jsx";

function Home() {
  return <div className="signUpMain"></div>;
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
            <a href="https://github.com/QWOFTQ/VUL_True/tree/develop">깃허브</a>
          </div>
          <div className="navLogin">
            <Link to="/login">로그인</Link>
          </div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>

      {/*Router 내에서만 사용 가능, Route 관리  */}
      <Routes>
        {/* 페이지간 연결 */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
