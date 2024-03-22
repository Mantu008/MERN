import data from "../data.json";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";

function Home() {
  const goto = useNavigate();

  const handleOnClick = (index) => {
    var product = data[index];
    alert(`${product.productName} is added in cart`);
    let cookies = new Cookies();
    var existingProductInCart = cookies.get("cart_products");
    if (existingProductInCart == null || existingProductInCart == undefined) {
      cookies.set("cart_products", [product]);
    } else {
      cookies.set("cart_products", [...existingProductInCart, product]);
    }
    //console.log(existingProductInCart);
    if (window.confirm("Want to buy this product?")) {
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
                onClick={() => handleOnClick(index)}
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
