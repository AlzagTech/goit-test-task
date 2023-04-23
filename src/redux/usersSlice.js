import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleIsFollowed(state, action) {
      for (const user of state.items) {
        if (user.id === action.payload) {
          user.isFollowed = !user.isFollowed;
          user.followers = user.isFollowed
            ? user.followers + 1
            : user.followers - 1;
          break;
        }
      }
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { toggleIsFollowed } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
