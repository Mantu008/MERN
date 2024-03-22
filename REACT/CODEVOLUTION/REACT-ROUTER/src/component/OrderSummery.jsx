import { useNavigate } from "react-router-dom";

function OrderSummery() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="OrderConform">
        <h1>OrderSummery Page</h1>
        <h3>Order Conform</h3>
      </div>
      <button
        type="button"
        className="btn btn-outline-warning button"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}

export default OrderSummery;
