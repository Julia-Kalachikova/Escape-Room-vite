import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from '../../../types';
import { fetchCardsAction } from './api-action-cards';
import { FeatureModule, FilterLevel } from '../../../const';
import { changeLevelName } from './action-cards';

export type CardsSliceType = {
  cards: CardType[];
  isLoadingCards: boolean;
  currentLevel: string;
}

const initialState: CardsSliceType = {
  cards: [],
  isLoadingCards: true,
  currentLevel: FilterLevel.ANY,
};

export const cardsSlice = createSlice({
  name: FeatureModule.CARDS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardsAction.pending, (state) => {
        state.isLoadingCards = true;
      })
      .addCase(fetchCardsAction.fulfilled, (state, { payload }: PayloadAction<CardType[]>) => {
        state.cards = payload;
        state.isLoadingCards = false;
      })
      .addCase(fetchCardsAction.rejected, (state) => {
        state.isLoadingCards = false;
      })
      .addCase(changeLevelName, (state, action) => {
        state.currentLevel = action.payload;
      });
  },
});
