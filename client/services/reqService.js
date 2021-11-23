import axios from "axios";
import { getSessionToken } from "@shopify/app-bridge-utils";

import { createApp as createAppBridgeApp } from "@shopify/app-bridge";

var shopifyApp = createAppBridgeApp({
    apiKey: "c8e11ec295e8e70fca30a8409ce65ed9",
    host: "c2NyaWJlbGVzcy10ZXN0LXN0b3JlLm15c2hvcGlmeS5jb20vYWRtaW4",
  });
  

const instance = axios.create();
// Intercept all requests on this Axios instance
instance.interceptors.request.use(function (config) {
  return getSessionToken(shopifyApp) // requires a Shopify App Bridge instance
    .then((token) => {
      // Append your request headers with an authenticated token
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    });
});
// Export your Axios instance to use within your app
export default instance;