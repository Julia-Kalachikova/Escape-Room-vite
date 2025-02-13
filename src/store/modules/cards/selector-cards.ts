import { FeatureModule } from '../../../const';
import { StateType } from '../../types';


export const getCards = (state: StateType) => state[FeatureModule.CARDS].cards;

export const getIsLoadingCards = (state: StateType) => state[FeatureModule.CARDS].isLoadingCards
