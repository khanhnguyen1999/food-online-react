import httpRequest from 'services/httpRequest';

export const fetchUserData = async (url: string) => {
  return httpRequest.get(url, {
    showSpinner: true,
  });
};