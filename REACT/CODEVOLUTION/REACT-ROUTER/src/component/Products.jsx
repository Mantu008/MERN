import { Link, Outlet } from "react-router-dom";
function Products() {
  return (
    <>
      <div className="input-group search">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          data-mdb-ripple-init
        >
          search
        </button>
      </div>
      <nav className="productContainer">
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Products;
