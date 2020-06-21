let API_BASE_URL;
let IMG_BASE_URL;

if (process.env.NODE_ENV === "development") {
  API_BASE_URL = "http://localhost:3000/";
  IMG_BASE_URL = "";
} else {
  // if node_env is build
  API_BASE_URL = "https://api.bluebirdhastoldme.com/";
  IMG_BASE_URL =
    "https://s3.eu-central-1.amazonaws.com/www.bluebirdhastoldme.com";
}

export { API_BASE_URL, IMG_BASE_URL };
