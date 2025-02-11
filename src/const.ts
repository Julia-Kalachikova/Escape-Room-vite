export enum RoutePath {
  Main = '/',
  Login = '/login',
  Favorites = '/my-quests',
  Quest = '/quest/:id',
  Booking = '/quest/:id/booking',
  NOT_FOUND = '/*',
}

export enum HeaderMenu {
  Escapes = 'Квесты',
  Contact = 'Контакты',
  Favorites = 'Мои бронирования',
  Exit = 'Выйти',
}
