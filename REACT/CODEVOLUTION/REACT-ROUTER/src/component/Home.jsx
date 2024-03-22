import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button
        type="button"
        className="btn btn-outline-info button"
        onClick={() => navigate("/order-summery")}
      >
        Place Order
      </button>

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

export default Home;
