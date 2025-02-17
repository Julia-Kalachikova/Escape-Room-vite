import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FeatureModule, LoginStatus } from '../../../const';
import { UserType } from '../../../types';
import { checkAuthStatus, loginAction, logoutAction } from './api-action-auth';


export type UserSliceType = {
  authStatus: LoginStatus;
  userData: UserType | null;
  isLoadingUser: boolean;
}

const initialState: UserSliceType = {
  authStatus: LoginStatus.Unknown,
  userData: null,
  isLoadingUser: true,
};

export const authSlice = createSlice({
  name: FeatureModule.AUTH,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthStatus.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(checkAuthStatus.fulfilled, (state, { payload }: PayloadAction<UserType>) => {
        state.userData = payload;
        state.isLoadingUser = false;
        state.authStatus = LoginStatus.Auth;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.isLoadingUser = false;
        state.authStatus = LoginStatus.NotAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(loginAction.fulfilled, (state, { payload }: PayloadAction<UserType>) => {
        state.userData = payload;
        state.isLoadingUser = false;
        state.authStatus = LoginStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoadingUser = false;
        state.authStatus = LoginStatus.NotAuth;
      })
      .addCase(logoutAction.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = LoginStatus.NotAuth;
        state.userData = null;
        state.isLoadingUser = false;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.isLoadingUser = false;
      });
  },
});
