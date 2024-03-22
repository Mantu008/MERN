import React, { useState } from "react";
import UserContextProvider from "./context/userContextProvider";
import UserContext from "./context/userConext";
import Login from "./component/Login";
import Profile from "./component/profile";
function App() {
  return (
    <UserContextProvider>
      <h1>I am mantu and i am learning now react</h1>
      <Login />
      <br />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
