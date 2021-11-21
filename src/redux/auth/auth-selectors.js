export const getToken = state => state.auth.token;
export const getStatus = state => state.auth.isLoggedIn;
export const getCurrentUser = state =>
  state.auth.isCurrentUser;
