import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAllCategory = createAsyncThunk('category/getAllCategory', async () => {
  const response = await fetch('/api/categories');
  return response.json();
});

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categorys: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categorys = action.payload;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;