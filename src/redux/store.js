import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./slices/questionSlice";
import answersSlice from "./slices/answersSlice";

export const store = configureStore({
  reducer: {
    questions: questionSlice,
    answers: answersSlice,
  },
});
