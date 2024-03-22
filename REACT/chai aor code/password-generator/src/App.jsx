import { useCallback, useEffect, useRef, useState } from "react";

import Style from "./App.module.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [cherAllowed, setCherAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (cherAllowed) str += "!@#$%^&*()-=_+[]{}|<>?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, cherAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, cherAllowed, passwordGenerator]);

  const passwordRef = useRef(null);

  const handleCopyClipbordBtn = useCallback(() => {
    passwordRef.current?.select();
    //this is optional for further uses
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className={Style.container}>
        <div className={Style.box}>
          <h3>Password Genarator</h3>
          <div className={Style.textBox}>
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              className={Style.input}
              ref={passwordRef}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCopyClipbordBtn}
            >
              Copy
            </button>
          </div>
          <div className={Style.rangeBox}>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={cherAllowed}
              id="charInput"
              onChange={() => {
                setCherAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Special char</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
