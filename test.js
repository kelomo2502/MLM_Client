export const getLoginStatus = createAsyncThunk(
  "auth/getLoginStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/login-status"); // Adjust the API endpoint as needed
      return response.data.isLoggedIn;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
