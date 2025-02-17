import { createAsyncThunk } from '@reduxjs/toolkit';

import { CardTypeFull } from '../../../types';
import { store } from '../../index-store';
import { StateType } from '../../types';
import { AxiosInstance } from 'axios';
import { APIRoutes } from '../../../const';


export const getCardInfoByID = createAsyncThunk<
  CardTypeFull,
  { cardId: string },
  {
    dispatch: typeof store.dispatch;
    state: StateType;
    extra: AxiosInstance;
  }
>('card/getCardInfo',
  async ({cardId}, {extra: api }) => {
    const response = await api.get<CardTypeFull>(
      `${APIRoutes.Cards}/${cardId}`
    );
    return response?.data;
  }
);
