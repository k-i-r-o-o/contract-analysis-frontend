import { FC } from "react";
import { ErrorOutline, Refresh } from "@mui/icons-material";

import "./FallBack.scss";

const FallBack: FC = () => {
  return (
    <div className="fallback">
      <ErrorOutline className="fallback__icon" />
      <h2 className="fallback__title">Sorry, something went wrong</h2>
      <p className="fallback__description">Please try refreshing the page.</p>
      <Refresh className="fallback__refresh" />
    </div>
  );
};
export default FallBack;
