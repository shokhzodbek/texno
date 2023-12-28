import React from "react";
import "./LoginCard.css";
function LoginCard({ handlerState }) {
  function closeLogin() {
    handlerState(false);
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <span onClick={closeLogin}>X</span>
        <h3>Kirish yoki ro'yxatdan o'tish</h3>
        <fieldset>
          <legend>Telefon</legend>
          <input type="text" value={"+998"} />
        </fieldset>

        <button>Kodni olish</button>
        <button>Login orqali kirish</button>
      </div>
    </div>
  );
}

export default LoginCard;
