import React, { useEffect, useRef } from "react";
// @ts-ignore
import OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";

// @ts-ignore
const OktaSignInWidget = ({ config, onSuccess, onError }) => {
  const widgetRef = useRef();
  // @ts-ignore
  useEffect(() => {
    if (!widgetRef.current) return false;

    const widget = new OktaSignIn(config);

    widget
      .showSignInToGetTokens({
        el: widgetRef.current,
      })
      .then(onSuccess)
      .catch(onError);

    return () => widget.remove();
  }, [config, onSuccess, onError]);

  // @ts-ignore
  return <div ref={widgetRef} />;
};
export default OktaSignInWidget;
