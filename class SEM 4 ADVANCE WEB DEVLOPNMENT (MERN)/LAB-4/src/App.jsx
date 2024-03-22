import { useState } from "react";
import "./App.css";
function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const database = [
    {
      username: "virat",
      password: "12345",
    },
    {
      username: "bumrah",
      password: "boomboom",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserNameError("");
    setPasswordError("");
    const userData = database.find((val) => val.username == userName);
    if (userData) {
      if (userData.password !== password) {
        setPasswordError("password not valid");
      } else {
        setIsSubmit(true);
      }
    } else {
      setUserNameError("UserName not valid");
    }
  };
  const renderForm = (
    <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <span>{userNameError}</span>
      <br />
      <br />
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <span>{passwordError}</span>
      <br />
      <br />
      <input type="submit" />
    </form>
  );
  return (
    <div classNameName="App">
      {isSubmit ? "Successfully Logged In" : renderForm}
    </div>
  );
}
export default App;
