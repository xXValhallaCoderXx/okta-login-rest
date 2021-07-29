import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";

const useOktaManager = () => {
  const { oktaAuth } = useOktaAuth();
  useEffect(() => {
    oktaAuth.tokenManager.on("added", (key: any) => {
      console.log("TOKEN ADDED: ", key);
    });
    oktaAuth.tokenManager.on("expired", (key, expiredToken) => {
      console.log("Token with key", key, " has expired:");
      console.log(expiredToken);
    });
    oktaAuth.tokenManager.on("error", (err: any) => {
      console.log("OKTA TOKEN ERROR: ", err);
    });
    oktaAuth.tokenManager.on("renewed", (key, newToken, oldToken) => {
      console.log("Token with key", key, "has been renewed");
      console.log("Old token:", oldToken);
      console.log("New token:", newToken);
      oktaAuth.session.get().then((res) => {
        console.log("NEW SESSION: ", res);
      });
    });
    oktaAuth.tokenManager.on("removed", (key: any) => {
      console.log("TOKEN REMOVED: ", key);
    });
  }, []);
};

export default useOktaManager;
