import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function Profile() {
  const auth = useAuth();
  const navegate = useNavigate();
  const handleLogOut = () => {
    auth.logout();
    navegate("/");
  };

  return (
    <div className="profile">
      <h1>Welcome {auth.user}</h1>
      <button type="button" className="btn btn-danger" onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
}

export default Profile;
