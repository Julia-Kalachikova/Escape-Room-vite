import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { CardType } from '../../../types';
import { APIRoutes } from '../../../const';
import { store } from '../../index-store';
import { StateType } from '../../types';


export const fetchCardsAction = createAsyncThunk<CardType[],
undefined,
{
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'cards/get',
  async (_arg, {extra: api}) => {
    const response = await api.get<CardType[]>(APIRoutes.Cards);
    return response?.data;
  }
);
