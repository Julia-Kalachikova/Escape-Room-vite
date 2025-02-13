import { FeatureModule } from '../../../const';
import { StateType } from '../../types';

export const getAuthStatus = (state: StateType) =>
  state[FeatureModule.AUTH].authStatus;

export const getUserData = (state: StateType) =>
  state[FeatureModule.AUTH].userData;


export const getIsLoadingUser = (state: StateType) =>
  state[FeatureModule.AUTH].isLoadingUser;

