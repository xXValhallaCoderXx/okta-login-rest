import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";

const useOktaManager = () => {
  const { oktaAuth, authState } = useOktaAuth();
  console.log("AUTH STATE", authState);
  useEffect(() => {
    oktaAuth.tokenManager.on("added", (key: any) => {
      console.log("TOKEN ADDED: ", key);
      oktaAuth.session.get().then((res) => {
        console.log("SESSION - TOKEN ADDED: ", res);
      });
    });
    oktaAuth.tokenManager.on("expired", (key, expiredToken) => {
      console.log("Token with key", key, " has expired:");
      console.log(expiredToken);
      oktaAuth.session.get().then((res) => {
        console.log("SESSION - TOKEN EXPIRED: ", res);
      });
    });
    oktaAuth.tokenManager.on("error", (err: any) => {
      console.log("OKTA TOKEN ERROR: ", err);
    });
    oktaAuth.tokenManager.on("renewed", (key, newToken, oldToken) => {
      console.log("Token with key", key, "has been renewed");
      console.log("Old token:", oldToken);
      console.log("New token:", newToken);
      oktaAuth.session.get().then((res) => {
        console.log("SESSION - TOKEN RENEWED: ", res);
      });
    });
    oktaAuth.tokenManager.on("removed", (key: any) => {
      console.log("TOKEN REMOVED: ", key);
      oktaAuth.session.get().then((res) => {
        console.log("SESSION - TOKEN REMOVED: ", res);
      });
    });

    return () => {
      oktaAuth.tokenManager.off("added");
      oktaAuth.tokenManager.off("expired");
      oktaAuth.tokenManager.off("error");
      oktaAuth.tokenManager.off("removed");
    };
  }, []);
};

export default useOktaManager;
