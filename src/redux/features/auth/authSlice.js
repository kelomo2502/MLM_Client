import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { toast } from "react-toastify";

const initialState = {
  isLoggedIn: false,
  marketer: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register Marketer
export const registerMarketer = createAsyncThunk(
  "auth/register",
  async (marketerData, thunkAPI) => {
    try {
      const response = await authService.register(marketerData);
      return response;
    } catch (error) {
      const errorMSg =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(errorMSg);
    }
  }
);

// Register Marketer with Referral
export const registerMarketerWithReferral = createAsyncThunk(
  "auth/registerWithReferral",
  async ({ marketerData, referralId }, thunkAPI) => {
    try {
      const response = await authService.registerWithReferral(
        marketerData,
        referralId
      );
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Login Marketer
export const loginMarketer = createAsyncThunk(
  "auth/login",
  async (marketerData, thunkAPI) => {
    try {
      const response = await authService.login(marketerData);
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const logoutMarketer = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await authService.logout();
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getLoginStatus = createAsyncThunk(
  "auth/getLoginStatus",
  async (_, thunkAPI) => {
    try {
      const response = await authService.getLoginStatus();
      console.log("API response:", response);
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const fetchDownlines = createAsyncThunk(
  "auth/getDownlines",
  async (marketerId, thunkAPI) => {
    try {
      const response = await authService.getDownlines(marketerId);
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET_AUTH(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    restoreAuth(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.marketer = action.payload.marketer;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register marketer
      .addCase(registerMarketer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerMarketer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.marketer = action.payload;
        localStorage.setItem("authState", JSON.stringify(state));
        toast.success("Registration successful");
      })
      .addCase(registerMarketer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.marketer = null;
        toast.error(action.payload);
      })
      // Register marketer with referral
      .addCase(registerMarketerWithReferral.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerMarketerWithReferral.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.marketer = action.payload;
        localStorage.setItem("authState", JSON.stringify(state));
        toast.success("Registration successful");
      })
      .addCase(registerMarketerWithReferral.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.marketer = null;
        toast.error(action.payload);
      })

      // Login Marketer
      .addCase(loginMarketer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginMarketer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isSuccess = true;
        state.marketer = action.payload;
        console.log(`Marketer:${action.payload}`);
        state.isError = false;
        state.message = "";
        localStorage.setItem("authState", JSON.stringify(state));
        toast.success("You have logged in successfully");
      })
      .addCase(loginMarketer.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // Logout Marketer
      .addCase(logoutMarketer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutMarketer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = false;
        state.marketer = null;
        localStorage.removeItem("authState");
        toast.success(action.payload);
      })
      .addCase(logoutMarketer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.marketer = null;
        toast.error(action.payload);
      })
      // GetLoginStatus
      .addCase(getLoginStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLoginStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = action.payload;
        console.log(`getLoginStatus:${action.payload}`);
        if (action.payload.message === "invalid signature") {
          state.isLoggedIn = false;
        }
        localStorage.setItem("authState", JSON.stringify(state));
      })
      .addCase(getLoginStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        console.log(action.payload);
      })
      // FetchDownlines
      .addCase(fetchDownlines.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDownlines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.marketer.loggedInMarketer.downlines = action.payload;
        localStorage.setItem("authState", JSON.stringify(state));
        console.log(action.payload);
      })
      .addCase(fetchDownlines.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { RESET_AUTH, restoreAuth } = authSlice.actions;

export default authSlice.reducer;
