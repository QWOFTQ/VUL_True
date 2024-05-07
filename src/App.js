import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Server from './server';
import Guide from './guide';
import Team from './team';
import './App.css';
import LoginForm from './login/loginform.jsx';
// SignUp 컴포넌트가 import 되어야 함
import SignUp from './login/signup.jsx';

function Home() {
  return <div className="backGround">dd</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <img src="" alt="" />
        </div>
        {/*Router 내에서만 사용 가능, Route 관리  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/server" element={<Server />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
