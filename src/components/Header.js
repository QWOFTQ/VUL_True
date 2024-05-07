import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
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
  );
};

export default Header;
