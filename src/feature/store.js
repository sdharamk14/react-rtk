import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
// import logger from "react-logger";

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
