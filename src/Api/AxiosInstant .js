import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const baseUrl = "https://dallalserver.onrender.com";

const AxiosInstant = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

// Function to refresh token
const refreshToken = async () => {
  try {
    const refreshToken = cookies.get("refresh_token"); // Retrieve refresh token from cookies
    const response = await axios.post(`${baseUrl}/user/refresh-token`, { refreshToken });
    const newAccessToken = response.data.accessToken;

    // Store the new access token in cookies
    cookies.set("auth_token", newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.error("Refresh token failed", error);
    return null;
  }
};

// Axios interceptor to handle expired tokens
AxiosInstant.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired token (401 Unauthorized)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried

      const newAccessToken = await refreshToken(); // Get a new access token
      if (newAccessToken) {
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`; // Update the request headers
        return AxiosInstant(originalRequest); // Retry the original request
      }
    }

    return Promise.reject(error);
  }
);

// Add Authorization header to all requests
AxiosInstant.interceptors.request.use((config) => {
  const token = cookies.get("auth_token"); // Retrieve token from cookies
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default AxiosInstant;