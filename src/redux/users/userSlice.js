import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, signupApi, authenticateApi } from '../../auth-api/AuthApi';
import LocalStorage from '../../app/LocalStorage';

export const authStatus = {
  initialized: 'INTIALIZED',
  unauthenticated: 'UNAUTHENTICATED',
  authenticating: 'AUTHENTICATING',
  authenticated: 'AUTHENTICATED',
  rejected: 'REJECTED',
  failed: 'FAILED',
  registed: 'REGISTERD',
};

const storage = new LocalStorage();
const initialState = {
  status: authStatus.initialized,
  name: '',
  username: '',
  role: '',
  token: storage.get('token'),
};

export const loginThunk = createAsyncThunk('user/login', async (user) => {
  try {
    const data = await loginApi(user);
    return data;
  } catch (err) {
    throw new Error(err);
  }
});
export const signupThunk = createAsyncThunk('user/signup', async (user) => {
  try {
    const data = await signupApi(user);
    return data;
  } catch (err) {
    throw new Error(err);
  }
});

export const authenticateThunk = createAsyncThunk(
  'user/authenticate',
  async (token) => {
    try {
      const data = await authenticateApi(token);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      storage.remove('token');
      storage.remove('username');
      return {
        ...initialState,
        status: authStatus.unauthenticated,
      };
    },
    setAuthenticated: (state) => ({
      ...state,
      status: authStatus.authenticated,
    }),
    setUnAuthenticated: (state) => ({
      ...state,
      status: authStatus.unauthenticated,
    }),
  },
  extraReducers: {
    [loginThunk.pending]: (state) => ({
      ...state,
      status: authStatus.authenticating,
    }),
    [loginThunk.fulfilled]: (state, { payload }) => {
      storage.set('token', payload.data.token);
      storage.set('username', payload.data.username);

      return {
        ...state,
        ...payload.data,
        status: authStatus.authenticated,
      };
    },

    [authenticateThunk.pending]: (state) => ({
      ...state,
      status: authStatus.authenticating,
    }),
    [authenticateThunk.fulfilled]: (state, { payload }) => ({
      ...state,
      ...payload.data,
      status: authStatus.authenticated,
    }),
    [authenticateThunk.rejected]: (state) => ({
      ...state,
      status: authStatus.rejected,
    }),
  },
});

export const { logout, setAuthenticated, setUnAuthenticated } = userSlice.actions;
export default userSlice.reducer;
