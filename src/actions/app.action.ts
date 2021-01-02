const nameSpace = 'app:';

export const SET_LOADING = `${nameSpace}SET_LOADING`;
export const SET_DIALOG = `${nameSpace}SET_DIALOG`;
export const SET_LANGUAGE = `${nameSpace}SET_LANGUAGE`;

export const actSetLoading = (isLoading: boolean) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const actSetDialog = (isShow: boolean, type: string = 'error', content: string = '', dataUpdate: any = "") => ({
  type: SET_DIALOG,
  payload: {
    type,
    isShow,
    content,
    dataUpdate
  },
});

export const actSetLanguage = (isLanguage: string) => ({
  type: SET_LANGUAGE,
  payload: isLanguage
})