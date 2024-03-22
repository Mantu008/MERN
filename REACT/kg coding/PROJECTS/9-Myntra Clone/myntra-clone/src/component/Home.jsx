import HomeItem from "./HomeItem";
import { useSelector } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <div>
      <main>
        <div className="items-container">
          {items.map((item, index) => (
            <HomeItem item={item} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
