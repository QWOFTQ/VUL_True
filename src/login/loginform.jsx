import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function LoginForm() {
  return (
    <div>
    <div className="loginform">
      <div className="box">
        {/* Email 입력란 */}
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        {/* Password 입력란 */}
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        {/* 로그인 버튼 */}
        <div>
          <button type="submit" className="login-button">로그인</button>
        </div>
        {/* 회원가입 안내 */}
        <div className="sign-up"><Link to="/signup">회원가입</Link></div>
      </div>
    </div>
  </div>
  );
}

export default LoginForm;
