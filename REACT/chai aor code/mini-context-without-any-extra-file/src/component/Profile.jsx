import React, { useContext } from "react";
import userContext from "../context/userConext";

function Profile() {
  const { user } = useContext(userContext);

  if (user === "") {
    return <div>plese Login</div>;
  } else {
    return <div> Welcome {user.userName}</div>;
  }
}

export default Profile;
