export const RESTORE_TOKEN = 'RESTORE_TOKEN';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const restoreToken = (userToken) => ({
  type: RESTORE_TOKEN,
  token: userToken,
});

export const signIn = (userToken) => ({
  type: SIGN_IN,
  token: userToken,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
