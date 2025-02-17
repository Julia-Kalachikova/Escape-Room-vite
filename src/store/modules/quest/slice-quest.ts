import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardTypeFull } from '../../../types';
import { FeatureModule } from '../../../const';
import { getCardInfoByID } from './api-action-quest';


export type CardSliceType = {
  cardFull: CardTypeFull | null;
  cardLoadingFull: boolean;
};

const initialState: CardSliceType = {
  cardFull: null,
  cardLoadingFull: true,
};

export const cardFullSlice = createSlice({
  name: FeatureModule.QUEST,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCardInfoByID.pending, (state) => {
        state.cardLoadingFull = true;
      })
      .addCase(getCardInfoByID.fulfilled, (state, { payload }: PayloadAction<CardTypeFull>) => {
        state.cardFull = payload;
        state.cardLoadingFull = false;
      })
      .addCase(getCardInfoByID.rejected, (state) => {
        state.cardLoadingFull = false;
      });
  },
});

