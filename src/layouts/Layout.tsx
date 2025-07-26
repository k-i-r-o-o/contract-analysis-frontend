import { FC, memo } from "react";

import { SignedOutView } from "common/components/custom/signed-out-view";

import AuthorizedLayout from "./authorized-layout";
import GuestLayout from "./guest-layout";

const Layout: FC = () => {
  const loginStatus = true;

  if (loginStatus) {
    return (
      <>
        <AuthorizedLayout />
      </>
    );
  }
  return (
    <>
      <GuestLayout>
        <SignedOutView />
      </GuestLayout>
    </>
  );
};

export default memo(Layout);
