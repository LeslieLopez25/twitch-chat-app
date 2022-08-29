import { useState } from "react";

const Auth = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setError(true);
      return;
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <div className="auth-container-form">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            id="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Go!</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;