import React, { useContext } from "react";
import userContext from "../context/userConext";

function profile() {
  const { user } = useContext(userContext);

  if (!user) return <div>plese Login</div>;

  return <div> Welcome {user.userName}</div>;
}

export default profile;
