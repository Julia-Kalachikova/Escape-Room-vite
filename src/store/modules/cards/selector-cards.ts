import { FeatureModule } from '../../../const';
import { StateType } from '../../types';


export const getCards = (state: StateType) => state[FeatureModule.CARDS].cards;

export const getIsLoadingCards = (state: StateType) => state[FeatureModule.CARDS].isLoadingCards;

export const getCurrentGenre = (state: StateType) =>
  state[FeatureModule.CARDS].currentGenre;

export const getCurrentLevel = (state: StateType) =>
  state[FeatureModule.CARDS].currentLevel;


