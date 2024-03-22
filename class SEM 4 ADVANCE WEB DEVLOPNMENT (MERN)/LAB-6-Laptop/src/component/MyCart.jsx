import { useState } from "react";
import { MdDelete } from "react-icons/md";

function MyCart({ cartData }) {
  // Calculate total price using reduce
  let totalPrice = cartData.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    return total + itemPrice;
  }, 0);

  const [itemPrice, setItemPrice] = useState(totalPrice);
  const [data, setData] = useState(cartData);

  const handleRemove = (item) => {
    const newPrice = itemPrice - item.price;
    setItemPrice(newPrice);
    const newData = data.filter((data) => data.id !== item.id);
    setData(newData);
  };

  console.log(cartData);

  return (
    <>
      {cartData.length === 0 && (
        <h1 className="noItem">
          <b>No items in the cart Shop Now!..</b>
        </h1>
      )}

      <div className="item">
        {data.map((item, index) => (
          <div key={index}>
            <div className="card" style={{ width: "15rem", height: "25rem" }}>
              <img
                src={item.image}
                className="card-img-top"
                alt={item.productName}
              />
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => handleRemove(item)}
              >
                <MdDelete />
                <span className="visually-hidden"></span>
              </span>

              <div className="card-body">
                <h2>{item.price}</h2>
                <h5 className="card-title">{item.productName}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cartData.length != 0 && (
        <div className="buySection">
          <div>
            <h1>
              <b>Total Price: ${itemPrice}</b>
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
      )}
    </>
  );
}

export default MyCart;
