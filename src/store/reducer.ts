import { combineReducers } from '@reduxjs/toolkit';
import { FeatureModule } from '../const';
import { authSlice } from './modules/auth/slice-auth';
import { cardsSlice } from './modules/cards/slice-cards';

export const reducer = combineReducers({
  [FeatureModule.AUTH]: authSlice.reducer,
  [FeatureModule.CARDS]: cardsSlice.reducer,
  // [FeatureModule.OFFER]: offerFullSlice.reducer,
  // [FeatureModule.FAVORITE]: favoriteSlice.reducer,
});
