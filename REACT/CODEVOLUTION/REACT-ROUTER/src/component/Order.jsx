import { NavLink, useNavigate } from "react-router-dom";
function Order() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Order Page</h1> <br />
      <NavLink to="/order-summery">
        <button type="button" className="btn btn-outline-info">
          Place Order
        </button>
      </NavLink>
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

export default Order;
