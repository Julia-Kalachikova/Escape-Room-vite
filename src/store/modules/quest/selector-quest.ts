import { FeatureModule } from '../../../const';
import { StateType } from '../../types';

export const getCardFull = (state: StateType) => state[FeatureModule.QUEST].cardFull;

export const getCardLoadingFull = (state: StateType) => state[FeatureModule.QUEST].cardLoadingFull;
