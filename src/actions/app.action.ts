const nameSpace = 'app:';

export const SET_LOADING = `${nameSpace}SET_LOADING`;
export const SET_DIALOG = `${nameSpace}SET_DIALOG`;

export const setLoading = (isLoading: boolean) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const setDialog = (isShow: boolean, type: string = 'error', content: React.ReactNode = '') => ({
  type: SET_DIALOG,
  payload: {
    type,
    isShow,
    content,
  },
});
