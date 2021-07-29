import { Switch, Route } from "react-router-dom";
import { LoginPage, ProfilePage, RegisterPage } from "./pages";
import { SecureRoute } from "@okta/okta-react";
import { LoginCallback } from "@okta/okta-react";
import useOktaManager from "./hooks/use-okta-manager";

const RootRoutes = () => {
  useOktaManager();
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/login/callback" component={LoginCallback} />
      <Route path="/register" exact>
        <RegisterPage />
      </Route>
      <SecureRoute path="/profile" exact>
        <ProfilePage />
      </SecureRoute>
    </Switch>
  );
};

export default RootRoutes;
