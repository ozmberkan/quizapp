import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: [],
};

export const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    setAnswers: (state, action) => {
      state.answers = [...state.answers, action.payload];
    },
  },
});

export const { setAnswers } = answersSlice.actions;

export default answersSlice.reducer;
