import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../../App";

const initialState = {
  champaigns: [],
  selectedChampaign: {},
  status: "",
  error: "",
  loading: false,
};

export const getChampaigns = createAsyncThunk(
  "champaigns/getChampaigns",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_API_URL}/campaign`);
      const { data } = await res.json();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const champaignSlice = createSlice({
  name: "champaign",
  initialState,
  reducers: {
    selectChampaign: (state, { payload }) => {
      state.selectedChampaign = payload;
    },
    destroySelectedChampaign: (state) => {
      state.selectedChampaign = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChampaigns.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getChampaigns.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.champaigns = payload;
    });
    builder.addCase(getChampaigns.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const selectChampaigns = (state) => {
  return state.champaign.champaigns;
};
export const selectSelectedChampaign = (state) =>
  state.champaign.selectedChampaign;
export const selectChampaignsLoading = (state) => state.champaign.loading;
export const selectChampaignsStatus = (state) => state.champaign.status;
export const selectChampaignsError = (state) => state.champaign.error;

export const { selectChampaign, destroySelectedChampaign } =
  champaignSlice.actions;

export default champaignSlice.reducer;
