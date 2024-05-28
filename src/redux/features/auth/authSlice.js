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
      return authService.register(marketerData);
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

// Register Marketer with Referral
export const registerMarketerWithReferral = createAsyncThunk(
  "auth/registerWithReferral",
  async ({ marketerData, referralId }, thunkAPI) => {
    try {
      return authService.registerWithReferral(marketerData, referralId);
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
      return authService.login(marketerData);
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
        toast.success("Registration successful");
      })
      .addCase(registerMarketer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
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
        toast.success("Registration successful");
      })
      .addCase(registerMarketerWithReferral.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
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
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.marketer = action.payload;
        toast.success("Login successful");
      })
      .addCase(loginMarketer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.marketer = null;
        toast.error(action.payload);
      });
  },
});

export const { RESET_AUTH } = authSlice.actions;

export default authSlice.reducer;
