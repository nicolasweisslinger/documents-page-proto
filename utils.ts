import base64 from 'base-64';

export const getUserIdFromToken = (token: string | null) => {
  const tokenSplit = token ? token.split('.') : [];

  if (tokenSplit.length < 2) {
    return '';
  }

  try {
    const decryptedToken = JSON.parse(base64.decode(tokenSplit[1]));
    return decryptedToken.user_id;
  } catch (e) {}

  return '';
};
