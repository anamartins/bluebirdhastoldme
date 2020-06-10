let API_BASE_URL;

if (process.env.NODE_ENV === "development") {
  API_BASE_URL = "http://localhost:3000/";
} else {
  // if node_env is build
  API_BASE_URL =
    "http://ec2-18-197-140-221.eu-central-1.compute.amazonaws.com:3000/";
}

export { API_BASE_URL };
