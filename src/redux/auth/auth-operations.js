import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (registrationData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        '/users/signup',
        registrationData,
      );
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        '/users/login',
        loginData,
      );
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, ThunkAPI) => {
    const persistedToken = ThunkAPI.getState().auth.token;
    console.log(ThunkAPI);

    if (persistedToken === null) {
      return ThunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  },
);
