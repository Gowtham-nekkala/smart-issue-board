import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      {/* ERROR MESSAGE */}
      {error && <div className="error-box">{error}</div>}

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p style={{ marginTop: "12px" }}>
        New user?{" "}
        <span
          style={{ color: "#2563eb", cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          Sign up
        </span>
      </p>
    </div>
  );
}

export default Login;
