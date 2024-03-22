import "bootstrap/dist/css/bootstrap.min.css";
import Hadder from "./component/Hadder";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Bag from "./component/Bag";
import FetchItem from "./component/FetchItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "./component/LoadingSpinner";
import WomanItem from "./component/WomanItem";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Hadder />
      <FetchItem />
      {fetchStatus.currentlyFetching ? (
        <LoadingSpinner />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/women" element={<WomanItem />} />
        </Routes>
      )}

      <Footer />
    </>
  );
}

export default App;
