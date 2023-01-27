import { configureStore } from "@reduxjs/toolkit";
import champaignReducer from "../redux/champaign/champaignSlice";
import donationReducer from "../redux/donation/donationSlice";
import currencyReudcer from "../redux/currency/currencySlice";

export default configureStore({
  reducer: {
    champaign: champaignReducer,
    donation: donationReducer,
    currency: currencyReudcer
  },
});
