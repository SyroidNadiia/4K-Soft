import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { register } from './authOperations';


interface ServerResponse {
  data: {
    user: any;
  };
}

interface AuthState {
  user: any;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'api/auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<ServerResponse | undefined>) => {
          if (
            action.payload &&
            action.payload.data &&
            action.payload.data.user
          ) {
            state.user = action.payload.data.user;
          } else {
            state.user = null;
          }
        
        }
      )
      .addCase(
        register.rejected,
        (state, action: PayloadAction<unknown, string, any, any>) => {
          state.user = null;
        }
      );
  },
});

export default authSlice.reducer;