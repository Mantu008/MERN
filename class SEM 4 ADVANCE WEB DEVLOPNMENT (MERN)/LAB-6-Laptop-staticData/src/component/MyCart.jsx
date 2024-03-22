import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Cookies from "universal-cookie";

function MyCart() {
  const [price, setPrice] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [qtyMap, setQtyMap] = useState(new Map());
  const [productMap, setProductMap] = useState(new Map());

  useEffect(() => {
    let cookies = new Cookies();
    var existingProductInCart = cookies.get("cart_products");
    if (existingProductInCart == null) {
      existingProductInCart = [];
    }
    setCartItem(existingProductInCart);
    console.log(cartItem);
  }, []);

  useEffect(() => {
    var x = new Map();
    var y = new Map();

    for (var i = 0; i < cartItem.length; i++) {
      var product = cartItem[i];
      var productQty = x.get(product.productName) || 0;
      x.set(product.productName, productQty + 1);
      y.set(product.productName, product);
    }

    setQtyMap(x);
    setProductMap(y);

    var sum = 0;

    for (var i = 0; i < cartItem.length; i++) {
      sum = sum + parseInt(cartItem[i].price);
    }

    setPrice(sum);
  }, [cartItem]);

  const handleRemove = (itemTitle) => {
    let newProductCartItem = cartItem.filter(
      (item) => item.productName !== itemTitle
    );
    setCartItem(newProductCartItem);
    let cookies = new Cookies();
    cookies.set("cart_products", newProductCartItem);
  };

  return (
    <>
      {/*{cartItem.length === 0 && (
        <h1 className="noItem">
          <b>No items in the cart. Shop Now!</b>
        </h1>
      )}*/}

      <div className="item">
        {Array.from(productMap.entries()).map(([productItems, item], index) => (
          <div key={index}>
            <div className="card" style={{ width: "15rem", height: "25rem" }}>
              <img
                src={item.image}
                className="card-img-top"
                alt={item.productName}
              />
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => handleRemove(item.productName)}
              >
                <MdDelete />
                <span className="visually-hidden"></span>
              </span>

              <div className="card-body">
                <h4>
                  Price{item.price} X {qtyMap.get(item.productName)}
                </h4>
                <h5 className="card-title">{item.productName}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*{cartItem.length !== 0 && (
        <div className="buySection">
          <div>
            <h1>
              <b>Total Price: ${price}</b>
            </h1>
          </div>
          <div>
            <button
              className="btn btn-warning"
              onClick={() => handleBuyNow()} // Adjust this handler as needed
            >
              Buy Now
            </button>
          </div>
        </div>
      )}*/}
    </>
  );
}

export default MyCart;
