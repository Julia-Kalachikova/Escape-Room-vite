import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from '../../../types';
import { fetchCardsAction } from './api-action-cards';
import { FeatureModule, FilterGenre, FilterLevel } from '../../../const';
import { changeCurrentId, changeGenreName, changeLevelName } from './action-cards';

export type CardsSliceType = {
  cards: CardType[];
  isLoadingCards: boolean;
  currentGenre: string | null;
  currentLevel: string | null;
  currentId: string;
}

const initialState: CardsSliceType = {
  cards: [],
  isLoadingCards: true,
  currentGenre: FilterGenre.ALL,
  currentLevel: FilterLevel.ANY,
  currentId: '',

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
      .addCase(changeGenreName, (state, action) => {
        state.currentGenre = action.payload;
      })
      .addCase(changeLevelName, (state, action) => {
        state.currentLevel = action.payload;
      });
  }
});
