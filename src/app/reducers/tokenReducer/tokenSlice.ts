import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchToken } from '../../../services';

const initialState = {
  token: '',
  isLoading: false,
};

const savePlayerToken = createAsyncThunk('token/savePlayerToken', async () => {
  const response = await fetchToken();
  return response;
});

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(savePlayerToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        savePlayerToken.fulfilled,
        (state, { payload: { token: APIToken } }) => {
          state.token = APIToken;
          state.isLoading = false;

          localStorage.setItem('token', state.token);
        }
      );
  },
});

export { savePlayerToken };

export default tokenSlice.reducer;
