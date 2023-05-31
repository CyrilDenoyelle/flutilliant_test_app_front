import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { checkTokenValidity } from './userApi'

export const fetchInitialState = createAsyncThunk(
  'user/fetchInitialState',
  async () => {
    // check user token in db
    const user = await checkTokenValidity()
    return user;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    connectUser: (_, action) => {
      return action.payload
    },
    disconectUser: (_) => {
      return null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialState.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchInitialState.rejected, (state, action) => {
        state.error = action.error.message;
        return state
      });
  },
})

export const { connectUser, disconectUser } = userSlice.actions

export default userSlice.reducer
