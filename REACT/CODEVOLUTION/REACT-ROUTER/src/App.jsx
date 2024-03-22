import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Nevbar from "./component/Nevbar";
import Order from "./component/Order";
import OrderSummery from "./component/OrderSummery";
import NoMatch from "./component/NoMatch";
import Products from "./component/Products";
import Featuredproducts from "./component/Featuredproducts";
import NewProducts from "./component/NewProducts";
import Users from "./component/Users";
import UserDetail from "./component/UserDetail";
import Admin from "./component/Admin";
import Profile from "./component/Profile";
import { AuthProvider } from "./component/auth";
import Login from "./component/Login";
import RequiredAuth from "./component/RequiredAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <Nevbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<UserDetail />} />
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route path="/products" element={<Products />}>
            <Route index element={<Featuredproducts />} />
            <Route path="featured" element={<Featuredproducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="/order-summery" element={<OrderSummery />} />
          <Route path="*" element={<NoMatch />} />

          <Route
            path="/profile"
            element={
              <RequiredAuth>
                <Profile />
              </RequiredAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
