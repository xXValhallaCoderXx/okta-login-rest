import { Switch, Route } from "react-router-dom";
import { LoginCallback } from "@okta/okta-react";
import LoginPage from "./login";
import RegisterPage from "./register";

const AuthRootRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/login">
        <LoginPage />
      </Route>
      <Route path="/auth/register">
        <RegisterPage />
      </Route>
      <Route path="/auth/login/callback" component={LoginCallback} />
      <Route path="/">
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default AuthRootRoutes;
