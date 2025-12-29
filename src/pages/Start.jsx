import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  return (
    <div className="start-page">
      <div className="start-card">
        <h1 className="logo">Smart Issue Board</h1>
        <p className="tagline">
          Track, manage, and resolve issues intelligently
        </p>

        <div className="start-buttons">
          <button onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            className="outline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Start;
