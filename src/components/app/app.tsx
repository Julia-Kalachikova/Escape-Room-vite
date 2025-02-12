import { Route, Routes } from 'react-router-dom';
import { LoginStatus, RoutePath } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import { CardType } from '../../types';
import LoginPage from '../../pages/login-page/login-page';
import QuestPage from '../../pages/quest-page/quest-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-rout/private-rout';
import BookingPage from '../../pages/booking-page/booking-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';


type Props = {
  cards: CardType[];
}

export default function App({cards}: Props): JSX.Element {
  return (
    <Routes>
      <Route
        path={RoutePath.Main}
        element={
          <MainPage
            cards={cards}
          />
        }
      />
      <Route
        path={RoutePath.Login}
        element={<LoginPage/>}
      />
      <Route
        path={RoutePath.Quest}
        element={<QuestPage/>}
      />
      <Route
        path={RoutePath.NOT_FOUND}
        element={<NotFoundPage/>}
      />
      <Route
        path={RoutePath.Contact}
        element={<ContactsPage />}
      />
      <Route
        path={RoutePath.Booking}
        element={
          <PrivateRoute loginStatus={LoginStatus.Auth}>
            <BookingPage/>
          </PrivateRoute>
        }
      />
      <Route
        path={RoutePath.Favorites}
        element={
          <PrivateRoute loginStatus={LoginStatus.Auth}>
            <FavoritePage cards={cards}/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
