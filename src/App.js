import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./login/loginform.jsx";
// SignUp 컴포넌트가 import 되어야 함
import SignUp from "./login/signup.jsx";

// 메인 페이지
function Home() {
  return <div></div>;
}

function App() {
  return (
    // BrowserRouter로 모든 라우팅 관리
    <Router>
      <div className="App">
        {/* 메뉴 구성 */}
        <div className="nav">
          {/* 강김홍차 클릭시 메인 페이지로 이동 */}
          <h2>
            <Link to="/">강김홍차</Link>
          </h2>
          {/* 메뉴들 클릭시 해당 상세페이지로 이동 */}
          <div className="navMenu">
            <Link to="/server">서버 모니터링</Link>
            <Link to="/guide">사용 가이드</Link>
            <Link to="/team">팀 소개</Link>
            <a href="https://github.com/QWOFTQ/VUL_True/tree/develop">깃허브</a>
          </div>
          {/* 로그인 클릭시 loginform.jsx 파일 내용 보여줌 */}
          <div className="navLogin">
            <Link to="/login">로그인</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
