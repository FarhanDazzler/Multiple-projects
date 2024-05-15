import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./features/userDetailsSlices";

export const store = configureStore({
  reducer: {
    app: userDetails,
  },
});
