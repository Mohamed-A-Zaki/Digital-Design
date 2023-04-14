import "./Loading.scss";
import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading w-100 h-100 d-flex align-items-center justify-content-center position-absolute top-0 start-0 bg-dark">
      <GridLoader color="#f1b74d"  aria-label="Loading Spinner" className="xyz" />
    </div>
  );
};

export default Loading;
