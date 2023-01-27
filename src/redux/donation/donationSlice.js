import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../../App";
import { getChampaigns } from "../champaign/champaignSlice";

const initialState = {
  donationError: "",
  donationLoading: false,
  donationStatus: "",
};

export const donate = createAsyncThunk(
  "donation/donate",
  async (
    { body, isCrypto, successCallback },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const cryptoQuery = isCrypto ? "?isCrypto=true" : "";
      const res = await fetch(`${BASE_API_URL}/donations${cryptoQuery}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const { data } = await res.json();
      dispatch(getChampaigns());
      successCallback();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const donationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(donate.pending, (state) => {
      state.donationLoading = true;
    });
    builder.addCase(donate.fulfilled, (state) => {
      state.donationLoading = false;
    });
    builder.addCase(donate.rejected, (state, { payload }) => {
      state.donationLoading = false;
      state.donationError = payload;
    });
  },
});

export default donationSlice.reducer;
