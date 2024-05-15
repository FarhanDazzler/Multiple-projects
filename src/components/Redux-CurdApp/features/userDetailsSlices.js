import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUsers = createAsyncThunk(
  "createUsers",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://663244a9c51e14d69563e7ea.mockapi.io/curd",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://663244a9c51e14d69563e7ea.mockapi.io/curd/${data.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const showUsers = createAsyncThunk(
  "showUsers",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://663244a9c51e14d69563e7ea.mockapi.io/curd"
    );
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const deleteUsers = createAsyncThunk(
  "deleteUsers",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://663244a9c51e14d69563e7ea.mockapi.io/curd/${id}`,
      { method: "DELETE" }
    );
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(showUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((item) => item.id !== id);
        }
        console.log("deleted", action.payload);
      })
      .addCase(deleteUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetails.reducer;
