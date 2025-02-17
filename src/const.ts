import { GenreFilterLink, LevelFilterLink } from './types';


export enum RoutePath {
  Main = '/',
  Login = '/login',
  Favorites = '/my-quests',
  Quest = '/quest/:id',
  Booking = '/quest/:id/booking',
  Contact = '/contacts',
  NOT_FOUND = '/*',
}

export enum HeaderMenu {
  Quests = 'Квесты',
  Contact = 'Контакты',
  Favorites = 'Мои бронирования',
  Exit = 'Выйти',
  Login = 'Вход',
  Phone = '8 (000) 111-11-11',
}

export enum LoginStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoutes {
  Cards = '/quest',
  Login = '/login',
  Logout = '/logout',
}

export const FeatureModule = {
  CARDS: 'cards',
  QUEST: 'quest',
  FAVORITE: 'favorite',
  AUTH: 'auth',
} as const;


export enum FilterGenre {
  ALL='all',
  ADVENTURE ='adventure',
  HORROR = 'horror',
  MYSTIC = 'mystic',
  DETECTIVE = 'detective',
  SCIFI = 'sciFi',
}

export const GenreFilterArray: GenreFilterLink[] = [
  {
    id: 'all',
    xlinkHref: '#icon-all-quests',
    genreName: 'Все квесты'
  },
  {
    id: 'adventure',
    xlinkHref: '#icon-adventure',
    genreName: 'Приключения'
  },
  {
    id: 'horror',
    xlinkHref: '#icon-horror',
    genreName: 'Ужасы'
  },
  {
    id: 'mystic',
    xlinkHref: '#icon-mystic',
    genreName: 'Мистика'
  },
  {
    id: 'detective',
    xlinkHref: '#icon-detective',
    genreName: 'Детектив'
  },
  {
    id: 'sciFi',
    xlinkHref: '#icon-sci-fi',
    genreName: 'Sci-fi'
  }
];

export enum FilterLevel {
  ANY = 'any',
  EASY = 'easy',
  MIDDLE = 'middle',
  HARD = 'hard',
}
export const LevelFilterArray: LevelFilterLink[] = [
  {levelId: 'any', levelName: 'Любой'},
  {levelId: 'easy', levelName:'Лёгкий'},
  {levelId: 'middle', levelName:'Средний'},
  {levelId: 'hard', levelName:'Сложный'}
];
