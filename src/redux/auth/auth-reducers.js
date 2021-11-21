import {
  createReducer,
  combineReducers,
} from '@reduxjs/toolkit';

import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
} from './auth-operations';

const initialUserState = { name: null, email: null };

const userReducer = createReducer(initialUserState, {
  [register.fulfilled]: (_, { payload }) => payload.user,
  [logIn.fulfilled]: (_, { payload }) => payload.user,
  [logOut.fulfilled]: () => initialUserState,
  [fetchCurrentUser.fulfilled]: (_, { payload }) => payload,
});

const tokenReducer = createReducer(null, {
  [register.fulfilled]: (_, { payload }) => payload.token,
  [logIn.fulfilled]: (_, { payload }) => payload.token,
  [logOut.fulfilled]: () => null,
});

const isLoggedIn = createReducer(false, {
  [register.pending]: () => false,
  [register.fulfilled]: () => true,
  [register.rejected]: () => false,

  [logIn.pending]: () => false,
  [logIn.fulfilled]: () => true,
  [logIn.rejected]: () => false,

  [logOut.pending]: () => true,
  [logOut.fulfilled]: () => false,
  [logOut.rejected]: () => true,

  [fetchCurrentUser.pending]: () => false,
  [fetchCurrentUser.fulfilled]: () => true,
  [fetchCurrentUser.rejected]: () => false,
});

const isCurrentUser = createReducer(false, {
  [fetchCurrentUser.pending]: () => true,
  [fetchCurrentUser.fulfilled]: () => false,
  [fetchCurrentUser.rejected]: () => false,
});

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  isLoggedIn,
  isCurrentUser,
});
