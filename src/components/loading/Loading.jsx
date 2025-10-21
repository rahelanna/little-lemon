import ReactDOM from "react-dom";
import "./Loading.css";

const Loading = () => {
  return ReactDOM.createPortal(
    <div
      className="loading-overlay"
      role="status"
      aria-live="polite"
      aria-label="Page loading indicator"
    >
      <div className="loading-spinner" aria-hidden="false">
        <img
          src="assets/lemon.gif"
          alt="Loading animation of a spinning lemon"
          className="loading-image"
        />
        <div className="loading-text" aria-label="Loading in progress">
          <h1>loading</h1>
          <span className="dot" aria-hidden="true" />
          <span className="dot" aria-hidden="true" />
          <span className="dot" aria-hidden="true" />
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Loading;
