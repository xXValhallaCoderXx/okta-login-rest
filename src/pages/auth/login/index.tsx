import { Redirect } from "react-router";
import styles from "./page-one.module.css";
import { useOktaAuth } from "@okta/okta-react";

import OktaSignInWidget from "../../../shared/components/okta-sign-in-widget";
import { oktaSignInConfig } from "../../../config/okta-config";

const LoginContainer = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const onSuccess = (tokens: any) => {
    console.log("SUCCESS: ", tokens);
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = () => {};

  // Stop flashing of login page
  if (!authState) {
    return null;
  }

  if (authState?.isAuthenticated) {
    return <Redirect to={{ pathname: "/profile" }} />;
  }

  return (
    <div className={styles.container}>
      LOGIN PAGE{" "}
      <OktaSignInWidget
        config={oktaSignInConfig}
        onError={onError}
        onSuccess={onSuccess}
      />
    </div>
  );
};

export default LoginContainer;
