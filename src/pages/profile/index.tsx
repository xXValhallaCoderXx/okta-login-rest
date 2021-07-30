import { Switch, Route } from "react-router-dom";
import ViewPage from "./view";
import EditPage from "./edit";
import NavHeader from "../../shared/components/nav-header";

const ProfileRootRoutes = () => {
  return (
    <>
      <NavHeader />
      <Switch>
        <Route path="/profile/view">
          <ViewPage />
        </Route>
        <Route path="/profile/edit">
          <EditPage />
        </Route>
        <Route path="/">
          <ViewPage />
        </Route>
      </Switch>
    </>
  );
};

export default ProfileRootRoutes;
