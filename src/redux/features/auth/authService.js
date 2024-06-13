import axios from "axios";

// const SERVER = process.ENV.REACT_APP_SERVER;
// export const API_URL = `${SERVER}/api/v1/`;

const register = async (marketerData) => {
  try {
    const response = await axios.post(
      "http://localhost:3100/api/v1/register",
      marketerData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    throw new Error(message); // Use throw to properly handle errors in the thunk
  }
};

const registerWithReferral = async (marketerData, referralId) => {
  try {
    const response = await axios.post(
      `http://localhost:3100/api/v1/register/${referralId}`,
      marketerData
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      console.error("Error in setting up the request:", error.message);
    }
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

const login = async (marketerData) => {
  try {
    const response = await axios.post(
      "http://localhost:3100/api/v1/login",
      marketerData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    throw new Error(message); // Use throw to properly handle errors in the thunk
  }
};

const logout = async () => {
  try {
    const response = await axios.delete("http://localhost:3100/api/v1/logout");
    return response.data.message;
  } catch (error) {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      console.error("Error in setting up the request:", error.message);
    }
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

const getLoginStatus = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3100/api/v1/getLoginStatus",
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      console.error("Error in setting up the request:", error.message);
    }
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

// authService.js
const getDownlines = async (marketerId) => {
  try {
    const response = await axios.get(
      `http://localhost:3100/api/v1/${marketerId}/downlines`
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    throw new Error(message);
  }
};

const authService = {
  register,
  registerWithReferral,
  login,
  logout,
  getLoginStatus,
  getDownlines,
};

export default authService;
