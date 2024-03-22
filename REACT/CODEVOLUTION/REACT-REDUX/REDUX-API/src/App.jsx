import "./App.css";
import UserContainer from "./component/UserContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <UserContainer />
      </Provider>
    </>
  );
}

export default App;
