import { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

const ProfileContainer = () => {
  const { oktaAuth, authState } = useOktaAuth();

  useEffect(() => {
    oktaAuth.session.get().then((res) => console.log("SESSION: ", res));
  }, []);
  return <div>PROFILE PAGE</div>;
};

export default ProfileContainer;
