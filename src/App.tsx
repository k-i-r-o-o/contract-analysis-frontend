import { FC } from "react";
import Layout from "layouts";

import ErrorBoundary from "common/components/custom/error-boundary";

const App: FC = () => {
  // ** Implement Later
  // const {checkCookies}= useCookies();
  return (
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  );
};
export default App;
