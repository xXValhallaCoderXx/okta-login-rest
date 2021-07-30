import { Switch, Route } from "react-router-dom";
import useOktaManager from "./hooks/use-okta-manager";
import { AuthModule, ProfileModule } from "./pages";
import ProfileView from "./pages/profile/view";
import { SecureRoute } from "@okta/okta-react";

const RootRoutes = () => {
  useOktaManager();
  return (
    <Switch>
      <Route path="/auth">
        <AuthModule />
      </Route>
      <SecureRoute path="/profile">
        <ProfileModule />
      </SecureRoute>
      <SecureRoute path="/test">
        <ProfileView />
      </SecureRoute>
      <Route path="/">
        <AuthModule />
      </Route>
    </Switch>
  );
};

export default RootRoutes;
