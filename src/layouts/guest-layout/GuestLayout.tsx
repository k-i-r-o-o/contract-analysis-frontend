import { FC, Suspense } from "react";

import ErrorBoundary from "common/components/custom/error-boundary";

type GuestLayoutProps = {
  children: React.ReactElement;
};

const GuestLayout: FC<GuestLayoutProps> = ({ children }: GuestLayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-full">
            <div className="loader">Loading...</div>
          </div>
        }
      >
        <ErrorBoundary>{children}</ErrorBoundary>
      </Suspense>
    </main>
  );
};

export default GuestLayout;
