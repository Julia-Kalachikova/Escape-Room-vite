
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
