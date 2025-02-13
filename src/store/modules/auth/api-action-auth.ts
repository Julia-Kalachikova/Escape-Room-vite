import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateType } from '../../types';
import { AuthData, UserType } from '../../../types';
import { AxiosInstance } from 'axios';
import { APIRoutes } from '../../../const';
import { dropToken, saveToken } from '../../../service/token';
import { store } from '../../index-store';


export const checkAuthStatus = createAsyncThunk<
UserType,
  undefined, {
    dispatch: typeof store.dispatch;
    state: StateType;
    extra: AxiosInstance;
  }
>('user/checkAuthStatus',
  async (_arg, { extra: api }) => {
    const response = await api.get<UserType>(APIRoutes.Login);
    return response?.data;
  }
);

export const loginAction = createAsyncThunk<UserType, AuthData, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}
>('user/login',
  async ({ email, password }, { extra: api }) => {
    const response = await api.post<UserType>(APIRoutes.Login, { email, password });
    if (response) {
      saveToken(response.data.token);
    }
    return response?.data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}
>('user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
  }
);
