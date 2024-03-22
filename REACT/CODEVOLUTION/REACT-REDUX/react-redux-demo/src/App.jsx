import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./component/CakeContainer";
import IceCreamComponent from "./component/IceCreamComponent";
import HooksCakeContainer from "./component/HooksCakeContainer";
import ItemContainer from "./component/ItemContainer";
import UserContainer from "./component/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h2>Action (syncronous ans asyoncrionous)</h2>
        <UserContainer />

        <h2>Redux (data for cake and icecream)</h2>

        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <IceCreamComponent />
      </div>
    </Provider>
  );
}

export default App;
