import { createAction } from '@reduxjs/toolkit';

export const changeGenreName = createAction<string>('cards/changeGenreName');

export const changeLevelName = createAction<string>('cards/changeLevelName');


