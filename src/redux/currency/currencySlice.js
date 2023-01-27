import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../../App";

const initialState = {
    cashCurrencies: [],
    cashCurrenciesError: "",
    cashCurrenciesLoading: false,
    cashCurrenciesStatus: "",
    cryptoCurrencies: [],
    cryptoCurrenciesError: "",
    cryptoCurrenciesLoading: false,
    cryptoCurrenciesStatus: ""
};

export const getCashCurrencies = createAsyncThunk(
    "currency/getCashCurrencies",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${BASE_API_URL}/currency`);
            const { data } = await res.json();
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);


export const getCryptoCurrencies = createAsyncThunk(
    "currency/getCryptoCurrencies",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${BASE_API_URL}/cryptocurrency`);
            const { data } = await res.json();
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCashCurrencies.pending, (state) => {
            state.cashCurrenciesLoading = true;
        });
        builder.addCase(getCashCurrencies.fulfilled, (state, { payload }) => {
            state.cashCurrenciesLoading = false;
            state.cashCurrencies = payload;
        });
        builder.addCase(getCashCurrencies.rejected, (state, { payload }) => {
            state.cashCurrenciesLoading = false;
            state.cashCurrenciesError = payload;
        });
        builder.addCase(getCryptoCurrencies.pending, (state) => {
            state.cryptoCurrenciesLoading = true;
        });
        builder.addCase(getCryptoCurrencies.fulfilled, (state, { payload }) => {
            state.cryptoCurrenciesLoading = false;
            state.cryptoCurrencies = payload;
        });
        builder.addCase(getCryptoCurrencies.rejected, (state, { payload }) => {
            state.cryptoCurrenciesLoading = false;
            state.cryptoCurrenciesError = payload;
        });
    },
});

export const selectCashCurrencies = (state) => {
    return state.currency.cashCurrencies
};

export const selectCryptoCurrencies = (state) => {
    return state.currency.cryptoCurrencies
};


export default currencySlice.reducer;
