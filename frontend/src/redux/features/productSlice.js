import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAllProduct = createAsyncThunk('product/getAllProduct', async (category) => {
  // Add your API call here
  const response = await fetch(`/api/products${category ? `?category=${category}` : ''}`);
  return response.json();
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;