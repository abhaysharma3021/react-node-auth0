import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6qobyaiq8x8ne6k4.us.auth0.com"
      clientId="1POWcyUBK4dXn5OljWzLdE1kcOfG9Q9g"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://www.express-api.com/api/v2",
        scope: "openid profile email",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
