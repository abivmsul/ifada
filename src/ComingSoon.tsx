import React from 'react';
import './ComingSoon.css';
import logo from './assets/logo.png'; // Ensure this path is correct

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo animated-logo" />
      </div>
      <div className="countdown">رب فاجعل مجتمعنا غايته حسن الختام</div>
      <h1 className="animated-title">🕌 Coming Soon! 🕌</h1>
      <h1 className="animated-title">💫 በቅርቡ ይጠብቁን! 💫</h1>
      <p className="description">mechleta byyesh yeneberew, yejemerkut ngr ande mesmer keyazellge serawalew🙏</p>
      <div className="footer">© 2024 ኢፋዳ ኢስላማዊ ድርጅት</div>
    </div>
  );
};

export default ComingSoon;
