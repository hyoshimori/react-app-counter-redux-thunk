import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { asyncCount } from "../../api/counter";

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    add(state, { type, payload }) {
      const newState = { ...state };
      newState.count = state.count + payload
      return newState;
    },
    minus(state, { type, payload }) {
      const newState = { ...state };
      newState.count = state.count - payload
      return newState;
    }
  },
// ********** NOTES **********
// In extraReducers, you can add updates with which you need to add some conditions
// Here extraReducers is used to work with 3 conditions(When not completed, completed, and error)
// ********** NOTES **********

  extraReducers: (builder) => {
    builder.addCase(addAsyncWithStatus.pending, (state) => {
      state.status = "Loading..."
    })
    .addCase(addAsyncWithStatus.fulfilled, (state, action) => {
      state.status = "Success!"
      state.count = state.count + action.payload
    })
    .addCase(addAsyncWithStatus.rejected, (state) => {
      state.status = "An Error occurred"
    })
  }
})

const { add, minus } = counter.actions;

// ********** NOTES **********
// We use these 3 infos ("payload", "dispatch" and "getState") to trigger the async function
// You just need to get used to this way of writting(When "await", add async next to return)
// ********** NOTES **********
// TO payload, arguments come form data property from api
// "response.data" goes to "payload"
// ********** NOTES **********

const addAsyncWithStatus = createAsyncThunk(
  'counter/acsyncCount',
  // This can be anything (even "dog/cat") but just following the convention
  async (payload) => {
  const response = await asyncCount(payload)
  return response.data
  }
)
const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const response = await asyncCount(payload)
    dispatch(add(response.data))
  }
}

export { add, minus, addAsync, addAsyncWithStatus }
export default counter.reducer
