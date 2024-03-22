import React, { useState } from "react";
import UserContext from "./context/userConext";
import Login from "./component/Login";
import Profile from "./component/profile";
import userContext from "./context/userConext";
function App() {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1>I am mantu and i am learning now react</h1>
      <Login />
      <br />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
