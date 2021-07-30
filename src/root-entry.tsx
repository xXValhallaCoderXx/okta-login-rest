import { useHistory } from "react-router-dom";
import RootRoutes from "./root-routes";
import { Security } from "@okta/okta-react";
import { toRelativeUrl } from "@okta/okta-auth-js";
import { oktaAuthInstance } from "./config/okta-config";

const RootEntry = () => {
  const history = useHistory();

  // @ts-ignore
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  const handleRedirect = () => history.replace("/");
  return (
    <Security
      oktaAuth={oktaAuthInstance}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={handleRedirect}
    >
      <RootRoutes />
    </Security>
  );
};

export default RootEntry;
