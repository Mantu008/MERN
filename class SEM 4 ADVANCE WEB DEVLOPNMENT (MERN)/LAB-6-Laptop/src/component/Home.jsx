import data from "../data.json";
import { useNavigate } from "react-router";

function Home({ setCartData, cartData }) {
  const goto = useNavigate();
  const handleonclick = (data) => {
    const newData = [...cartData, data];
    setCartData(newData);
    alert(`${data.productName} is added in cart`);
    if (confirm()) {
      goto("/mycart");
    }
  };
  return (
    <div className="item">
      {data.map((item, index) => (
        <div key={index}>
          <div className="card" style={{ width: "15rem", height: "25rem" }}>
            <img
              src={item.image}
              className="card-img-top"
              alt={item.productName}
            />
            <div className="card-body">
              <h2>{item.price}</h2>
              <h5 className="card-title">{item.productName}</h5>
              <button
                className="btn btn-warning"
                onClick={() => handleonclick(item)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
