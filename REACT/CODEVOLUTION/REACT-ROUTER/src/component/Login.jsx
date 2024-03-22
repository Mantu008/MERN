import { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navegate = useNavigate();
  const handleLogin = () => {
    auth.login(user);
    navegate("/", { replace: true });
  };
  return (
    <div>
      <label>
        {" "}
        Username:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button type="button" className="btn btn-info" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
