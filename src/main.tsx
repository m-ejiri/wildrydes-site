import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from "@aws-amplify/ui-react";
import { AuthProvider } from "react-oidc-context";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "@aws-amplify/ui-react/styles.css";

const cognitoAuthConfig = {
  authority:
    "https://cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_gYybLrBns",
  client_id: "5q1uu3auhi0bia4r2qqq4744rk",
  redirect_uri: "https://https://main.d21afdbd9zqj5m.amplifyapp.com/",
  response_type: "code",
  scope: "phone openid email",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      <AuthProvider {...cognitoAuthConfig}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Authenticator>
  </React.StrictMode>
);
