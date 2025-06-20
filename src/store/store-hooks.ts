import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import type { AppDispatch, StateType } from './types';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
