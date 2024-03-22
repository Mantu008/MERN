import React from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

function Users() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <div className="users">
        <button
          type="button"
          className="btn btn-outline-success button"
          onClick={() => navigate("/users/1")}
        >
          User 1
        </button>
        <button
          type="button"
          className="btn btn-outline-success button"
          onClick={() => navigate("/users/2")}
        >
          User 2
        </button>
        <button
          type="button"
          className="btn btn-outline-success button"
          onClick={() => navigate("/users/3")}
        >
          User 3
        </button>
        <button
          type="button"
          className="btn btn-outline-success button"
          onClick={() => navigate("/users/admin")}
        >
          Admin
        </button>
      </div>
      <Outlet /> <br /> <br />
      <button
        type="button"
        className="btn btn-info"
        onClick={() => setSearchParams({ filter: "active" })}
      >
        Active Users
      </button>{" "}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setSearchParams({})}
      >
        Reset Filter
      </button>{" "}
      <br /> <br />
      {showActiveUsers ? (
        <h2>Showing Active Users</h2>
      ) : (
        <h2>Showing All users</h2>
      )}
    </>
  );
}

export default Users;
