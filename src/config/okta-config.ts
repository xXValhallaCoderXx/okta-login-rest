import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuthConfig = {
    // Note: If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add `pkce: false`
    issuer: 'https://dev-36707003.okta.com/oauth2/default',
    clientId: '0oa1cx7xrqdmnx7w75d7',
    redirectUri: 'http://localhost:3000/login/callback',
  };

  const oktaSignInConfig = {
    baseUrl: 'https://dev-36707003.okta.com',
    clientId: '0oa1cx7xrqdmnx7w75d7',
    redirectUri:  'http://localhost:3000/login/callback',
    authParams: {
      // If your app is configured to use the Implicit flow
      // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
      // you will need to uncomment the below line
      // pkce: false
    }
    // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
  };

  export const oktaAuthInstance = new OktaAuth(oktaAuthConfig)
  
  export { oktaAuthConfig, oktaSignInConfig };