import React from 'react';
import "../App.css";

function Signup() {
  return (
    <div className="backGround loginform">
      <div className='signUpMain'>  <h2>회원가입</h2>
      <p>회원가입에 필요한 정보를 자세하게 기입해주세요.</p>
      <input type="text" placeholder="Name (Required)" />
      <input type="email" placeholder="Email (Required)" />
      <input type="password" placeholder="Password (Required)" />
      <input type="password" placeholder="Confirm Password (Required)" />
      <button>회원가입</button></div>
    
    </div>
  );
}

export default Signup;
