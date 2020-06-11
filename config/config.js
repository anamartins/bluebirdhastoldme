let API_BASE_URL;

if (process.env.NODE_ENV === "development") {
  API_BASE_URL = "http://localhost:3000/";
} else {
  // if node_env is build
  API_BASE_URL = "https://api.bluebirdhastoldme.com/";
}

export { API_BASE_URL };
