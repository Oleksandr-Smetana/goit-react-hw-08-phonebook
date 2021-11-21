export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getToken = state => state.auth.token;
export const getStatus = state => state.auth.isLoggedIn;
export const getCurrentUser = state =>
  state.auth.isCurrentUser;
