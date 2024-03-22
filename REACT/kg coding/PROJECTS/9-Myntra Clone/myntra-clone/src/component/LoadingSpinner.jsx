function LoadingSpinner() {
  return (
    <div className="loadingSpinner">
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
