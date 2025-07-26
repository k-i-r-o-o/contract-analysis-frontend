import { FC } from "react";

const SignedOutView: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">You are signed out</h1>
      <p className="mb-6">Please log in to access the application.</p>
      <a href="/login" className="text-blue-500 hover:underline">
        Go to Login
      </a>
    </div>
  );
};

export default SignedOutView;
