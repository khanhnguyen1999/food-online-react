import httpRequest from 'services/httpRequest';

export const fetchFood = async (id: string) => {
  return httpRequest.get(`/foods/${id}`);
};