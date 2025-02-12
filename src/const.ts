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
}

export enum LoginStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'UNKNOWN',
}
