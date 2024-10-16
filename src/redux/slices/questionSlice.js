import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getRandomQuestions = (questions, count = 10) => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5); 
  return shuffled.slice(0, count);
};

const initialState = {
  questions: [],
  currentQuestion: 0,
  status: "idle",
};

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const questions = response.data.map((post) => {
        const options = post.body.split("\n").slice(0, 4);

        return {
          id: post.id,
          question: post.title,
          options: options.length === 4 ? options : ["A", "B", "C", "D"],
          correctAnswer: options[Math.floor(Math.random() * options.length)],
        };
      });

      // Rastgele 10 soru seç
      const randomQuestions = getRandomQuestions(questions);
      return randomQuestions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "success";
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setCurrentQuestion } = questionSlice.actions;

export default questionSlice.reducer;
