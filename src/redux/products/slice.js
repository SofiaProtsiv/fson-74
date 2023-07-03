import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export const fetchProducts = createAsyncThunk(
  "fetchProductsStatus",
  async (_, { rejectWithValue }) => {
    try {
      const { products } = await getProducts();

      if (!products.length) {
        throw new Error("No matches found");
      }

      return products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: STATUS.IDLE,
  error: null,
  products: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = STATUS.PENDING;
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = STATUS.RESOLVED;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = STATUS.REJECTED;
      state.error = action.payload;
      state.products = [];
      state.currenPage +=1 ;
    });
  },
});

export const {setProducts} = productsSlice.actions
export default productsSlice.reducer;

// VARIANT 2

// import { createSlice } from "@reduxjs/toolkit";
// import { getProducts } from "../../api";

// const STATUS = {
//   IDLE: "idle",
//   PENDING: "pending",
//   RESOLVED: "resolved",
//   REJECTED: "rejected",
// };

// export const fetchProducts = () => {
//   return async (dispatch) => {
//     dispatch(fetchProductRequest());
//     try {
//       const { products } = await getProducts();

//       if (!products.length) {
//         throw new Error("No matches found");
//       }

//       dispatch(fetchProductSuccess(products));
//     } catch (error) {
//       dispatch(fetchProductError(error.message));
//     }
//   };
// };

// const initialState = {
//   status: STATUS.IDLE,
//   error: null,
//   products: [],
// };
// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     fetchProductRequest: (state, action) => {
//       state.status = STATUS.PENDING;
//       state.products = [];
//     },
//     fetchProductSuccess: (state, action) => {
//       state.products = action.payload;
//       state.status = STATUS.RESOLVED;
//       state.error = null;
//     },
//     fetchProductError: (state, action) => {
//       state.status = STATUS.REJECTED;
//       state.error = action.payload;
//       state.products = [];
//     },
//   },
// });

// export const { fetchProductRequest, fetchProductSuccess, fetchProductError } =
//   productsSlice.actions;
// export default productsSlice.reducer;
