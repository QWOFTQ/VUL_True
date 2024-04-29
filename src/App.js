import "./App.css";

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
    </div>
  );
}

export default App;
