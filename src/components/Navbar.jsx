import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav>
      <h3>Smart Issue Board</h3>
      <div>
        <span style={{ marginRight: "12px" }}>
          {user?.email}
        </span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
