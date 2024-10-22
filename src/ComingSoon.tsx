import React from 'react';
import './ComingSoon.css';
import logo from './assets/logo.png'; // Update the path to your logo

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <img src={logo} alt="Logo" className="logo animated-logo" />
      <div className="countdown">رب فاجعل مجتمعنا غايته حسن الختام</div>
      <h1>🕌Coming Soon!🕌  </h1>
      <h1>💫በቅርቡ ይጠብቁን!💫</h1>
      <p>mechleta byyesh yeneberew, yejemerkut ngr ande mesmer keyazellge serawalew🙏</p>
      <div className="footer">© 2024 ኢፋዳ ኢስላማዊ ድርጅት</div>
    </div>
  );
};

export default ComingSoon;
