import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    page: 1,
  },
  reducers: {
    increasePage: ({ page }) => ({ page: page + 1 }),
  },
});

export const { increasePage } = postsSlice.actions;
