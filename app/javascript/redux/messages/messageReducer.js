import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMessages = createAsyncThunk("rail-react/messages", async () => {
  console.log("fetchMessages")
  const response = await fetch("/api/v1/messages");
  return response.json();
})

const messageReducer = createSlice({
  name: "react-rail/messages",
  initialState: {
    messages: []
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, 
      (state, action) => ({...state, messages: action.payload}))
  }
});

export default messageReducer.reducer